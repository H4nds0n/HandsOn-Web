let mediaRecorder;
let recordedChunks = [];

export async function startCamera() {
    let video = document.querySelector('#videoElement');

    if (navigator.mediaDevices.getUserMedia) {
        await navigator.mediaDevices.getUserMedia({video: true})
            .then((stream) => {
                // @ts-ignore
                video.srcObject = stream;

                mediaRecorder = new MediaRecorder(stream);

                //mediaRecorder.ondataavailable = handleDataAvailable;
                mediaRecorder.ondataavailable = (event) => {
                    sendDataToBackend(event.data);
                };

                mediaRecorder.start(2000);
            })
            .catch((error) => {
                console.log("Something went wrong!", error);
            });
    } else {
        console.log("getUserMedia not supported!");
    }
}

function handleDataAvailable(event) {
    if (event.data.size > 0) {
        recordedChunks.push(event.data);
        sendDataToBackend(event.data);
    }
}

export async function sendDataToBackend(data) {
    const formData = new FormData();
    formData.append("video", data);

    console.log('Data: ' + formData);


    try {
        const response = await fetch("http://localhost:5000/streaming", {
            method: "POST",
            body: formData,
        });
        console.log("Response from backend:", response);
    } catch (error) {
        console.error("Error sending data to backend:", error);
    }
}