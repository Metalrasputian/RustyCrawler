<script>
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	  import MechList from '$lib/MechList.svelte';
    import PilotList from '$lib/PilotList.svelte';
    import Sortie from '$lib/Sortie.svelte';
	  import { arcologies } from '$lib/Arcology';
    let crawlerTab = 0;
    let current_arcology_index = 0;
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
        <MechList />
      {:else if crawlerTab == 1}
        <PilotList current_arcology={arcologies[current_arcology_index]}/>
      {:else }
        <Sortie />
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>