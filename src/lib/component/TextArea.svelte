<script>
    import {Button, Textarea} from 'flowbite-svelte';
</script>

<style>
    .button-container {
        display: flex;
        justify-content: space-between; /* Space buttons evenly */
        width: 100%;
    }

    .container {
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: flex-end; /* Align items (textarea and buttons) to the right */
        gap: 10px; /* Space between items */
    }

    .left-button,
    .right-button {
        flex: 1; /* Distribute available space evenly between buttons */
    }

    #textID {
    }
</style>

<div class="container">
    <Textarea id="textID" placeholder="Translated Message. . ."/>
    <div class="button-container">
        <Button class="left-button">Reverse</Button>
        <Button class="right-button">Clear</Button>
    </div>
</div>
