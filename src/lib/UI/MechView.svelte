<script lang="ts">
    import {FrameSize, Mech, PropulsionType} from '$lib/Data/Mech.svelte';
	import { WeaponProfile } from '$lib/Data/WepProfile';
	import Weapon from '$lib/UI/Weapon.svelte';
	import { onMount } from 'svelte';
	import BoxTracker from './Components/boxTracker.svelte';
    import { invoke } from '@tauri-apps/api/core';

    let { current_mech = $bindable() } = $props();
    
    let weaponProfiles: WeaponProfile[] = $state([]);
    let selected_weapon: WeaponProfile | undefined = $state();
  
    onMount(async () => {

    });
    invoke('load_wep_pro_data').then((data) => InitializeWepProfiles(data));

    function InitializeWepProfiles(profileData: any){
        let profileJSON = JSON.parse(profileData.toString());
        for (var profile of profileJSON){
          for (var sizeClass of ["Light", "Medium", "Heavy"]) {
            let wep = new WeaponProfile(
              profile.Name + " (" + sizeClass +")",
              sizeClass,
              profile.Damage[sizeClass],
              profile.EffectiveRange,
              profile.Weight[sizeClass],
              profile.Traits[sizeClass],
              profile.Materiel[sizeClass]
            );
            
            weaponProfiles.push(wep);
          };
        }
    }
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
    <div class="form-cell">{current_mech.speed}</div>
    <div class="form-cell">{current_mech.reactor}</div>
    <div class="form-cell">HPs</div>
    <div class="form-cell">{current_mech.weightTolerance}</div>
    <div class="form-cell-header">(1) Sensors</div>
    <div class="form-cell-header">(2) Hardpoint</div>
    <div class="form-cell-header">(3-5) Body</div>
    <div class="form-cell-header">(6) Propulsion</div>
    <div class="form-cell-header">Total Weight</div>
    <div class="form-cell"><BoxTracker boxName="SensorPips" totalPips={current_mech.sensorPips} bind:value={current_mech.hardPointPips["Sensors"]}></BoxTracker></div>
    <div class="form-cell">

        {#each Object.entries(current_mech.hardPointBasePips) as [hpName, hpValue]}
            <p>{hpName}</p>
            <BoxTracker boxName={hpName} totalPips={hpValue} bind:value={current_mech.hardPointPips[hpName]}></BoxTracker>
        {/each}
        

    </div>
    <div class="form-cell"><BoxTracker boxName="BodyPips" totalPips={current_mech.sensorPips} bind:value={current_mech.hardPointPips["Body"]}></BoxTracker></div>
    <div class="form-cell"><BoxTracker boxName="PropulsionPips" totalPips={current_mech.propPips} bind:value={current_mech.hardPointPips["Propulsion"]}></BoxTracker></div>
    <div class="form-cell"><p>{current_mech.weight}</p></div>

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
    <div class="form-cell">
        <select  bind:value={selected_weapon} name="weapons" id="weapons">
            {#each weaponProfiles as wep}
                <option value={wep} >{wep.name}</option>
            {/each}
        </select>
    </div>
</div>