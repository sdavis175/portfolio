import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@is-dark-theme';

export const updateLocalStorage = (key: string, value: boolean|string) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(false);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage(key, $v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		return $v;
	});

export const onHydratedTheme = () => {
	const fromStore = localStorage.getItem(key);

	if (!fromStore) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// dark mode
			toggleTheme(true);
		}
		else {
			// light mode
			toggleTheme(false);
		}
	} else {
		toggleTheme(JSON.parse(fromStore));
	}
};
