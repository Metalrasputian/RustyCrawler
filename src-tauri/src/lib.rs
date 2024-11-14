use std::fs;
use serde_json;

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, load_wep_pro_data])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}!", name)
}

#[tauri::command]
fn load_wep_pro_data() {
  let wep_file = fs::File::open("../data/Weapons.json").expect("file should open read only");
  let json_file: serde_json::Value = serde_json::from_reader(wep_file).expect("file should be JSON format");
  let json_array = json_file.as_array();
  for wep in json_array {

  };
}