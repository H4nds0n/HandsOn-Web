<script>
    import {Toast} from "flowbite-svelte";
    import {showNotification} from "$lib/scripts/stores.js";
    import {InfoCircleSolid} from "flowbite-svelte-icons";
</script>

<Toast color="blue" dismissable={false} class="border-solid border-2 border-cyan-900 z-50 left-[42%]"
       position="top-left" bind:open={$showNotification}>
    <svelte:fragment slot="icon">
        <InfoCircleSolid class="w-5 h-5"/>
    </svelte:fragment>
    There are no hands being detected.
</Toast>