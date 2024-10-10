<script lang="ts">
    export let totalPips: number;
    export let filledPips: number = 0;
    export let boxName: string;

    function isChecked(){

    }
</script>

<div class="grid grid-cols-3">
    <div><button class="btn btn-primary">-</button></div>
    <div>
        {#each {length: totalPips} as _, pip}
            <input type="checkbox" name="{boxName}" value={pip} checked={pip < filledPips} />
        {/each}
    </div>
    <div><button class="btn btn-primary">+</button></div>
</div>