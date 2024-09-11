import { Platform } from '$lib/types';
import { getSkills } from './skills';
import { selectedLanguage } from '@stores/language';
import { writable } from 'svelte/store';

export const homeData = writable({
	title: 'N/A',
	name: 'N/A',
	lastName: 'N/A',
	description: 'N/A',
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			homeData.set({
				title: 'Home',
				name: 'Shane',
				lastName: 'Davis',
				description: 'Test'
			});
			break;
		case 'ja':
			homeData.set({
				title: 'ホームページ',
				name: 'シェーン',
				lastName: 'デイヴィス',
				description: 'あいうえお'
			});
			break;
		default:
			console.error("Loading Home - Unknown language selected.")
			homeData.set({
				title: 'N/A',
				name: 'N/A',
				lastName: 'N/A',
				description: 'N/A'
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
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Email,
		link: 'support@shanedavisinc.com'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
