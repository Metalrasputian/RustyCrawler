<script lang="ts">
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    import MechView from '$lib/UI/MechView.svelte';
    import {Mech} from '$lib/Data/Mech';

    let currentMechIndex = 0;
    export let mechs: Mech[];
</script>

<div class="card grid grid-cols-[auto_1fr] gap-4">
    <div>
        <AppRail>
            {#each mechs as mech, i}
            <AppRailTile bind:group={currentMechIndex} name={mech.name} value={i} title={mech.name}>
                <svelte:fragment slot="lead">Icon goes here</svelte:fragment>
                <span>{mech.name}</span>
            </AppRailTile>
            {/each}
            
        </AppRail>
    </div>
    <div class="container">
        <MechView bind:current_mech={mechs[currentMechIndex]}/>
    </div>
</div>