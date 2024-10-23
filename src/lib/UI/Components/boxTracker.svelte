<script lang="ts">
    export let totalPips: number;
    export let filledPips: number;
    export let boxName: string;

    function addPip(){
        if (filledPips < totalPips){            
            filledPips = filledPips + 1;
        }
    }

    function subPip(){
        if (filledPips > 0){            
            filledPips = filledPips - 1;
        }
    }
</script>

<div class="">
    <button class="btn btn-sm variant-filled-surface "  on:click={subPip}>-</button>
    <span>
        {#each {length: totalPips} as _, pip}
            <input type="checkbox" name="{boxName}" value={pip} checked={pip < filledPips} />
        {/each}
    </span>
    <button class="btn btn-sm variant-filled-primary" on:click={addPip}>+</button>
</div>