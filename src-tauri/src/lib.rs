#[path = "data/weapon_profiles.rs"] mod weapon_profiles;
#[path = "data/arcologies.rs"] mod arcologies;

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
  weapon_profiles::get_weapon_profiles()
}

#[tauri::command]
fn load_archologies() -> String {
  arcologies::get_arcologies()
}