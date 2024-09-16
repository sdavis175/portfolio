import { selectedLanguage } from '@stores/language';
import { writable } from 'svelte/store';
import type { NavBar } from '$lib/types';

const enItems: Array<NavBar> = [
	{ title: 'Skills', to: '/skills', icon: 'i-carbon-software-resource-cluster' },
	{ title: 'Projects', to: '/projects', icon: 'i-carbon-cube' },
	{ title: 'Experience', to: '/experience', icon: 'i-carbon-development' },
	{ title: 'Education', to: '/education', icon: 'i-carbon-education' },
	{ title: 'Resumé', to: '/resume', icon: 'i-carbon-result' }
];

const jaItems: Array<NavBar> = [
	{ title: 'スキール', to: '/skills', icon: 'i-carbon-software-resource-cluster' },
	{ title: 'プロジェクト', to: '/projects', icon: 'i-carbon-cube' },
	{ title: '経験', to: '/experience', icon: 'i-carbon-development' },
	{ title: '学歴', to: '/education', icon: 'i-carbon-education' },
	{ title: '履歴書', to: '/resume', icon: 'i-carbon-result' }
];

export const navbarData = writable<{
	items: Array<NavBar>;
}>({
	items: []
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			navbarData.set({
				items: enItems,
			});
			break;

		case 'ja':
			navbarData.set({
				items: jaItems,
			});
			break;

		default:
			console.error("Loading NavBar - Unknown language selected.")
			navbarData.set({
				items: [],
			});
			break;
	}
})



