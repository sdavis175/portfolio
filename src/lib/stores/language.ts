import { writable } from 'svelte/store';
import { updateLocalStorage } from '@stores/theme';

const key = '@selected-language';

export const languages: { code: string; name: string }[] = [
	{ code: 'en', name: '🇺🇸 English' },
	{ code: 'ja', name: '🇯🇵 日本語' }
];

export const selectedLanguage = writable<string>('en'); // Default language

export const updateLanguage = (event:Event & { currentTarget: EventTarget & HTMLSelectElement }|string) => {
	const language:string = typeof(event) == 'object' ? event.currentTarget.value : event;
	console.log('Updating language to ' + language);
	selectedLanguage.set(language);
	updateLocalStorage(key, language);
};

export const onHydratedLanguage = () => {
	const fromStore: string | null = localStorage.getItem(key);
	if (!fromStore) {
		updateLanguage('en'); // Default to English
	} else {
		updateLanguage(JSON.parse(fromStore));
	}
};
