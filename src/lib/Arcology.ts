import { PilotRank } from "./Pilot";

export class Arcology {
    name: string;
    quirkTitle: string;
    quirkDescription: string;
    initialPilots: {rank: PilotRank, min:number, max:number}[];
    framePreference: {min:number, max:number}[];
    propulsionTypes:string[];


    constructor(name: string, quirkTitle: string, quirkDescription: string, initialPilots: {rank: PilotRank, min:number, max:number}[], framePreference:{min:number, max:number}[], propulsionTypes:string[]){
        this.name=name;
        this.quirkTitle = quirkTitle;
        this.quirkDescription = quirkDescription;
        this.initialPilots = initialPilots;
        this.framePreference = framePreference;
        this.propulsionTypes = propulsionTypes;
    }
}

export let arcologies:Arcology[] = [
        new Arcology("Bolschev", 
            "Overloading",
            "Once per game Round, during either the Manoeuvring or Gunnery Phase, a Bolshev Pilot may Stress their Reactor even if it is already at maximum Stress. If they do so, the Frame takes a single point of Damage to the body as its cooling systems fail and internal components suffer damage.",
            [{rank:PilotRank.Veteran, min: 0, max: -1}, {rank:PilotRank.Trained,min: 2, max: -1}, {rank:PilotRank.Rookie,min: 0, max: -1}],
            [{min: 1, max: -1}, {min:1, max: -1}, {min: 0, max: 1}],
            ["Tracked", "Multi-limbed", "Bipedal"]
        ),
        new Arcology("The Burg", 
            "Humanity 2.0",
            "The enhanced physiology of The Burg’s Pilots allows them to easily process the toxic soup that makes up the atmosphere in the Sea of Destruction. They do not take Damage during the Cool-Down Phase when their Frame is Critically Damaged in the body location, but they do suffer Injuries from additional Damage to their Frame during an Engagement.",
            [{rank:PilotRank.Veteran, min: 0, max: 1}, {rank:PilotRank.Trained,min: 0, max: -1}, {rank:PilotRank.Rookie,min: 0, max: 1}],
            [{min: 0, max: 2}, {min:0, max: 4}, {min: 0, max: 2}],
            ["Any"]
        ),
        new Arcology("Ghosts of Tiamat", 
            "Deus Ex Machina",
            "Pilots in a Ghosts of Tiamat Crew may not be Aces. They always deploy Trained Pilots. They do not take Damage during the Cool-Down Phase when their Frame is Critically Damaged in the body location, but they do suffer Injuries from additional Damage to their Frame.\n\nWhen Injured, their Pilots do not suffer any penalties to Tests. They recover Injuries as usual between Missions. During the Cool-Down Phase, they receive +1 die roll modifier to all Technical Tests.\n\nDuring a Campaign, their Pilots may never earn Experience or change Experience Level. They do not roll for Injuries when their Frame is disabled. The Crew may not visit Free Stations. They automatically identify and repair Old-Tech, which is immediately available for the next Mission without any additional Cost. Parts must be used to repair Frames as usual.",
            [{rank:PilotRank.Veteran, min: 0, max: 0}, {rank:PilotRank.Trained,min: 4, max: -1}, {rank:PilotRank.Rookie,min: 0, max: 0}],
            [{min: 0, max: 2}, {min:0, max: 4}, {min: 0, max: 2}],
            ["Any"]
        ),
        new Arcology("Hinode", 
            "Masters and Apprentices",
            "A Hinode Crew must include one Rookie Pilot for each Veteran and Trained Pilot in the Crew when it is created. Further, each Rookie Pilot must be associated with a Veteran or Trained Pilot – their Master. Both must pilot the same size Frame, though they need not have the same Loadouts. Whenever the Rookie Pilot performs a Gunnery, Evasion, or Manoeuvre Test while their Master has Lock to them, they receive +1 to the results of their Test roll. This bonus is lost during a Campaign if the Rookie Pilot achieves the same Training Level as their Master, at which time the relationship ends.",
            [{rank:PilotRank.Veteran, min: 0, max: 0}, {rank:PilotRank.Trained,min: 4, max: -1}, {rank:PilotRank.Rookie,min: 0, max: 0}],
            [{min: 0, max: 2}, {min:0, max: 4}, {min: 0, max: 2}],
            ["Multi-Limbed", "Bipedal", "Jet"]
        ),
        new Arcology("North-Star", 
            "Meat for the Grinder",
            "A North-Star Crew may never contain more Veteran or Trained Pilots than Rookie Pilots when it is first created. Whenever a Veteran or Trained Pilot in a North- Star Crew performs an Evasion Test and a Rookie Pilot from the same Crew also has Lock with the active Frame, they receive +1 to the Evasion Roll. The Rookie Pilot’s Frame automatically takes a single point of Damage to a random Location, as they are used as a distraction.",
            [{rank:PilotRank.Veteran, min: 0, max: 1}, {rank:PilotRank.Trained,min: 0, max: 2}, {rank:PilotRank.Rookie,min: 1, max: -1}],
            [{min: 0, max: 1}, {min:0, max: 6}, {min: 0, max: 2}],
            ["Any"]
        ),
        new Arcology("Ronin", 
            "Smokin’ Aces",
            "Due to their Experience Level and previous time spent with other Crews, any number of Pilots in a Ronin Crew may be Aces, instead of the usual limit of one.\n\nDuring Campaigns, they may recruit Aces of any Level when they return to their Home Free Station, either by choice or necessity.",
            [{rank:PilotRank.Veteran, min: 0, max: 1}, {rank:PilotRank.Trained,min: 0, max: 2}, {rank:PilotRank.Rookie,min: 1, max: -1}],
            [{min: 0, max: 1}, {min:0, max: 6}, {min: 0, max: 2}],
            ["Any"]
        )
    ];