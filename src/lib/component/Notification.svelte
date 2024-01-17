<script>
    import {Toast} from "flowbite-svelte";
    import {showNotification} from "$lib/scripts/stores.js";

    let open = false;

    showNotification.subscribe((value) => {
        open = value
    })
</script>

<Toast bind:open>
    There are no hands detected.
</Toast>