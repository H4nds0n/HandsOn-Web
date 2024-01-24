<!--
"Main Page" like index.html
Navbar, Camera, TextArea is being shown
-->
<script>
    import "../app.postcss";
    import Camera from "$lib/component/Camera.svelte";
    import TextArea from "$lib/component/TextArea.svelte";
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