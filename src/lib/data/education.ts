import Assets from './assets';
import type { Education } from '../types';
import { writable } from 'svelte/store';
import { selectedLanguage } from '@stores/language';

const enItems: Array<Education> = [
	{
		degree: 'Associates of Arts (AA)',
		description: '', // Unused
		location: 'Valencia College (Orlando, FL)',
		logo: Assets.Valencia,
		name: '', // Unused
		organization: 'Dual Enrollment from University High School',
		period: { from: new Date(2018, 6, 1), to: new Date(2020, 8, 1) },
		shortDescription: '', // Unused
		slug: 'aa-associates',
		subjects: ['Algebra', 'Geometry', 'Physics', 'Chemistry', 'Interpersonal Communications']
	},
	{
		degree: 'Computer Science (BS) – Accelerated BS to MS',
		description: '', // Unused
		location: 'University of Central Florida (Orlando, FL)',
		logo: Assets.UCF,
		name: '', // Unused
		organization: 'College of Engineering and Computer Science',
		period: { from: new Date(2020, 8, 1), to: new Date(2022, 5, 1) },
		shortDescription: '', // Unused
		slug: 'cs-bachelors',
		subjects: ['C', 'Python', 'Java', 'JavaScript',
			'Computer Algorithms', 'Artificial Intelligence', 'Computer Vision', 'Calculus',
			'TensorFlow', 'PyTorch', 'React/React Native', 'Regex', 'SciKit', 'NumPy' ]
	},
	{
		degree: 'Computer Science (MS) – Accelerated BS to MS',
		description: '', // Unused
		location: 'University of Central Florida (Orlando, FL)',
		logo: Assets.UCF,
		name: '', // Unused
		organization: 'College of Engineering and Computer Science',
		period: { from: new Date(2022, 8, 1), to: new Date(2023, 5, 1) },
		shortDescription: '', // Unused
		slug: 'cs-masters',
		subjects: ['C', 'Python', 'MatLab',
			'Computer Algorithms', 'Artificial Intelligence', 'Computer Vision', 'Natural Language Processing',
			'TensorFlow', 'PyTorch', 'SciKit', 'NumPy']
	},
	{
		degree: 'Study Abroad - Learning Japanese',
		description: '', // Unused
		location: 'KCP International Japanese Language School (Tokyo, Japan)',
		logo: Assets.KCP,
		name: '', // Unused
		organization: 'Studying for JLPT N2',
		period: { from: new Date(2023, 10, 1), to: new Date(2025, 3, 1) },
		shortDescription: '', // Unused
		slug: 'kcp',
		subjects: ['Japanese']
	}
];

const jaItems: Array<Education> = [
	{
		degree: '準学士号 (AA)',
		description: '', // Unused
		location: 'バレンシアカレッジ（オーランド、フロリダ州）',
		logo: Assets.Valencia,
		name: '', // Unused
		organization: 'ユニバーシティ高校からのデュアルエンロールメント',
		period: { from: new Date(2018, 6, 1), to: new Date(2020, 8, 1) },
		shortDescription: '', // Unused
		slug: 'aa-associates',
		subjects: ['代数学', '幾何学', '物理学', '化学', '対人コミュニケーション']
	},
	{
		degree: 'コンピュータサイエンス学士（BS）– 学士・修士一貫プログラム',
		description: '', // Unused
		location: 'セントラルフロリダ大学（オーランド、フロリダ州）',
		logo: Assets.UCF,
		name: '', // Unused
		organization: '工学部・コンピュータサイエンス学科',
		period: { from: new Date(2020, 8, 1), to: new Date(2022, 5, 1) },
		shortDescription: '', // Unused
		slug: 'cs-bachelors',
		subjects: ['C', 'Python', 'Java', 'JavaScript', 'コンピュータアルゴリズム', '人工知能', 'コンピュータビジョン', '微積分', 'TensorFlow', 'PyTorch', 'React/React Native', '正規表現', 'SciKit', 'NumPy']
	},
	{
		degree: 'コンピュータサイエンス修士（MS）– 学士・修士一貫プログラム',
		description: '', // Unused
		location: 'セントラルフロリダ大学（オーランド、フロリダ州）',
		logo: Assets.UCF,
		name: '', // Unused
		organization: '工学部・コンピュータサイエンス学科',
		period: { from: new Date(2022, 8, 1), to: new Date(2023, 5, 1) },
		shortDescription: '', // Unused
		slug: 'cs-masters',
		subjects: ['C', 'Python', 'MatLab', 'コンピュータアルゴリズム', '人工知能', 'コンピュータビジョン', '自然言語処理', 'TensorFlow', 'PyTorch', 'SciKit', 'NumPy']
	},
	{
		degree: '留学 - 日本語学習',
		description: '', // Unused
		location: 'KCP地球市民日本語学校（東京、日本）',
		logo: Assets.KCP,
		name: '', // Unused
		organization: 'JLPT N2のための学習',
		period: { from: new Date(2023, 10, 1), to: new Date(2025, 3, 1) },
		shortDescription: '', // Unused
		slug: 'kcp',
		subjects: ['日本語']
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
