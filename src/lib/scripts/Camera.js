import * as Quiz from "./Quiz.js";

import {answerCorrect, quizActive, letterAnswer, letterQuestion, textareaValue, leveltwo, wordQuestion, wordAnswer, quizActive, showNotification, textareaValue} from "$lib/scripts/stores.js"


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

        let counter = 0

        let isQuiz = false
        let questionLetter = ""
        let answerLetter = ""
        let correct = false
        let isLevelTwo = false
        let questionWord = ""
        let answerWord = ""

        quizActive.subscribe((value) => isQuiz = value)
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

            if (letter.letter !== oldLetter && !isQuiz) {
                oldLetter = letter.letter

                textareaValue.update(currentValue => currentValue + letter.letter);
            }

            showNotification.set(letter.handExists)
          
            if(isQuiz) {
                if(letter.letter !== oldLetter) {
                    oldLetter = letter.letter
                    
                    letterAnswer.set(letter.letter)
                    
                }
                if(!isLevelTwo){
                    textareaValue.set("Say: " + questionLetter + "\nYour Answer: " + answerLetter)
                    if(questionLetter.trim() === answerLetter.trim()) {
                       alert("You got the correct Answer!")
                        answerCorrect.set(true)
                        Quiz.generateQuestion()
                    }
                }
                else {
                    textareaValue.set("Say: " + questionWord + "\nYour Answer: " + answerWord + answerLetter)
                    if(questionWord[counter] === answerLetter.trim()) {
                        wordAnswer.update(currentValue => currentValue + answerLetter)
                        counter++
                    }
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