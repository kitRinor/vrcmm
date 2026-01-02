use axum::{
    extract::{Query, State},
    http::StatusCode,
    routing::get,
    Json, Router,
};
use local_ip_address::local_ip;
use serde::Deserialize;
use std::net::SocketAddr;
use tower_http::cors::CorsLayer;

use super::db::LogDatabase;
use super::watcher::Payload;

const SERVER_PORT: u16 = 3000;

/// Query parameters for the /logs endpoint
#[derive(Deserialize)]
struct LogParams {
    /// Get logs occurred after this timestamp.
    /// Optional: if missing, returns all logs (or you can set a default limit).
    since: Option<String>,
}

/// Handler for GET /logs
async fn handle_get_logs(
    State(db): State<LogDatabase>,
    Query(params): Query<LogParams>,
) -> Result<Json<Vec<Payload>>, StatusCode> {
    // Default to a very old date if 'since' is not provided
    let since = params
        .since
        .unwrap_or_else(|| "1970.01.01 00:00:00".to_string());

    println!("HTTP Request: Get logs since {}", since);

    match db.get_logs_since(&since) {
        Ok(logs) => Ok(Json(logs)),
        Err(e) => {
            eprintln!("Failed to fetch logs from DB: {}", e);
            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}

/// Start the HTTP server in a background task
pub fn spawn_server(db: LogDatabase) {
    tauri::async_runtime::spawn(async move {
        // Build the application router
        let app = Router::new()
            .route("/logs", get(handle_get_logs))
            .with_state(db) // Share the DB instance with handlers
            .layer(CorsLayer::permissive()); // Allow access from Mobile (different IP)

        // Listen on 0.0.0.0 to accept connections from LAN (Mobile)
        // Port 3000 (You might want to make this configurable later)
        let addr = SocketAddr::from(([0, 0, 0, 0], SERVER_PORT));
        println!("HTTP Server listening on http://{}", addr);

        let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
        axum::serve(listener, app).await.unwrap();
    });
}

#[tauri::command]
#[specta::specta]
pub fn get_server_url() -> Result<String, String> {
    let ip = local_ip().map_err(|e| e.to_string())?;
    // IPアドレスとポート3000を組み合わせる
    Ok(format!("http://{}:{}", ip, SERVER_PORT))
}
