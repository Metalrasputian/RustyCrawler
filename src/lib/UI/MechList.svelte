<script lang="ts">
    //import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    import MechView from '$lib/UI/MechView.svelte';
    //import {Mech} from '$lib/Data/Mech.svelte.ts';
	//import type { WeaponProfile } from '$lib/Data/WepProfile';

    let currentMechIndex: number = $state(0);
    let { mechs = $bindable() } = $props();

    let mechlist = $state(mechs);

    $effect(() => {
        mechlist = mechs
    });

</script>
<div>{currentMechIndex}</div>
<div class="card grid grid-cols-[auto_1fr] gap-4">
    <div>
        <AppRail>
            {#each mechlist as mech, i}
            <AppRailTile bind:group={currentMechIndex} name={mech.name} value={i} title={mech.name}>
                <svelte:fragment slot="lead">Icon goes here</svelte:fragment>
                <span>{mech.name}</span>
            </AppRailTile>
            {/each}
            
        </AppRail>
    </div>
    
    <div class="container">
        <MechView bind:current_mech={mechlist[currentMechIndex]} />
    </div>
</div>