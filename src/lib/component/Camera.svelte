<script>
    import {onMount} from "svelte";
    import * as camera from "../../Camera.js"
    onMount(() => {
        // This code will run after the component is mounted and the DOM is ready
        camera.cam()
    })
</script>

<style>
    .left-comp {
        flex-direction: column;
        width: 150vw;
    }

    video {
        width: 100%;
    }

    #videoElement {
        transform: scaleX(-1);
    }
</style>


<div class="left-comp">
    <video autoplay="true" id="videoElement" class="rounded-lg">
        <track kind="captions">
    </video>
</div>