<script lang="ts">
    import {Pilot} from "$lib/Data/Pilot";
	import type { Arcology } from "$lib/Data/Arcology";
	import BoxTracker from "./Components/boxTracker.svelte";
    export let pilot:Pilot;
    export let current_arcology:Arcology;

    let pipCount = 2;
</script>

<div class="grid grid-cols-6">
    <div class="form-cell-header"><p>Pilot Name:</p></div>
    <div class="form-cell col-span-5"><p>{pilot.name}</p></div>
    <div class="form-cell-header"><p>Arcology: </p></div>
    <div class="form-cell col-span-2">{current_arcology.name}</div>
    <div class="form-cell-header"><p>Experience: </p></div>
    <div class="form-cell col-span-2"><p>{pilot.experience}</p></div>
    <div class="form-cell-header"><p>Experience: </p></div>
    <div class="form-cell-header"><p>Endurance</p></div>    
    <div class="form-cell-header"><p>Manouvre Skill: </p></div>
    <div class="form-cell-header"><p>Gunnery Skill: </p></div>
    <div class="form-cell-header"><p>Technical Skill: </p></div>
    <div class="form-cell-header"><p>Pilot Value: </p></div>    
    <div class="form-cell"><p>{pilot.getRank()}{pilot.isAce ? " (Ace)" : ''}</p></div>
    <div class="form-cell"><p>{pilot.getEndurance()}</p></div>
    <div class="form-cell"><p>{pilot.getSkill("manouvre")}+</p></div>
    <div class="form-cell"><p>{pilot.getSkill("gunnery")}+</p></div>
    <div class="form-cell"><p>{pilot.getSkill("technical")}+</p></div>
    <div class="form-cell"><p>{pilot.getPilotValue()}</p></div>
    <div class="form-cell col-span-6 ">
        <p>Quirks:</p>
        <div>{current_arcology.quirkTitle}</div>
        <div>{current_arcology.quirkDescription}</div>
    </div>
    <div class="form-cell col-span-6">
        <div>Injuries: 
            <BoxTracker totalPips={3} bind:filledPips={pilot.injuryPips} boxName="injuryPips" />
        </div>
        {#each pilot.injuries as injury}
            <div><p>{injury.name}</p><p>{injury.description}</p></div>
        {/each}
    </div>
    <div class="form-cell col-span-6">
        <div>Advances: 
            
            <BoxTracker totalPips={3} bind:filledPips={pilot.advancePips} boxName="advancePips" />
        </div>
        {#each pilot.advances as advance}
            <div><p>{advance.name}</p><p>{advance.description}</p></div>
        {/each}
    </div>
</div>