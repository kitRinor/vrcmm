use super::watcher::{Payload, VrcLogEvent};
use rusqlite::{params, Connection};
use std::fs;
use std::sync::{Arc, Mutex};

// エラーハンドリング用
type DbResult<T> = Result<T, Box<dyn std::error::Error>>;

#[derive(Clone)]
pub struct LogDatabase {
    conn: Arc<Mutex<Connection>>,
}

impl LogDatabase {
    /// データベースを初期化する
    /// 保存場所: AppData\Local\VRCP\vrcp.db
    pub fn new() -> DbResult<Self> {
        // 1. AppData\Local ディレクトリを取得
        // (Linuxでは ~/.local/share, Macでは ~/Library/Application Support 相当)
        let data_local_dir = dirs::data_local_dir().ok_or("Failed to get local data directory")?;

        // 2. VRCP フォルダのパスを作成
        let app_dir = data_local_dir.join("VRCP");

        // 3. ディレクトリが存在しなければ作成
        if !app_dir.exists() {
            fs::create_dir_all(&app_dir)?;
            println!("Created app data directory: {:?}", app_dir);
        }

        // 4. vrcp.db のパス
        let db_path = app_dir.join("vrcp.db");
        println!("Database path: {:?}", db_path);

        // 5. 接続とテーブル作成
        let conn = Connection::open(db_path)?;

        conn.execute(
            "CREATE TABLE IF NOT EXISTS logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                timestamp TEXT NOT NULL,
                event_type TEXT NOT NULL,
                data TEXT NOT NULL
            )",
            [],
        )?;

        Ok(LogDatabase {
            conn: Arc::new(Mutex::new(conn)),
        })
    }

    /// ログを1件保存する
    pub fn insert_log(&self, payload: &Payload) -> DbResult<()> {
        let conn = self.conn.lock().unwrap();

        // JSON変換
        let data_json = serde_json::to_string(&payload.event)?;

        // イベントタイプ名を取得 (簡易実装)
        let event_type = format!("{:?}", payload.event)
            .split_whitespace()
            .next()
            .unwrap_or("Unknown")
            .to_string()
            .replace(" {", "")
            .replace("}", "");

        conn.execute(
            "INSERT INTO logs (timestamp, event_type, data) VALUES (?1, ?2, ?3)",
            params![payload.timestamp, event_type, data_json],
        )?;

        Ok(())
    }
}
