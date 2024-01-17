<script>
    import {Button, Textarea} from 'flowbite-svelte';
    import {scrollableModal, textareaValue, quizActive, textHistory} from "$lib/scripts/stores.js";
    import {text_to_images} from '../scripts/TextToASL.js'

    const clearOnAction = () => {
        $textHistory.push($textareaValue);
        textareaValue.set('');
    };

    function updateASL() {
        scrollableModal.update(() => true)
    }

    quizActive.set(false)
    textareaValue.set("")
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
</style>

<div class="container">
    <Textarea id="textID" rows="50" placeholder="Translated Message. . ." bind:value={$textareaValue}/>
    <div class="button-container">
        <Button class="left-button" on:click={()=>{
            text_to_images();
            updateASL();
        }}>Reverse</Button>
        <Button class="right-button" on:click={clearOnAction}>Save & Clear</Button>
    </div>
</div>
