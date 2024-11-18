import { FrameSize } from "./Mech.svelte";

export class WeaponProfile {
    name: string;
    wepClass?: FrameSize;
    damage: Number;
    effectiveRange: Number[];
    weight: Number;
    traits: any[];
    materielCost: Number;

    constructor (name: string, wepClass: string, damage:Number, effectiveRange:Number[], weight: Number, traits: any[], materielCost: Number){
        this.name = name;
        switch (wepClass){
            case "Light": { this.wepClass = FrameSize.Light; break; }
            case "Medium": { this.wepClass = FrameSize.Medium; break; }
            case "Heavy": { this.wepClass = FrameSize.Heavy; break; }
        }
        this.damage = damage;
        this.effectiveRange = effectiveRange;
        this.weight = weight;
        this.traits = traits;
        this.materielCost = materielCost
    }
}
