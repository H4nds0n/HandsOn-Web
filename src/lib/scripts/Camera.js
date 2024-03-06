import * as Quiz from "./Quiz.js";

import {answerCorrect, letterAnswer, letterQuestion, leveltwo, wordQuestion, wordAnswer, quizActive, showNotification, textareaValue} from "$lib/scripts/stores.js"

/**
 * object of letter, confidential rate and if hand is shown on the camera
 * @type {{handExists: boolean, letter: string, conf: number}}
 */
export let letter = {letter: "", conf: 0.0, handExists: false}
let oldLetter = ''

let videoStream;
let intervalID;

/**
 * Start the camera and the user can show ASL to the camera.
 * Camera sends the handsign to the Backend server to receive the
 * letter.
 * @returns {Promise<void>}
 */
export async function startCamera() {
    if (navigator.mediaDevices.getUserMedia) {
        let video = document.querySelector('#videoElement');
        let canvas = document.querySelector('#frame');
        videoStream = await navigator.mediaDevices.getUserMedia({video: true})
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

        let counter = 0              // size of the answer
        let isQuiz = false          // quiz-mode enabled
        let questionLetter = ""     // question (letter)
        let answerLetter = ""       // answer (letter)
        let correct = false         // true, if answer was correct
        let isLevelTwo = false      // true, if words are genraterated as questions
        let questionWord = ""       // question (word)
        let answerWord = ""         // answer (word)

        //subscribe to variables to listen for changes
        quizActive.subscribe((value) => isQuiz = value)
        console.log("quiz active", isQuiz);
        letterQuestion.subscribe((value) => questionLetter = value)
        letterAnswer.subscribe((value) => {
            answerLetter = value.split(" ")[1]?.toUpperCase()
            if(answerLetter == undefined) answerLetter = ""
        })
        answerCorrect.subscribe((value) => correct = value)
        leveltwo.subscribe((value) => isLevelTwo = value)
        wordQuestion.subscribe((value) => questionWord = value)
        wordAnswer.subscribe((value) => answerWord = value.replaceAll("\n", ""))


        // Capture images every few milliseconds
        intervalID = setInterval(async () => {
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

            // if the  answer was the same as the last, it is filtered
            if (letter.letter !== oldLetter && !isQuiz) {
                oldLetter = letter.letter

                textareaValue.update(currentValue => currentValue + letter.letter);
            }

            showNotification.set(!letter.handExists)
          
            if(isQuiz) {
                //console.log(letter.letter)

                if(letter.letter !== oldLetter) {
                    oldLetter = letter.letter

                    console.log("letter", letter.letter)
                    answerLetter = letter.letter.toUpperCase()
                    console.log("letter2", answerLetter)

                    //letterAnswer.set(letter.letter)
                }
                // question is a letter
                if(!isLevelTwo){
                    console.log("letter3", answerLetter)
                    textareaValue.set("Say: " + questionLetter + "\nYour Answer: " + answerLetter)
                     // remove any spaces before and after
                    if(questionLetter.trim() === answerLetter.trim()) {
                       alert("You got the correct Answer!")
                        answerCorrect.set(true)
                        Quiz.generateQuestion()
                    }
                }
                // question is a word
                else {
                    textareaValue.set("Say: " + questionWord + "\nYour Answer: " + answerWord + answerLetter)

                    // if the answered letter matches the current letter of the question and
                    // the length counter is raised
                    if(questionWord[counter] === answerLetter.trim()) {
                        wordAnswer.update(currentValue => currentValue + answerLetter)
                        counter++
                    }
                    // if condition is true, the answer matches the question and
                    // the "answer correct"-message is displayed
                    if(counter >= questionWord.length) {
                        textareaValue.set("Say: " + questionWord + "\nYour Answer: " + questionWord)
                        
                        answerCorrect.set(true)
                        counter = 0
                        wordAnswer.set("")
                        Quiz.generateQuestion()
                        alert("You got the correct Answer!")
                    }
                }
            }
            // You can now send 'imageData' to your server or perform any other actions
        }, captureInterval);

        /*
        if(quiz) response.then(data => {Quiz.checkAnswer(JSON.stringify(data)); console.log("Data= " + JSON.stringify(data))})
        */
         
    } else {
        console.log("getUserMedia not supported!");
    }
}

/**
 * Stop the camera and release the resources.
 */
export function stopCamera() {
    if (videoStream) {
        const tracks = videoStream.getTracks();
        tracks.forEach(track => track.stop());
        videoStream = null;

        console.log("stopped");
    }

    if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;

        console.log("stopped");
    }
}