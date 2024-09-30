<script>
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    import MechView from '$lib/MechView.svelte';
    import {Mech} from '$lib/Mech';

    let currentMechIndex = 0;
    let mechs = [{name: "Mech 1", value:"I'm the first mech."}, {name: "Mech 2", value: "I'm a second mech!"}];
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
    <MechView current_mech={mechs[currentMechIndex]}/>    
</div>