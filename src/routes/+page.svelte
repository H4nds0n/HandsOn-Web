<!--
<h1 class="dark:text-gray-400">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
-->

<script>
    import "../app.postcss";
    import Camera from "$lib/component/Camera.svelte";
    import TextArea from "$lib/component/TextArea.svelte";
    import TextHistory from "$lib/component/TextHistory.svelte";
    import {textareaValue} from "$lib/scripts/stores.js";

    textareaValue.set('');
</script>

<style>
    .parent-container {
        height: 80vh;
        padding: 10px;
        display: flex;
        column-gap: 20px;
    }
</style>

<div class="parent-container">
    <Camera/>
    <TextArea/>
</div>

<slot/>