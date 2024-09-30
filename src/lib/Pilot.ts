export class Pilot {
    name: string = "";
    experience: number = 0;
    experienceLevel: PilotRank = PilotRank.Rookie;
    enduranceBase: number = 2;
    skills = [
        {name: "manouvre", base:5},
        {name: "gunnery", base:5},
        {name: "technical", base:5}
    ]
    pilotValueBase = 2;
    aceSkill = "";
    isAce = false;
    talents = [];
    injuryPips = 0;
    injuries: Injury[] = [];
    advancePips = 0;
    advances: Advance[] = [];

    constructor(rank: PilotRank, name: string){
        this.experienceLevel = rank;
        this.name = name;
    }

    getRank() {
        return PilotRank[this.experienceLevel]
    }

    getEndurance(){
        return this.enduranceBase + (this.isAce ? 1 : 0);
    }

    getSkill(skillName:string){

        let skillResult = this.skills.find(i => i.name == skillName.toLowerCase());

        if (skillResult != null){
            return skillResult.base - (skillName == this.aceSkill ? 1 : 0) - this.experienceLevel;
        }
        else{
            return -1;
        }
    }

    getPilotValue(){
        return 2 + this.experienceLevel + (this.isAce ? 1 : 0)
    }
}

export enum PilotRank {
    Rookie = 0,
    Trained = 1,
    Veteran = 2, 
    Legendary = 3
}

export class Quirk {
    name: string = "";
    description: string = "";
}

export class Injury {
    name: string = "";
    description: string = "";
}

export class Advance {
    name: string = "";
    description: string = "";
}