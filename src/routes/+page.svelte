<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	  import MechList from '$lib/UI/MechList.svelte';
    import PilotList from '$lib/UI/PilotList.svelte';
    import { Pilot, PilotRank } from '$lib/Data/Pilot.svelte';
    import {FrameSize, Mech} from '$lib/Data/Mech.svelte';
    import {WeaponProfile} from '$lib/Data/WepProfile';
    import Sortie from '$lib/UI/Sortie.svelte';
	  import { Arcology } from '$lib/Data/Arcology';
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { invoke } from '@tauri-apps/api/core';
    import Weapon from '$lib/UI/Weapon.svelte';

    let crawlerTab: Number = $state(0);
    let current_arcology_index = $state(0);
    let pilots: Pilot[] = $state([new Pilot(PilotRank.Rookie, "Joe"), new Pilot(PilotRank.Veteran, "Bob")]);
    let mechs : Mech[] = $state([new Mech("Bangers"), new Mech("Mash", FrameSize.Medium), new Mech("Beefsteak", FrameSize.Heavy)]);
    
    let arcologies: Arcology[] = $state([]);

    invoke('load_archologies').then((data) => InitializeArcologies(data));

    function InitializeArcologies(arcologyData: any){
      let arcologyParse = JSON.parse(arcologyData.toString());

      for (var arcData of arcologyParse) {

        let initPilots = [];

        console.log(arcData.initialPilots);

        for (var initPilot of arcData.initialPilots) {
          let pilotRank;

          switch (initPilot) {
            case "Veteran": {
              pilotRank = PilotRank.Veteran;
            }

            case "Trained": {
              pilotRank = PilotRank.Trained;
            }

             default: {
              pilotRank = PilotRank.Rookie;
            }
          }

          initPilots.push(
            {"rank": pilotRank, "min": initPilot.min, "max": initPilot.max});
        }

        let arc = new Arcology(
            arcData.name,
            arcData.quirkTitle,
            arcData.quirkDescription,
            initPilots,
            arcData.framePreference,
            arcData.propulsionTypes
          );

        arcologies.push(arc);
      }
    }
</script>
  
<div class="container mx-auto p-8 space-y-8">
  <h1 class="h1">Welcome to your crawler</h1>
  <LightSwitch />

  <div><p>Arcology: </p>
    <select class="select" bind:value={current_arcology_index}>
      {#each arcologies as arc, i}
        <option value={i}>{arc.name}</option>
      {/each}
    </select>
  </div>

  <TabGroup>
    <Tab bind:group={crawlerTab} name="MechBay" value={0}>Mech Bay</Tab>
    <Tab bind:group={crawlerTab} name="Barracks" value={1}>Barracks</Tab>
    <Tab bind:group={crawlerTab} name="LaunchBay" value={2}>Launch Bay</Tab>
    
      
    <svelte:fragment slot="panel">
      {#if crawlerTab === 0}
        <MechList bind:mechs={mechs} />
      {:else if crawlerTab === 1}
        <PilotList bind:pilots={pilots} current_arcology={arcologies[current_arcology_index]}/>
      {:else }
        <Sortie />
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>