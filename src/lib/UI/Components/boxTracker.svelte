<script lang="ts">
    export let totalPips: number;
    export let filledPips: number = 0;
    export let boxName: string;

    function addPip(){
        if (filledPips < totalPips){            
            filledPips += 1;
        }
    }

    function subPip(){
        if (filledPips > 0){            
            filledPips -= 1;
        }
    }
</script>

<div class="grid grid-cols-3">
    <div><button class="btn btn-primary" on:click={subPip}>-</button></div>
    <div>
        {#each {length: totalPips} as _, pip}
            <input type="checkbox" bind:group={filledPips} name="{boxName}" value={pip} checked={pip < filledPips} />
        {/each}
    </div>
    <div><button class="btn btn-primary" on:click={addPip}>+</button></div>
</div>