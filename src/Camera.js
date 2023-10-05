const cam = () => {
    let video = document.querySelector('#videoElement');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then((stream) => {
                // @ts-ignore
                video.srcObject = stream;
            })
            .catch((error) => {
                console.log("Something went wrong!");
            })
    } else {
        console.log("getUserMedia not supported!");
    }
}