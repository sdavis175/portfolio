import Assets from './assets';
import { getSkills, skillsData } from './skills';
import { ContractType, type Experience, type Skill, type SkillCategory } from '../types';
import { writable } from 'svelte/store';
import { selectedLanguage } from '@stores/language';

const enItems: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('en', ['ts', 'js']),
		name: 'Open Source Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('en', ['svelte', 'ts', 'sass', 'css', 'html', 'js']),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('en', ['css', 'html', 'js']),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

const jaItems: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ja', ['ts', 'js']),
		name: 'Open Source Developerあいうえお',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ja', ['svelte', 'ts', 'sass', 'css', 'html', 'js']),
		name: 'Freelancerあいうえお',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('ja', ['css', 'html', 'js']),
		name: 'Junior Freelancerあいうえお',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
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
