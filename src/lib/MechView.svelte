<script>
    import {Mech} from '$lib/Mech';
    export let current_mech = new Mech("Mech 1", "I'm the first mech");
</script>

<div class="container">
    <p>Name: {current_mech.name}</p>
    <p>Value: {current_mech.value}</p>
</div>