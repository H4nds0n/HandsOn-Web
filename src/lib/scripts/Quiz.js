import {textareaValue} from "$lib/scripts/stores.js";

let question = "";
let answerCorrect = false;

export function generateQuestion() {
    let alphabet = "ABC"
    let randomIndex = Math.floor(Math.random() * alphabet.length)
    question = alphabet[randomIndex]
    textareaValue.set("Say: " + question)
    answerCorrect = false
    return question
}


export function checkAnswer(answer) {
    if (question != "" && !answerCorrect) {
        let correct = answer == question
        let text = "";
        textareaValue.subscribe(value => {
            text = value;
        });

        let addition = "";

        if (correct) {
            addition = "Your answer was correct!";
            answerCorrect = true;
        } else {
            addition = "Try again"
        }

        text = "Say: " + question + "\n" + addition;
        textareaValue.set(text);
    }

}