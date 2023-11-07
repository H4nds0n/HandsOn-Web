<script>
  import "../app.postcss";
  import Nav from "$lib/component/Nav.svelte";
  import PopupASL from "$lib/component/PopupASL.svelte";
</script>

<style>
    .parent-container{
        height: 80vh;
        padding: 10px;
        display: flex;
        column-gap: 20px;
    }

</style>

<Nav/>

<PopupASL/>

<slot />