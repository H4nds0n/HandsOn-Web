<script>
    import {Button, Textarea} from 'flowbite-svelte';
    import {scrollableModal, textareaValue, quizActive} from "$lib/scripts/stores.js";
    import * as Quiz from "../scripts/Quiz.js";

    const skip = () => {
            Quiz.generateQuestion();
    }

    const nextQuestion = () => {
        Quiz.generateQuestion();
    }

    quizActive.set(true);
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

    .left-button {
        flex: 1; /* Distribute available space evenly between buttons */
    }
</style>

<div class="container">
    <Textarea id="textID" rows="50" placeholder="Translated Message. . ." bind:value={$textareaValue} readonly/>
    <div class="button-container">
        <Button class="left-button" on:click={skip}>Skip</Button>
        <Button class="right-button" on:click={nextQuestion}>New Question</Button>
    </div>
</div>
