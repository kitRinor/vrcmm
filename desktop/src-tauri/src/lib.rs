// desktop/src-tauri/src/lib.rs

pub mod modules;

use modules::watcher::{VRChatLogWatcher, LogEntry, get_default_vrchat_dir, find_latest_log};
use std::sync::Mutex;
use tauri::State;
use specta_typescript::Typescript;
use specta::Type;
use tauri_specta::*;


// 1. アプリの状態（メモリ）を定義
// Mutexを使うことで、複数の場所から安全に書き換えられるようにします
struct AppState {
    watcher: Mutex<Option<VRChatLogWatcher>>,
}


// 2. フロントエンドから呼ばれるコマンド
#[tauri::command] 
#[specta::specta]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
#[specta::specta]
fn check_log_updates(state: State<AppState>) -> Result<Vec<LogEntry>, String> {
    // Stateをロックして中身を取り出す
    let mut watcher_guard = state.watcher.lock().map_err(|_| "Failed to lock mutex")?;

    // ウォッチャーが準備できているか確認
    if let Some(watcher) = watcher_guard.as_mut() {
        // ログを読み取る
        match watcher.read_new_entries() {
            Ok(entries) => Ok(entries),
            Err(e) => Err(format!("Error reading log: {}", e)),
        }
    } else {
        // ウォッチャーがない（ログファイルが見つからなかったなど）
        // ここで再スキャンするロジックを入れてもいいが、まずは「準備できてないよ」と返す
        Err("Log watcher is not initialized".to_string())
    }
}

// -------------------------------------

// Specta用のビルダーを作成する関数
pub fn create_specta_builder() -> tauri_specta::Builder<tauri::Wry> {
    tauri_specta::Builder::<tauri::Wry>::new()
        .commands(tauri_specta::collect_commands![
            greet,
            check_log_updates
        ])
}

// 3. アプリのエントリーポイント
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // 起動時にログファイルを探してみる
    let watcher = if let Some(dir) = get_default_vrchat_dir() {
        if let Some(log_path) = find_latest_log(&dir) {
            println!("Found log file: {:?}", log_path);
            Some(VRChatLogWatcher::new(log_path))
        } else {
            println!("No log file found in VRChat directory.");
            None
        }
    } else {
        println!("Could not find VRChat directory.");
        None
    };


    //

    let builder = create_specta_builder();

    #[cfg(debug_assertions)] // デバッグビルド時のみ生成
    builder
        .export(
            Typescript::default()
                // .formatter(specta_typescript::formatter::prettier)
                .header("/* eslint-disable */"),
            "../src/lib/bindings.ts",
        )
        .expect("Failed to export typescript bindings");

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .manage(AppState {
            watcher: Mutex::new(watcher),
        })
        .invoke_handler(builder.invoke_handler())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}