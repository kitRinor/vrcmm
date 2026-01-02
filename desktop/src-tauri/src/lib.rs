mod modules;
use tauri_specta::{collect_commands, collect_events, Builder as SpectaBuilder};

// ---------------------------------------------------------
// Specta Builder
// ---------------------------------------------------------

pub fn create_specta_builder() -> SpectaBuilder {
    SpectaBuilder::new()
        .commands(collect_commands![modules::server::get_server_url])
        .events(collect_events![
            modules::watcher::Payload,
            modules::watcher::VrcLogEvent
        ])
}

// ---------------------------------------------------------
// Entry Point
// ---------------------------------------------------------

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let builder = create_specta_builder();

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(builder.invoke_handler())
        .setup(move |app| {
            builder.mount_events(app);

            // DB 初期化
            let db = modules::db::LogDatabase::new().expect("failed to initialize database");
            // Watcher起動
            modules::watcher::spawn_log_watcher(app.handle().clone(), db.clone());

            modules::server::spawn_server(db);
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
