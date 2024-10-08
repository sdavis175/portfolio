import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';
import { writable } from 'svelte/store';
import { selectedLanguage } from '@stores/language';

// Markdown Descriptions
// Shane Davis Inc.
import enShaneDavisIncActive from '$lib/md/experience/en/shane-davis-inc-active.md?raw';
import jaShaneDavisIncActive from '$lib/md/experience/ja/shane-davis-inc-active.md?raw';
import enShaneDavisIncInactive from '$lib/md/experience/en/shane-davis-inc-inactive.md?raw';
import jaShaneDavisIncInactive from '$lib/md/experience/ja/shane-davis-inc-inactive.md?raw';

const enItems: Array<Experience> = [
	{
		slug: 'shane-davis-inc-active',
		company: 'Shane Davis Inc.',
		description: enShaneDavisIncActive,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home (US)',
		period: {
			from: new Date('2020-06-03'),
			to: new Date('2023-10-01')
		},
		skills: getSkills('en', [
			'python',
			'autohotkey',
			'regex',
			'microsoft-word',
			'azure',
			'azure-storage',
			'jetbrains'
		]),
		name: 'Python Developer (Active)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed tools for making documents accessible for the disabled.'
	},

	{
		slug: 'shane-davis-inc-inactive',
		company: 'Shane Davis Inc.',
		description: enShaneDavisIncInactive,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Japan',
		period: {
			from: new Date('2023-10'),
		},
		skills: getSkills('en', [
		]),
		name: 'Python Developer (Inactive)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Available for ad-hoc consulting and support, addressing questions and providing guidance as needed on my previous work.'
	}
];

const jaItems: Array<Experience> = [
	{
		slug: 'shane-davis-inc-active',
		company: 'Shane Davis Inc.',
		description: jaShaneDavisIncActive,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home (US)',
		period: {
			from: new Date('2020-06-03'),
			to: new Date('2023-10-01')
		},
		skills: getSkills('ja', [
			'python',
			'autohotkey',
			'regex',
			'microsoft-word',
			'azure',
			'azure-storage',
			'jetbrains'
		]),
		name: 'Python Developer (Active)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed tools for making documents accessible for the disabled.'
	},

	{
		slug: 'shane-davis-inc-inactive',
		company: 'Shane Davis Inc.',
		description: jaShaneDavisIncInactive,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Japan',
		period: {
			from: new Date('2023-10'),
		},
		skills: getSkills('ja', [
		]),
		name: 'Python Developer (Inactive)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Available for ad-hoc consulting and support, addressing questions and providing guidance as needed on my previous work.'
	}
];

export const experienceData = writable<{
	title: string;
	items: Array<Experience>;
}>({
	title: 'N/A',
	items: [],
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			experienceData.set({
				title: 'Experience',
				items: enItems
			});
			break;

		case 'ja':
			experienceData.set({
				title: '経験',
				items: jaItems
			});
			break;

		default:
			console.error("Loading Experience - Unknown language selected.")
			experienceData.set({
				title: 'N/A',
				items: []
			});
			break;
	}
})
