<script lang="ts">
    import {Mech} from '$lib/Mech';
    export let current_mech:Mech;
</script>

<div class="grid grid-col-5">
    <div class="form-cell-header">Name:</div>
    <div class="form-cell col-span-2">{current_mech.name}</div>
    <div class="form-cell-header">Materiel Cost:</div>
    <div></div>
    
</div>