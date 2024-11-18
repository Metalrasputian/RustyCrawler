<script lang="ts">
    let {totalPips, value = $bindable(), boxName} = $props();

    function addPip(){
        if (value < totalPips){            
            value = value + 1;
        }
    }

    function subPip(){
        if (value > 0){            
            value = value - 1;
        }
    }
</script>

<div class="">
    <button class="btn btn-sm variant-filled-surface "  onclick={subPip}>-</button>
    <span>
        {#each {length: totalPips} as _, pip}
            <input type="checkbox" name="{boxName}" value={pip} checked={pip < value} />
        {/each}
    </span>
    <button class="btn btn-sm variant-filled-primary" onclick={addPip}>+</button>
</div>