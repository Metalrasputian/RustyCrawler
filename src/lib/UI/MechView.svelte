<script lang="ts">
    import {FrameSize, Mech, PropulsionType} from '$lib/Data/Mech';
	import Weapon from '$lib/UI/Weapon.svelte';
	import BoxTracker from './Components/boxTracker.svelte';
    export let current_mech:Mech;
</script>

<div class="grid grid-cols-5">
    <div class="form-cell-header">Name:</div>
    <div class="form-cell col-span-2">{current_mech.name}</div>
    <div class="form-cell-header">Materiel Cost:</div>
    <div class="form-cell"></div>
    <div class="form-cell-header">Frame Size</div>
    <div class="form-cell-header">Speed</div>
    <div class="form-cell-header">Reactor</div>
    <div class="form-cell-header">Hardpoints</div>
    <div class="form-cell-header">Weight Tolerance</div>
    <div class="form-cell">{current_mech.propulsion}</div>
    <div class="form-cell">{current_mech.getSpeed()}</div>
    <div class="form-cell">{current_mech.getReactor()}</div>
    <div class="form-cell">HPs</div>
    <div class="form-cell">{current_mech.getWeightTolerance()}</div>
    <div class="form-cell-header">(1) Sensors</div>
    <div class="form-cell-header">(2) Hardpoint</div>
    <div class="form-cell-header">(3-5) Body</div>
    <div class="form-cell-header">(6) Propulsion</div>
    <div class="form-cell-header">Total Weight</div>
    <div class="form-cell"><BoxTracker boxName="SensorPips" totalPips={current_mech.getSensorPips()} bind:filledPips={current_mech.hardPointPips["Sensors"]}></BoxTracker></div>
    <div class="form-cell">

        {#each Object.entries(current_mech.hardPointBasePips) as [hpName, hpValue]}
            <p>{hpName}</p>
            <BoxTracker boxName={hpName} totalPips={hpValue} bind:filledPips={current_mech.hardPointPips[hpName]}></BoxTracker>
        {/each}
        

    </div>
    <div class="form-cell"><BoxTracker boxName="BodyPips" totalPips={current_mech.getSensorPips()} bind:filledPips={current_mech.hardPointPips["Body"]}></BoxTracker></div>
    <div class="form-cell"><BoxTracker boxName="PropulsionPips" totalPips={current_mech.getSensorPips()} bind:filledPips={current_mech.hardPointPips["Propulsion"]}></BoxTracker></div>
    <div class="form-cell"><p>{current_mech.getWeight()}</p></div>

    {#each Object.entries(current_mech.hardPointBasePips) as [hpName, hpValue]}
        <Weapon slotName={hpName + " Loadout"} weapon=0 />
    {/each}
    <div class="form-cell-header col-span-3">Technical Loadouts</div>
    <div class="form-cell-header">PropulsionType</div>
    <div class="form-cell-header">Encumberance</div>
    <div class="form-cell"></div>
    <div class="form-cell"></div>
    <div class="form-cell"></div>
    <div class="form-cell"></div>
    <div class="form-cell"></div>
    <div class="form-cell-header">Special Rules:</div>
    <div class="form-cell col-span-4">
        {#if current_mech.frameSize == FrameSize.Light }
            Light Frames receive +1 to Evade Test results and may Evade one additional time, even after a Pilot is fully Stressed.
        {:else if current_mech.frameSize == FrameSize.Heavy }
            Heavy Frames suffer -1 to Evade Test results.
        {:else}
            None.
        {/if}
    </div>
</div>