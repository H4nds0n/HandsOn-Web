import {letterQuestion, textareaValue, answerCorrect, wordQuestion, wordAnswer} from "$lib/scripts/stores.js";

let alphabet = "ABC"
let words = ["CCC", "CAA"]
let randomLetterIndex = Math.floor(Math.random() * alphabet.length)
let randomWordIndex = Math.floor(Math.random() * words.length)
let questionL = alphabet[randomLetterIndex]
let questionW = alphabet[randomWordIndex]
let correct = false
answerCorrect.subscribe((value) => correct = value)

export function generateQuestion() {
    do {
        randomLetterIndex = Math.floor(Math.random() * alphabet.length)
    } while (alphabet[randomLetterIndex] == questionL)
    do {
        randomWordIndex = Math.floor(Math.random() * words.length)
    } while (words[randomWordIndex] == questionW)

    questionL = alphabet[randomLetterIndex]
    questionW = words[randomWordIndex]
    answerCorrect.set(false)
    letterQuestion.set(questionL)
    wordQuestion.set(questionW)
}


export function checkAnswer(answer) {
    if (questionL != "" && !correct) {
        let correct = answer == questionL
        let text = "";
        textareaValue.subscribe(value => {
            text = value;
        });

        let addition = "";

        if (correct) {
            addition = "Your answer was correct!";
            correct = true;
        } else {
            addition = "Try again"
        }

        text = "Say: " + questionL + "\n" + addition;
        textareaValue.set(text);
    }

}