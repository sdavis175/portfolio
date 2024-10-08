import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { selectedLanguage } from '@stores/language';
import { writable } from 'svelte/store';

// Markdown Project Descriptions
// Senior Design Project
import enSeniorDesignProject from '$lib/md/projects/en/senior-design-project.md?raw';
import jaSeniorDesignProject from '$lib/md/projects/ja/senior-design-project.md?raw';
import sdLoginPage from '$lib/screenshots/senior-design-project/login-page.png';
import sdHomePage from '$lib/screenshots/senior-design-project/home-page.png';
import sdAssignmentsPage from '$lib/screenshots/senior-design-project/assignments-page.png';
import sdTestCaseModal from '$lib/screenshots/senior-design-project/test-case-modal.png';
import sdLeaderboardPage from '$lib/screenshots/senior-design-project/leaderboard-page.png';
import sdGradingPage from '$lib/screenshots/senior-design-project/grading-page.png';

// JaVaCE
import enJaVaCE from '$lib/md/projects/en/javace.md?raw';
import jaJaVaCE from '$lib/md/projects/ja/javace.md?raw';
import jvceOutput from '$lib/screenshots/javace/output.png';
import jvceTrainingStats from '$lib/screenshots/javace/training-stats.png';
import jvceConfusionMatrix from '$lib/screenshots/javace/confusion-matrix.png';

// DreamBooth Multi-Subject
import enDreamBoothMS from '$lib/md/projects/en/dreambooth-multi-subject.md?raw';
import jaDreamBoothMS from '$lib/md/projects/ja/dreambooth-multi-subject.md?raw';
import dbmsExample1 from '$lib/screenshots/dreambooth-multi-subject/example.png';
import dbmsExample2 from '$lib/screenshots/dreambooth-multi-subject/example2.png';
import dbmsOriginalMethodFailure from '$lib/screenshots/dreambooth-multi-subject/original-method-failure.png';
import dbmsModelDiagram from '$lib/screenshots/dreambooth-multi-subject/model-diagram.png';


const enItems: Array<Project> = [
	{
		slug: 'senior-design-project',
		color: 'gold',
		description: enSeniorDesignProject,
		shortDescription:
			'Gamifying program and test case submissions for students in Computer Science',
		links: [],
		logo: Assets.UCF,
		name: 'UCF CS Testing App',
		period: {
			from: new Date('2021-08-04'),
			to: new Date('2022-05-01')
		},
		skills: getSkills('en', [
			'python',
			'js',
			'docker',
			'django',
			'dynamodb',
			'reactjs'
		]),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Login Page',
				src: sdLoginPage
			},
			{
				label: 'Home Page',
				src: sdHomePage
			},
			{
				label: 'Assignments Page',
				src: sdAssignmentsPage
			},
			{
				label: 'Test Case Modal',
				src: sdTestCaseModal
			},
			{
				label: 'Leaderboard Page',
				src: sdLeaderboardPage
			},
			{
				label: 'Grading Page',
				src: sdGradingPage
			},
		]
	},

	{
		slug: 'javace',
		color: 'red',
		description: enJaVaCE,
		shortDescription:
			'Japanese Vocabulary and Comprehension Estimator',
		links: [{to: 'https://github.com/sdavis175/JaVaCE/', label: 'GitHub'}],
		logo: Assets.Nihongo,
		name: 'JaVaCE',
		period: {
			from: new Date('2023-02-01'),
			to: new Date('2023-05-02')
		},
		skills: getSkills('en', [
			'python',
			'pytorch',
			'sklearn',
			'numpy',
			'keras',
		]),
		type: 'Language Learning Program',
		screenshots: [
			{
				label: 'Output',
				src: jvceOutput
			},
			{
				label: 'Training Statistics',
				src: jvceTrainingStats
			},
			{
				label: 'Confusion Matrix',
				src: jvceConfusionMatrix
			},
		]
	},

	{
		slug: 'dreambooth-multi-subject',
		color: 'blue',
		description: enDreamBoothMS,
		shortDescription:
			'Fine trains a text-to-image diffusion model on multiple subjects based on the existing Dreambooth method',
		links: [{to: 'https://github.com/sdavis175/diffusers_dreambooth_multi_subject', label: 'GitHub'}],
		logo: Assets.Unknown,
		name: 'DreamBooth Multi-Subject Diffusion Model',
		period: {
			from: new Date('2023-03-02'),
			to: new Date('2023-05-01')
		},
		skills: getSkills('en', [
			'python',
			'pytorch',
			'numpy',
		]),
		type: 'Text-to-Image Diffusion Model',
		screenshots: [
			{
				label: 'Example Output 1',
				src: dbmsExample1
			},
			{
				label: 'Example Output 2',
				src: dbmsExample2
			},
			{
				label: 'Original DreamBooth method failure point',
				src: dbmsOriginalMethodFailure
			},
			{
				label: 'Model Diagram',
				src: dbmsModelDiagram
			}
		]
	},

	{
		slug: 'league-cs-helper',
		color: 'red',
		description: enSeniorDesignProject,
		shortDescription:
			'Object recognition and analysis for the video game League of Legends.',
		links: [],
		logo: Assets.Unknown,
		name: 'League CS Helper',
		period: {
			from: new Date('2023-02-01'),
			to: new Date('2023-05-02')
		},
		skills: getSkills('en', [
			'python',
			'pytorch',
			'sklearn',
			'numpy',
			'keras',
		]),
		type: 'Language Learning Program',
		screenshots: [
			{
				label: 'Login Page',
				src: sdLoginPage
			},
		]
	},
];

const jaItems: Array<Project> = [
	{
		slug: 'senior-design-project',
		color: 'gold',
		description: jaSeniorDesignProject,
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'あいうえお',
		period: {
			from: new Date()
		},
		skills: getSkills('en', ['angular', 'ts', 'tailwind']),
		type: 'Website Template'
	},

	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'あいうえお',
		period: {
			from: new Date()
		},
		skills: getSkills('ja', ['angular', 'ts', 'tailwind']),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'あいうえお',
		period: {
			from: new Date()
		},
		skills: getSkills('ja', ['svelte', 'ts', 'tailwind', 'sass']),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const projectsData = writable<{
	title: string;
	items: Array<Project>;
}>({
	title: 'N/A',
	items: []
});

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			projectsData.set({
				title: 'Projects',
				items: enItems,
			});
			break;

		case 'ja':
			projectsData.set({
				title: 'プロジェクト',
				items: jaItems,
			});
			break;

		default:
			console.error("Loading Projects - Unknown language selected.")
			projectsData.set({
				title: 'N/A',
				items: [],
			});
			break;
	}
})

