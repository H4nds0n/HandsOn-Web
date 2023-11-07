import {textareaValue} from "$lib/scripts/stores.js";
let question = "";
export function generateQuestion() {
    let alphabet = "ABC"
    let randomIndex = Math.floor(Math.random() * alphabet.length)
    question = alphabet[randomIndex]
    textareaValue.set("Say: " + question)
    return question
}


export function checkAnswer(answer) {
    if(question != "") {
       let correct = answer == question
       let text = "";
        textareaValue.subscribe(value => {
            text = value;
        });                    

        let addition = "";
                        
        if(correct) {
            addition = "Your answer was correct!";
            generateQuestion();
        }
        else {
            addition = "Try again"
        }
        
        text = "Say: " + question + "\n" + addition;
        textareaValue.set(text);
        }
    
}