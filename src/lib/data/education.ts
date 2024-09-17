import Assets from './assets';
import type { Education } from '../types';
import { writable } from 'svelte/store';
import { selectedLanguage } from '@stores/language';

const enItems: Array<Education> = [
	{
		degree: 'Bachelor Degree of Computer Science',
		description: '',
		location: 'Florida',
		logo: Assets.UCF,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

const jaItems: Array<Education> = [
	{
		degree: 'Bachelor Degree of Computer Scienceあいうえお',
		description: '',
		location: 'Florida',
		logo: Assets.UCF,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Cあ', 'Algorithmえ', 'Algebraう', 'Pythonい', 'C++', 'Java', 'English']
	},
	{
		degree: 'PhD of Computer Scienceあいうえお',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const educationData = writable<{
	title: string;
	items: Array<Education>;
}>({
	title: 'N/A',
	items: [],
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			educationData.set({
				title: 'Education',
				items: enItems
			});
			break;

		case 'ja':
			educationData.set({
				title: '学歴',
				items: jaItems
			});
			break;

		default:
			console.error("Loading Education - Unknown language selected.")
			educationData.set({
				title: 'N/A',
				items: []
			});
			break;
	}
})
