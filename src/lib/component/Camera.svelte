<script>
    import {onMount} from "svelte";

    onMount(() => {
        // This code will run after the component is mounted and the DOM is ready
        let video = document.querySelector('#videoElement');

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({video: true})
                .then((stream) => {
                    video.srcObject = stream;
                })
                .catch((error) => {
                    console.log("Something went wrong!", error);
                });
        } else {
            console.log("getUserMedia not supported!");
        }
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
    <video autoplay="true" id="videoElement">
        <track kind="captions">
    </video>
</div>