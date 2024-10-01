<script lang="ts">
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    import MechView from '$lib/MechView.svelte';
    import {Mech} from '$lib/Mech';

    let currentMechIndex = 0;
    export let mechs: Mech[];
</script>

<div class="card grid grid-cols-[auto_1fr] gap-4">
    <AppRail>
        {#each mechs as mech, i}
        <AppRailTile bind:group={currentMechIndex} name={mech.name} value={i} title={mech.name}>
            <svelte:fragment slot="lead">Icon goes here</svelte:fragment>
            <span>{mech.name}</span>
        </AppRailTile>
        {/each}
        
    </AppRail>
    <MechView bind:current_mech={mechs[currentMechIndex]}/>    
</div>