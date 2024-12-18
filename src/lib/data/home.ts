import { Platform } from '$lib/types';
import { getSkills } from './skills';
import { selectedLanguage } from '@stores/language';
import { writable } from 'svelte/store';

export const homeData = writable({
	title: 'N/A',
	name: 'N/A',
	lastName: 'N/A',
	description: 'N/A',
	lightMode: 'N/A',
	darkMode: 'N/A'
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			homeData.set({
				title: 'Home',
				name: 'Shane',
				lastName: 'Davis',
				description: 'Back-end developer and 3D Printer hobbyist.',
				lightMode: 'Light Mode',
				darkMode: 'Dark Mode'
			});
			break;
		case 'ja':
			homeData.set({
				title: 'ホームページ',
				name: 'シェーン',
				lastName: 'デイヴィス',
				description: 'バックエンド開発者兼3Dプリンター愛好家',
				lightMode: 'ライトモード',
				darkMode: 'ダークモード'
			});
			break;
		default:
			console.error("Loading Home - Unknown language selected.")
			homeData.set({
				title: 'N/A',
				name: 'N/A',
				lastName: 'N/A',
				description: 'N/A',
				lightMode: 'N/A',
				darkMode: 'N/A'
			});
			break;
	}
})

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.GitHub,
		link: 'https://github.com/sdavis175'
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/sdavis175'
	},
	{
		platform: Platform.Email,
		link: 'support@shanedavisinc.com'
	},
];
