import * as Quiz from "./Quiz.js";
import {quizActive, showNotification, textareaValue} from "$lib/scripts/stores.js"


export let letter = {letter: "", conf: 0.0, handExists: false}
let oldLetter = ''

export async function startCamera() {
    if (navigator.mediaDevices.getUserMedia) {
        let video = document.querySelector('#videoElement');
        let canvas = document.querySelector('#frame');
        await navigator.mediaDevices.getUserMedia({video: true})
            .then((stream) => {
                // @ts-ignore
                video.srcObject = stream;
            })
            .catch((error) => {
                console.log("Something went wrong!", error);
            });

        // Set up canvas
        // @ts-ignore
        let ctx = canvas.getContext('2d');
        ctx.canvas.hidden = true;
        const captureInterval = 200; // milliseconds

        // Capture images every few milliseconds
        setInterval(async () => {
            // @ts-ignore
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            // @ts-ignore
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
            console.log(letter);

            if (letter.letter !== oldLetter) {
                oldLetter = letter.letter
                textareaValue.update(currentValue => currentValue + letter.letter);
            }

            showNotification.set(letter.handExists)

            // You can now send 'imageData' to your server or perform any other actions
        }, captureInterval);


        let quiz = false;
        quizActive.subscribe(value => {
            quiz = value;
        });

        if (quiz) Quiz.generateQuestion()

        /*
        let quiz = false;
        quizActive.subscribe(value => {
            quiz = value;
        });

        if(quiz) response.then(data => {Quiz.checkAnswer(JSON.stringify(data)); console.log("Data= " + JSON.stringify(data))})

         */
    } else {
        console.log("getUserMedia not supported!");
    }
}