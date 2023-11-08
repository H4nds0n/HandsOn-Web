import * as Quiz from "./Quiz.js";
import {quizActive} from "$lib/scripts/stores.js"
let mediaRecorder;

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
                    let response = sendDataToBackend(event.data);
                    let quiz = false;
                    quizActive.subscribe(value => {
                        quiz = value;
                    });

                    if(quiz) response.then(data => {Quiz.checkAnswer(JSON.stringify(data)); console.log("Data= " + JSON.stringify(data))})                  
                };

                mediaRecorder.start(500);

                let quiz = false;
                    quizActive.subscribe(value => {
                        quiz = value;
                    });

                    if(quiz) Quiz.generateQuestion()
            })
            .catch((error) => {
                console.log("Something went wrong!", error);
            });
    } else {
        console.log("getUserMedia not supported!");
    }
}

export async function sendDataToBackend(data) {
    const formData = new FormData();
    formData.append("video", data);

        try {
        const response = await fetch("http://localhost:5000/streaming", {
            method: "POST",
            body: formData,
        }).then(res => res.json());
        console.log("Response from backend:", response);
        return response;
    } catch (error) {
        console.error("Error sending data to backend:", error);
    }
}