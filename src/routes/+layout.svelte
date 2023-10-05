<script>
  import "../app.postcss";
  import Nav from "$lib/component/Nav.svelte";
  import Camera from "$lib/component/Camera.svelte";
  import TextArea from "$lib/component/TextArea.svelte";
</script>

<style>
    .parent-container{
        height: 80vh;
        display: flex;
        column-gap: 20px;
    }
</style>

<Nav/>

<div class="parent-container">
    <Camera/>
    <TextArea/>
</div>

<slot />