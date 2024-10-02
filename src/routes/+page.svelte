<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	  import MechList from '$lib/MechList.svelte';
    import PilotList from '$lib/PilotList.svelte';
    import { Pilot, PilotRank } from '$lib/Pilot';
    import {FrameSize, Mech} from '$lib/Mech';
    import Sortie from '$lib/Sortie.svelte';
	  import { arcologies } from '$lib/Arcology';
    let crawlerTab = 0;
    let current_arcology_index = 0;
    let pilots: Pilot[] = [new Pilot(PilotRank.Rookie, "Joe"), new Pilot(PilotRank.Veteran, "Bob")];
    let mechs : Mech[]= [new Mech("Bangers"), new Mech("Mash", FrameSize.Medium), new Mech("Beefsteak", FrameSize.Heavy)];
</script>
  
<div class="container mx-auto p-8 space-y-8">
  <h1 class="h1">Welcome to your crawler</h1>

  <div><p>Arcology: </p>
    <select class="select" bind:value={current_arcology_index}>
      {#each arcologies as arc, i}
        <option value={i}>{arc.name}</option>
      {/each}
    </select>
  </div>

  <TabGroup>
    <Tab bind:group={crawlerTab} name="MechBay" value=0>Mech Bay</Tab>
    <Tab bind:group={crawlerTab} name="Barracks" value=1>Barracks</Tab>
    <Tab bind:group={crawlerTab} name="LaunchBay" value=2>Launch Bay</Tab>
    
      
    <svelte:fragment slot="panel">
      {#if crawlerTab == 0}
        <MechList bind:mechs={mechs}/>
      {:else if crawlerTab == 1}
        <PilotList bind:pilots={pilots} current_arcology={arcologies[current_arcology_index]}/>
      {:else }
        <Sortie />
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>