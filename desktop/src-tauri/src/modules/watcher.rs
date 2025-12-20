// desktop/src-tauri/src/modules/watcher.rs

use std::fs::{self, File};
use std::io::{BufRead, BufReader, Seek, SeekFrom};
use std::path::PathBuf;
use serde::Serialize;
use regex::Regex; 
use specta::Type;

// 1. ログデータ構造 (情報をリッチにする)
#[derive(Debug, Serialize, Clone, PartialEq, Type)] 
pub struct LogEntry {
    pub timestamp: String, // "2025.12.13 15:30:00"
    pub log_type: String,  // "Log" or "Warning" etc
    pub content: String,   // "[Player] Riku Joined"
}

// 2. ログ監視クラス
pub struct VRChatLogWatcher {
    path: PathBuf,
    last_position: u64,
    parser: Regex, // 正規表現エンジンを保持
}

impl VRChatLogWatcher {
    pub fn new(path: PathBuf) -> Self {
        // VRChatのログ形式にマッチする正規表現
        // 例: "2023.10.01 00:00:00 Log        -  Content"
        let re = Regex::new(r"^(\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}:\d{2}) ([^ ]+)\s+-\s+(.*)$").unwrap();

        Self {
            path,
            last_position: 0,
            parser: re,
        }
    }

    /// 行を解析して LogEntry に変換する
    fn parse_line(&self, line: &str) -> Option<LogEntry> {
        // 正規表現でキャプチャ
        if let Some(caps) = self.parser.captures(line) {
            return Some(LogEntry {
                timestamp: caps[1].to_string(),
                log_type: caps[2].to_string(),
                content: caps[3].to_string(),
            });
        }
        // マッチしない行（スタックトレースなど）はとりあえず無視するか、全部contentに入れる
        None 
    }

    /// ファイルを読み込んで、解析済みの構造体を返す
    pub fn read_new_entries(&mut self) -> Result<Vec<LogEntry>, std::io::Error> {
        let mut file = File::open(&self.path)?;
        let current_len = file.metadata()?.len();

        if current_len < self.last_position {
            self.last_position = 0;
        }

        file.seek(SeekFrom::Start(self.last_position))?;

        let reader = BufReader::new(file);
        let mut entries = Vec::new();

        for line in reader.lines() {
            let line_str = line?;
            // パースに成功した行だけリストに追加
            if let Some(entry) = self.parse_line(&line_str) {
                entries.push(entry);
            }
        }

        self.last_position = current_len;
        Ok(entries)
    }
}

// ▼▼▼ ヘルパー関数 (前回と同じ) ▼▼▼

pub fn get_default_vrchat_dir() -> Option<PathBuf> {
    dirs::home_dir().map(|path| {
        path.join("AppData")
            .join("LocalLow")
            .join("VRChat")
            .join("VRChat")
    })
}

pub fn find_latest_log(dir: &PathBuf) -> Option<PathBuf> {
    let entries = fs::read_dir(dir).ok()?;

    let mut log_files: Vec<PathBuf> = entries
        .filter_map(|entry| entry.ok())
        .map(|entry| entry.path())
        .filter(|path| {
            if let Some(name) = path.file_name().and_then(|n| n.to_str()) {
                name.starts_with("output_log_") && name.ends_with(".txt")
            } else {
                false
            }
        })
        .collect();

    log_files.sort_by_key(|path| {
        path.metadata()
            .and_then(|m| m.modified())
            .ok()
    });

    log_files.pop()
}

// ▼▼▼ テストコード (パース試験を追加) ▼▼▼
#[cfg(test)]
mod tests {
    use super::*;
    use std::io::Write;

    #[test]
    fn test_log_parser() {
        let test_file_path = PathBuf::from("test_parser_log.txt");
        
        // 1. テストデータ作成
        {
            let mut file = File::create(&test_file_path).unwrap();
            // 正しい形式の行
            writeln!(file, "2025.12.13 15:00:00 Log        -  [Player] XXXXXX Joined").unwrap();
            // 無視されるべき行（ゴミデータ）
            writeln!(file, "Invalid Line Data").unwrap();
            // 別のログ
            writeln!(file, "2025.12.13 15:05:00 Warning    -  [System] Low FPS").unwrap();
        }

        let mut watcher = VRChatLogWatcher::new(test_file_path.clone());

        // 2. 読み込み実行
        let entries = watcher.read_new_entries().unwrap();

        // 3. 検証
        assert_eq!(entries.len(), 2); // 3行中、有効なのは2行だけ

        // 1行目のチェック
        assert_eq!(entries[0].timestamp, "2025.12.13 15:00:00");
        assert_eq!(entries[0].log_type, "Log");
        assert_eq!(entries[0].content, "[Player] XXXXXX Joined");

        // 2行目のチェック
        assert_eq!(entries[1].log_type, "Warning");
        assert_eq!(entries[1].content, "[System] Low FPS");

        std::fs::remove_file(test_file_path).unwrap();
    }
}