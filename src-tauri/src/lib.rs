static WEAPON_DATA: &str = include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/src/data/Weapons.json"));
static ARCOLOGY_DATA: &str = include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/src/data/Arcologies.json"));


// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![load_wep_pro_data, load_archologies])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn load_wep_pro_data() -> String {
  WEAPON_DATA.to_string()
}

#[tauri::command]
fn load_archologies() -> String {
  ARCOLOGY_DATA.to_string()
}