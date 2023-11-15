import {textareaValue} from "$lib/scripts/stores.js";

export let images = [];

export function text_to_images() {
    images = [];
    let text = "";

    textareaValue.subscribe(value => {
        text = value;
    });

    text = text.toLowerCase().trim();

    for (let i = 0; i < text.length; i++) {
        let letter = text.charAt(i);

        if (letter === ' ') {
            letter = 'space';
        }
        images.push({alt:`${letter}`, src:`src/lib/images/${letter}.jpg`});
    }
}