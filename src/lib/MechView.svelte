<script lang="ts">
    import {Mech} from '$lib/Mech';
    export let current_mech:Mech;
</script>

<div class="container">
    <p>Name: {current_mech.name}</p>
    <p>Value: {current_mech.value}</p>
</div>