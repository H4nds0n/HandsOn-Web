import {writable} from "svelte/store";

export const scrollableModal = writable(false);

export const textareaValue = writable('');

export let quizActive = writable(false);