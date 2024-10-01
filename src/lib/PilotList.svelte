<script lang="ts">
	import { AppRail, AppRailTile } from "@skeletonlabs/skeleton";
	import PilotView from "./PilotView.svelte";
	import {Pilot, PilotRank} from "$lib/Pilot";

    let pilots: Pilot[] = [new Pilot(PilotRank.Rookie, "Joe"), new Pilot(PilotRank.Veteran, "Bob")];
    let currentPilotIndex = 0;
    export let current_arcology;
</script>
<div>
    <button class="btn btn-primary" on:click={() => {pilots = [...pilots, new Pilot()]}}>Add Pilot</button>
    <button class="btn btn-primary" on:click={()=>{}}>Remove Pilot</button></div>
<div class="card grid grid-cols-[auto_1fr] gap-4">    
    <div>
        <AppRail>
            {#each pilots as pilot, i}
            <AppRailTile bind:group={currentPilotIndex} name={pilot.name} value={i} title={pilot.name}>
                <svelte:fragment slot="lead">Icon goes here</svelte:fragment>
                <span>{pilot.name}</span>
            </AppRailTile>
            {/each}
        </AppRail>
    </div>
    <div class="container">
        <PilotView pilot={pilots[currentPilotIndex]} current_arcology={current_arcology}/>
    </div>
    
</div>