import {textareaValue, answerCorrect, leveltwo, letterAnswer, letterQuestion, wordAnswer, wordQuestion, counter} from "$lib/scripts/stores.js";

let alphabet = "ABC"
let words = ["CCC", "CAA"]
let randomLetterIndex = Math.floor(Math.random() * alphabet.length)
let randomWordIndex = Math.floor(Math.random() * words.length)
let questionL = alphabet[randomLetterIndex]
let questionW = alphabet[randomWordIndex]

let count = 0
let correct = false
let isLevelTwo = false
let answerLetter = ""
let questionLetter = ""
let answerWord = ""
let questionWord = ""

counter.subscribe((value) => count = value)
letterQuestion.subscribe((value) => questionLetter = value)
letterAnswer.subscribe((value) => {
    answerLetter = value.split(" ")[1]?.toUpperCase()
    if(answerLetter == undefined) answerLetter = ""
})
answerCorrect.subscribe((value) => correct = value)
leveltwo.subscribe((value) => isLevelTwo = value)
wordQuestion.subscribe((value) => questionWord = value)
wordAnswer.subscribe((value) => answerWord = value.replaceAll("\n", ""))


export function generateQuestion() {
    do{
        randomLetterIndex = Math.floor(Math.random() * alphabet.length)
    }while(alphabet[randomLetterIndex] == questionL)
    do{
        randomWordIndex = Math.floor(Math.random() * words.length)
    }while(words[randomWordIndex] == questionW)

    questionL = alphabet[randomLetterIndex]
    questionW = words[randomWordIndex]
    answerCorrect.set(false)
    letterQuestion.set(questionL)
    wordQuestion.set(questionW)
}


export function checkAnswer() {
    let correct = false
    if(!isLevelTwo){
        if(questionLetter.trim() === answerLetter.trim()) {
           correct = true
        }
    }
    else if(questionWord[count] === answerLetter.trim()) {
            correct = true
        }
    return false
}