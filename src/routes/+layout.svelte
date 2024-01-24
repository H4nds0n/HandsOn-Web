<!--
Layout.svelte is used for all svelte files in "routes" folder
 -->
<script>
    import "../app.postcss";
    import Nav from "$lib/component/Nav.svelte";
    import PopupASL from "$lib/component/PopupASL.svelte";
    import TextHistory from "$lib/component/TextHistory.svelte";
    import Notification from "$lib/component/Notification.svelte";
</script>

<style>

</style>

<Nav/>
<Notification/>
<TextHistory/>
<PopupASL/>

<slot/>