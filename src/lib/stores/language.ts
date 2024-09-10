import { writable } from 'svelte/store';

export const languages: { code: string, name: string }[] = [
	{code: 'en', name:'🇺🇸 English'},
	{code: 'ja', name:'🇯🇵 日本語'}
];

export const selectedLanguage = writable<string>('en'); // Default language
