import { PilotRank } from "$lib/Data/Pilot.svelte";

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