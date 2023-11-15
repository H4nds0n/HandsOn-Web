<script>
    import {onMount} from "svelte";
    import * as camera from "$lib/scripts/Camera.js"
    import {textareaValue} from "$lib/scripts/stores.js";

    let video;
    let canvas;
    let ctx;
    let letter = {letter: "", conf: 0.0}
    onMount(() => {
        // This code will run after the component is mounted and the DOM is ready
        //camera.startCamera();

        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(error => console.error('Error accessing webcam:', error));

        // Set up canvas
        ctx = canvas.getContext('2d');
        const captureInterval = 200; // milliseconds

        // Capture images every few milliseconds
        setInterval(async () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/jpeg');
            const data = {
                "img": imageData
            }
            letter = await fetch('http://localhost:5000/streaming', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(data => data.json());
            console.log(letter)

            // You can now send 'imageData' to your server or perform any other actions
        }, captureInterval);
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

    canvas
    {
        display: none;
    }
</style>


<div class="left-comp">
    <video autoplay="true" bind:this={video} class="rounded-lg">
        <track kind="captions">
    </video>
    <canvas bind:this={canvas}></canvas>
</div>