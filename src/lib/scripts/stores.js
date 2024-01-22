import {writable} from "svelte/store";

export const scrollableModal = writable(false);

export const textareaValue = writable('');

export let quizActive = writable(false);

export let letterQuestion = writable("");
export let letterAnswer = writable("");

export let wordQuestion = writable("");
export let wordAnswer = writable("");

export let answerCorrect = writable(false)
export let leveltwo = writable(false)

export const hideHistory = writable(true);
export let textHistory = writable([]);
export const showNotification = writable(false);