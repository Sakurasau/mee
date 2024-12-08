// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri::{command, Emitter, Window};
use tauri_plugin_oauth::{OauthConfig, start_with_config};

#[command]
fn start_server(window: Window) -> Result<u16, String> {
    let config = OauthConfig {
        ports: Some(vec![37329]), // Укажите допустимые порты
        response: Some("Authorization complete. You can close this window.".into()),
    };

    start_with_config(config, move |url| {
        // Верифицируйте URL для безопасности
        let _ = window.emit("redirect_uri", url);
    })
    .map_err(|err| err.to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_oauth::init())
        .invoke_handler(tauri::generate_handler![start_server])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
