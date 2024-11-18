export class Mech {
    name: string = $state("");
    frameSize: FrameSize = $state(FrameSize.Light);
    hardPoints: HardPoint[] = $state([]);
    propulsion: PropulsionType = $state(PropulsionType.Bipedal);
    technicalLoadouts: TechnicalLoadout[];
    sensorBasePips: number = $state(0);
    bodyBasePips: number = $state(0);
    propulsionBasePips: number = $state(0);

    hardPointPips: {[Name:string]: number} = $state({});
    hardPointBasePips: {[Name:string]: number} = $state({});

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
        //this.hardPoints = this.getHardpoints();
        this.propulsion = propulsion;
        this.technicalLoadouts = technicalLoadouts;
        this.hardPointBasePips = {};
        
        switch(frameSize){
            case FrameSize.Light: {
                this.bodyBasePips = 10;
                this.sensorBasePips = 6;
                this.propulsionBasePips = 8;
                this.hardPointBasePips= {
                    "Primary": 6,
                    "Secondary": 6
                }
                break;
            }
            case FrameSize.Medium: {
                this.bodyBasePips = 18;
                this.sensorBasePips = 8;
                this.propulsionBasePips = 12;
                this.hardPointBasePips= {
                    "Left": 6,
                    "Right": 6,
                    "Secondary": 5
                }
                break;
            }
            case FrameSize.Heavy: {
                this.bodyBasePips = 28;
                this.sensorBasePips = 12;
                this.propulsionBasePips = 18;
                this.hardPointBasePips= {
                    "Left": 8,
                    "Right": 8,
                    "Sec. Left": 6,
                    "Sec. Right": 6
                }
                break;
            }
        };

        this.hardPointPips =
        {
            "Sensors": 0,
            "Body": 0,
            "Propulsion": 0
        };

        for (var hpName in this.hardPointBasePips) {
            this.hardPointPips[hpName] = 0;
        };
    }

    get speed() {
        return 8 - (this.frameSize * 2);
    }

    get reactor() {
        return 2 + (this.frameSize * 2);
    }

    get hardpoints():HardPoint[]{
        let hps:HardPoint[] = [];

        for (var hp in this.hardPointBasePips) {
            hps = [...hps, new HardPoint(hp, undefined)]
        }

        return hps;
    }

    //updateHardpoints(){
    //    this.hardPoints = this.getHardpoints();
    //}

    get bodyPips():number{
        return this.bodyBasePips
    }

    get sensorPips():number{
        return this.sensorBasePips
    }

    get propPips():number {
        return this.propulsionBasePips
    }

    get weightTolerance(){
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

        if (this.propulsion == PropulsionType.Tracked) {
            base += 5;
        }

        return base;
    }

    get propDesc():any {
        return Mech.propulsionDescriptions.get(this.propulsion);
    }

    get weight():number {
        return 0
    }

    get matCost(){
        return 0
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