export class Mech {
    name: string;
    frameSize: FrameSize;
    hardPoints: HardPoint[];
    propulsion: PropulsionType;
    technicalLoadouts: TechnicalLoadout[];

    static propulsionDescriptions: Map<PropulsionType, string> = new Map<PropulsionType, string>();

    static populatePropDesc() {
        Mech.propulsionDescriptions.set(PropulsionType.Bipedal, "None");
        Mech.propulsionDescriptions.set(PropulsionType.Jet, "This Frame does not halve the distance travelled when Manoeuvring or Evading in its Side or Rear Arcs. It also ignores Movement reductions for Broken Terrain, unless its Propulsion is Critically Damaged. During a Manoeuvre, the Pilot of a Frame with Jet Propulsion may burn additional reserves to move Vertically or Horizontally. Stress their Reactor an additional time for this Manoeuvre immediately and reduce the War-Clock by one. When moving, this Frame may move up to its Speed both Horizontally and Vertically, and may end its Manoeuvre on top of otherwise Impassable Terrain, provided its base fits in that new position. A Frame with operational Jet Propulsion takes no Damage from Drops.");
        Mech.propulsionDescriptions.set(PropulsionType.Multilimbed, "A Frame with Multi-Limbed Propulsion provides an extremely stable firing platform and is excellent at remaining upright in Difficult Terrain. This Frame always counts as having remained stationary for the purposes of the Gunnery Phase and does not reduce its movement for Manoeuvring through Broken Terrain. Increase the total number of Damage Boxes on this Frame’s Propulsion by 1.");
        Mech.propulsionDescriptions.set(PropulsionType.Tracked, "A Frame with Tracked Propulsion is exceptionally good at moving forward or in reverse through Difficult Terrain, though it is more limited when Evading to the Sides. A Tracked Frame gains +2” of movement in the Manoeuvre Phase when it Manoeuvres only in its Front or Rear 90-degree Arc in a single, straight line. However, it may only Manoeuvre or Evade at a quarter Speed in its Side Arcs (so 1” of movement spent = 0.25” of movement). Tracked Frames ignore the movement reduction for Broken Ground. Add +5 to the Weight Tolerance of any Tracked Frame.");
    }

    constructor(name: string = "", frameSize: FrameSize = FrameSize.Light, propulsion:PropulsionType = PropulsionType.Bipedal, technicalLoadouts: TechnicalLoadout[] = []) {
        this.name = name;
        this.frameSize = frameSize;
        this.hardPoints = this.getHardpoints();
        this.propulsion = propulsion;
        this.technicalLoadouts = technicalLoadouts;
    }

    getSpeed() {
        return 8 - (this.frameSize * 2);
    }

    getReactor() {
        return 2 + (this.frameSize * 2);
    }

    getHardpoints():HardPoint[]{
        let hps:HardPoint[] = [];
        hps = [...hps, new HardPoint("Primary Left", undefined)]
        hps = [...hps, new HardPoint("Secondary Left", undefined)]

        if (this.frameSize == FrameSize.Medium) {
            hps = [...hps, new HardPoint("Primary Right", undefined)]
        }

        if (this.frameSize == FrameSize.Heavy) {
            hps = [...hps, new HardPoint("Secondary Right", undefined)]
        }

        return hps;
    }

    updateHarpoints(){
        this.hardPoints = this.getHardpoints();
    }

    getWeightTolerance(){
        let base = 0;

         switch (this.frameSize) {
            case FrameSize.Light: {
                base = 15;
                break;
            }
            case FrameSize.Medium: {
                base = 25;
                break;
            }
            case FrameSize.Heavy: {
                base = 30;
                break;
            }
        }

        if (this.propulsion = PropulsionType.Tracked) {
            base += 5;
        }

        return base;
    }

    getPropDesc():any {
        return Mech.propulsionDescriptions.get(this.propulsion);
    }
}

Mech.populatePropDesc();

export enum FrameSize {
    Light = 0,
    Medium = 1,
    Heavy = 2
}

export class HardPoint {
    name: string;
    weapon?: Weapon;

    constructor (name:string = "", weapon?: Weapon){
        this.name = name;
        this.weapon = weapon;
    }
}

export enum PropulsionType {
    Bipedal = 0,
    Jet = 1,
    Multilimbed = 2,
    Tracked = 3
}

export class TechnicalLoadout {

}

export class Weapon {

}