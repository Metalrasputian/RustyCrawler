pub fn get_arcologies() -> String {
    String::from(r#"[
        {
            "name": "Bolschev",
            "quirkTitle": "Overloading",
            "quirkDescription": "Once per game Round, during either the Manoeuvring or Gunnery Phase, a Bolshev Pilot may Stress their Reactor even if it is already at maximum Stress. If they do so, the Frame takes a single point of Damage to the body as its cooling systems fail and internal components suffer damage.",
            "initialPilots": [
                {
                    "rank":"Veteran",
                    "min":0,
                    "max":-1
                },
                {
                    "rank":"Trained",
                    "min":2,
                    "max":-1
                },
                {
                    "rank":"Rookie",
                    "min":0,
                    "max":-1
                }
            ],
            "framePreference": [
                {"min": 1, "max": -1},
                {"min": 1, "max": -1},
                {"min": 0, "max": 1},
            ],
            "propulsionTypes": [
                "Tracked",
                "Multi-limbed",
                "Bipedal"
            ]
        }
    ]"#)
}