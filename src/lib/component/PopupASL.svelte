<script>
    import {Button, Modal, Gallery} from 'flowbite-svelte';
    import {scrollableModal} from "$lib/scripts/stores.js";
    import {images} from "../scripts/TextToASL.js";
</script>

<style>
    .gallery {
        display: flex;
        flex-direction: column;
    }
</style>

<Modal title="Text to ASL" bind:open={$scrollableModal} autoclose>

    {#if images.length > 0}
        <div class="gallery">
            <Gallery items={images} class="gap-4 grid-cols-1 md:grid-cols-1" let:item>
                <img src={item.src} alt={item.alt} width="200" height="200" class="rounded-lg"/>
            </Gallery>
        </div>
    {:else}
        <p>Textarea is empty.</p>
    {/if}
    <svelte:fragment slot="footer">
        <Button>Close</Button>
    </svelte:fragment>
</Modal>