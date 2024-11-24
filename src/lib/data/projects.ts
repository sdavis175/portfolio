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
import dbmsExample3 from '$lib/screenshots/dreambooth-multi-subject/example3.png';
import dbmsOriginalMethodFailure from '$lib/screenshots/dreambooth-multi-subject/original-method-failure.png';
import dbmsModelDiagram from '$lib/screenshots/dreambooth-multi-subject/model-diagram.png';
import dbmsCustomLoss from '$lib/screenshots/dreambooth-multi-subject/custom-loss.png';

// League CS Helper
import enLeagueCSHelper from '$lib/md/projects/en/league-cs-helper.md?raw';
import jaLeagueCSHelper from '$lib/md/projects/ja/league-cs-helper.md?raw';
import lcshThresholdOff from '$lib/screenshots/league-cs-helper/threshold-off.png';
import lcshThresholdOn from '$lib/screenshots/league-cs-helper/threshold-on.png';

// Mosaic Generator
import enMosaicGenerator from '$lib/md/projects/en/mosaic-generator.md?raw';
import jaMosaicGenerator from '$lib/md/projects/ja/mosaic-generator.md?raw';
import mgOffice from '$lib/screenshots/mosaic-generator/office.png';
import mgHECBuilding from '$lib/screenshots/mosaic-generator/hec-building.png';
import mgKitchen from '$lib/screenshots/mosaic-generator/kitchen.png';

// Portfolio
import enPortfolio from '$lib/md/projects/en/portfolio.md?raw';
import jaPortfolio from '$lib/md/projects/ja/portfolio.md?raw';

// Accessible Document Converter
import enAccessibleDocumentConverter from '$lib/md/projects/en/accessible-document-converter.md?raw';
import jaAccessibleDocumentConverter from '$lib/md/projects/ja/accessible-document-converter.md?raw';

// File Processing API
import enFileProcessingAPI from '$lib/md/projects/en/file-processing-api.md?raw';
import jaFileProcessingAPI from '$lib/md/projects/ja/file-processing-api.md?raw';


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
		type: 'Full-Stack Web Application',
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
		type: 'Language Learning Assistant Program',
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
			'Fine tunes a text-to-image diffusion model on multiple subjects based on the existing Dreambooth fine-tuning method',
		links: [{to: 'https://github.com/sdavis175/diffusers_dreambooth_multi_subject/', label: 'GitHub'}],
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
		type: 'Fine-Tuning Text-to-Image Diffusion Model',
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
				label: 'Example Output 3',
				src: dbmsExample3
			},
			{
				label: 'Original DreamBooth method failure point',
				src: dbmsOriginalMethodFailure
			},
			{
				label: 'Model Diagram',
				src: dbmsModelDiagram
			},
			{
				label: 'Custom Loss Function',
				src: dbmsCustomLoss
			}
		]
	},

	{
		slug: 'league-cs-helper',
		color: 'red',
		description: enLeagueCSHelper,
		shortDescription:
			'Object recognition and analysis for the video game League of Legends',
		links: [{to: 'https://github.com/sdavis175/League_CS_Helper/', label: 'GitHub'}],
		logo: Assets.Unknown,
		name: 'League CS Helper',
		period: {
			from: new Date('2021-10-29'),
			to: new Date('2021-12-05')
		},
		skills: getSkills('en', [
			'python',
			'pytorch',
			'sklearn',
			'numpy',
			'keras',
		]),
		type: 'Object Recognition',
		screenshots: [
			{
				label: 'Health Threshold Off - all monsters are detected',
				src: lcshThresholdOff
			},
			{
				label: 'Health Threshold On - only monsters with low enough health are displayed',
				src: lcshThresholdOn
			},
		]
	},

	{
		slug: 'mosaic',
		color: 'green',
		description: enMosaicGenerator,
		shortDescription:
			'Generates a panoramic mosaic image from a collection of images using Projective Geometry',
		links: [{to: 'https://github.com/sdavis175/Mosaic_Generator/', label: 'GitHub'}],
		logo: Assets.Unknown,
		name: 'Mosaic Generator',
		period: {
			from: new Date('2022-10-24'),
			to: new Date('2022-11-07')
		},
		skills: getSkills('en', [
			'matlab'
		]),
		type: 'Projective Geometry & SIFT Feature Extractor Visual Application',
		screenshots: [
			{
				label: 'Example: Office',
				src: mgOffice
			},
			{
				label: 'Example: HEC Building',
				src: mgHECBuilding
			},
			{
				label: 'Example: Kitchen',
				src: mgKitchen
			},
		]
	},

	{
		slug: 'portfolio',
		color: 'orange',
		description: enPortfolio,
		shortDescription:
			'My personal website portfolio',
		links: [{to: 'https://github.com/sdavis175/portfolio/', label: 'GitHub'}],
		logo: Assets.Svelte,
		name: 'Portfolio',
		period: {
			from: new Date('2024-09-08'),
			to: new Date('2024-10-08') // UPDATE WHEN DONE
		},
		skills: getSkills('en', [
			'svelte',
			'ts'
		]),
		type: 'Website'
	},

	{
		slug: 'adc',
		color: 'red',
		description: enAccessibleDocumentConverter,
		shortDescription:
			'Converts documents into an accessible format',
		links: [],
		logo: Assets.Unknown,
		name: 'Accessible Document Converter',
		period: {
			from: new Date('2020-06'),
			to: new Date('2023-06')
		},
		skills: getSkills('en', [
			'python',
			'regex',
			'microsoft-word'
		]),
		type: 'Application'
	},

	{
		slug: 'file-processing-api',
		color: 'blue',
		description: enFileProcessingAPI,
		shortDescription:
			'Large-scale file processor API',
		links: [],
		logo: Assets.Unknown,
		name: 'File Processing API',
		period: {
			from: new Date('2022-01-02'),
			to: new Date('2023-06')
		},
		skills: getSkills('en', [
			'python',
			'azure',
			'azure-storage'
		]),
		type: 'API Service'
	},
];

const jaItems: Array<Project> = [
	{
		slug: 'senior-design-project',
		color: 'gold',
		description: jaSeniorDesignProject,
		shortDescription:
			'コンピュータサイエンスの学生向けに、プログラムとテストケース提出をゲーミフィケーション化',
		links: [],
		logo: Assets.UCF,
		name: 'UCF CSテストアプリ',
		period: {
			from: new Date('2021-08-04'),
			to: new Date('2022-05-01')
		},
		skills: getSkills('ja', [
			'python',
			'js',
			'docker',
			'django',
			'dynamodb',
			'reactjs'
		]),
		type: 'Webアプリケーション',
		screenshots: [
			{
				label: 'ログインページ',
				src: sdLoginPage
			},
			{
				label: 'ホームページ',
				src: sdHomePage
			},
			{
				label: '課題ページ',
				src: sdAssignmentsPage
			},
			{
				label: 'テストケースモーダル',
				src: sdTestCaseModal
			},
			{
				label: 'リーダーボードページ',
				src: sdLeaderboardPage
			},
			{
				label: '採点ページ',
				src: sdGradingPage
			},
		]
	},

	{
		slug: 'javace',
		color: 'red',
		description: jaJaVaCE,
		shortDescription:
			'日本語語彙力と理解力の推定ツール',
		links: [{to: 'https://github.com/sdavis175/JaVaCE/', label: 'GitHub'}],
		logo: Assets.Nihongo,
		name: 'JaVaCE',
		period: {
			from: new Date('2023-02-01'),
			to: new Date('2023-05-02')
		},
		skills: getSkills('ja', [
			'python',
			'pytorch',
			'sklearn',
			'numpy',
			'keras',
		]),
		type: '語学学習支援プログラム',
		screenshots: [
			{
				label: '出力結果',
				src: jvceOutput
			},
			{
				label: 'トレーニング統計',
				src: jvceTrainingStats
			},
			{
				label: '混同行列',
				src: jvceConfusionMatrix
			},
		]
	},

	{
		slug: 'dreambooth-multi-subject',
		color: 'blue',
		description: jaDreamBoothMS,
		shortDescription:
			'既存のDreamBooth微調整手法を基にした、複数対象のテキストから画像への拡散モデルの微調整',
		links: [{to: 'https://github.com/sdavis175/diffusers_dreambooth_multi_subject/', label: 'GitHub'}],
		logo: Assets.Unknown,
		name: 'DreamBoothマルチ対象拡散モデル',
		period: {
			from: new Date('2023-03-02'),
			to: new Date('2023-05-01')
		},
		skills: getSkills('ja', [
			'python',
			'pytorch',
			'numpy',
		]),
		type: 'テキストから画像への拡散モデル微調整',
		screenshots: [
			{
				label: '出力例1',
				src: dbmsExample1
			},
			{
				label: '出力例2',
				src: dbmsExample2
			},
			{
				label: '出力例3',
				src: dbmsExample3
			},
			{
				label: 'DreamBooth手法の課題点',
				src: dbmsOriginalMethodFailure
			},
			{
				label: 'モデル図',
				src: dbmsModelDiagram
			},
			{
				label: 'カスタム損失関数',
				src: dbmsCustomLoss
			}
		]
	},

	{
		slug: 'league-cs-helper',
		color: 'red',
		description: jaLeagueCSHelper,
		shortDescription:
			'リーグ・オブ・レジェンドのオブジェクト認識と分析',
		links: [{to: 'https://github.com/sdavis175/League_CS_Helper/', label: 'GitHub'}],
		logo: Assets.Unknown,
		name: 'League CSヘルパー',
		period: {
			from: new Date('2021-10-29'),
			to: new Date('2021-12-05')
		},
		skills: getSkills('ja', [
			'python',
			'pytorch',
			'sklearn',
			'numpy',
			'keras',
		]),
		type: 'オブジェクト認識',
		screenshots: [
			{
				label: '全モンスターが検出されている状態',
				src: lcshThresholdOff
			},
			{
				label: '低体力モンスターのみ表示されている状態',
				src: lcshThresholdOn
			},
		]
	},

	{
		slug: 'mosaic',
		color: 'green',
		description: jaMosaicGenerator,
		shortDescription:
			'射影幾何学を使用し、画像コレクションからパノラマモザイク画像を生成',
		links: [{to: 'https://github.com/sdavis175/Mosaic_Generator/', label: 'GitHub'}],
		logo: Assets.Unknown,
		name: 'モザイクジェネレーター',
		period: {
			from: new Date('2022-10-24'),
			to: new Date('2022-11-07')
		},
		skills: getSkills('ja', [
			'matlab'
		]),
		type: '射影幾何学＆SIFT特徴抽出視覚アプリケーション',
		screenshots: [
			{
				label: 'オフィス例',
				src: mgOffice
			},
			{
				label: 'HECビル例',
				src: mgHECBuilding
			},
			{
				label: 'キッチン例',
				src: mgKitchen
			},
		]
	},

	{
		slug: 'portfolio',
		color: 'orange',
		description: jaPortfolio,
		shortDescription:
			'私のポートフォリオウェブサイト',
		links: [{to: 'https://github.com/sdavis175/portfolio/', label: 'GitHub'}],
		logo: Assets.Svelte,
		name: 'ポートフォリオ',
		period: {
			from: new Date('2024-09-08'),
			to: new Date('2024-10-08') // UPDATE WHEN DONE
		},
		skills: getSkills('ja', [
			'svelte',
			'ts'
		]),
		type: 'ウェブサイト'
	},

	{
		slug: 'adc',
		color: 'red',
		description: jaAccessibleDocumentConverter,
		shortDescription:
			'文書をアクセシブルな形式に変換',
		links: [],
		logo: Assets.Unknown,
		name: 'アクセシブル文書変換ツール',
		period: {
			from: new Date('2020-06'),
			to: new Date('2023-06')
		},
		skills: getSkills('ja', [
			'python',
			'regex',
			'microsoft-word'
		]),
		type: 'アプリケーション'
	},

	{
		slug: 'file-processing-api',
		color: 'blue',
		description: jaFileProcessingAPI,
		shortDescription:
			'大規模なファイル処理API',
		links: [],
		logo: Assets.Unknown,
		name: 'ファイル処理API',
		period: {
			from: new Date('2022-01-02'),
			to: new Date('2023-06')
		},
		skills: getSkills('ja', [
			'python',
			'azure',
			'azure-storage'
		]),
		type: 'ファイル処理API'
	},
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

