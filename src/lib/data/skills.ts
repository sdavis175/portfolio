import Assets from './assets';
import type { Project, Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import { selectedLanguage } from '@stores/language';
import { writable, get } from 'svelte/store';

// Markdown Skill Descriptions
// Programming Languages
import enPython from '@md/skills/en/pro-lang/python.md?raw';
import jaPython from '@md/skills/ja/pro-lang/python.md?raw';
import enJavascript from '@md/skills/en/pro-lang/javascript.md?raw';
import jaJavascript from '@md/skills/ja/pro-lang/javascript.md?raw';
import enTypescript from '@md/skills/en/pro-lang/typescript.md?raw';
import jaTypescript from '@md/skills/ja/pro-lang/typescript.md?raw';
import enJava from '@md/skills/en/pro-lang/java.md?raw';
import jaJava from '@md/skills/ja/pro-lang/java.md?raw';
import enAutoHotkey from '@md/skills/en/pro-lang/autohotkey.md?raw';
import jaAutoHotkey from '@md/skills/ja/pro-lang/autohotkey.md?raw';
import enC from '@md/skills/en/pro-lang/c.md?raw';
import jaC from '@md/skills/ja/pro-lang/c.md?raw';
import enMatlab from '@md/skills/en/pro-lang/matlab.md?raw';
import jaMatlab from '@md/skills/ja/pro-lang/matlab.md?raw';

// Frameworks
import enDjango from '@md/skills/en/framework/django.md?raw';
import jaDjango from '@md/skills/ja/framework/django.md?raw';

// Libraries
import enTensorFlow from '@md/skills/en/library/tensorflow.md?raw';
import jaTensorFlow from '@md/skills/ja/library/tensorflow.md?raw';
import enReactJS from '@md/skills/en/library/react.md?raw';
import jaReactJS from '@md/skills/en/library/react.md?raw';
import enReactNative from '@md/skills/en/library/react-native.md?raw';
import jaReactNative from '@md/skills/ja/library/react-native.md?raw';
import enSvelte from '@md/skills/en/library/svelte.md?raw';
import jaSvelte from '@md/skills/ja/library/svelte.md?raw';
import enScikitLearn from '@md/skills/en/library/scikit-learn.md?raw';
import jaScikitLearn from '@md/skills/ja/library/scikit-learn.md?raw';
import enNumpy from '@md/skills/en/library/numpy.md?raw';
import jaNumpy from '@md/skills/ja/library/numpy.md?raw';
import enKeras from '@md/skills/en/library/keras.md?raw';
import jaKeras from '@md/skills/ja/library/keras.md?raw';
import enPyTorch from '@md/skills/en/library/pytorch.md?raw';
import jaPyTorch from '@md/skills/ja/library/pytorch.md?raw';
import enRegEx from '@md/skills/en/library/regex.md?raw';
import jaRegEx from '@md/skills/ja/library/regex.md?raw';

// Databases
import enMongoDB from '@md/skills/en/db/mongodb.md?raw';
import jaMongoDB from '@md/skills/ja/db/mongodb.md?raw';
import enDynamoDB from '@md/skills/en/db/dynamodb.md?raw';
import jaDynamoDB from '@md/skills/ja/db/dynamodb.md?raw';
import enAzureStorage from '@md/skills/en/db/azure-storage.md?raw';
import jaAzureStorage from '@md/skills/ja/db/azure-storage.md?raw';

// DevOps
import enDocker from '@md/skills/en/devops/docker.md?raw';
import jaDocker from '@md/skills/ja/devops/docker.md?raw';

// Applications
import enMicrosoftWord from '@md/skills/en/application/microsoft-word.md?raw';
import jaMicrosoftWord from '@md/skills/ja/application/microsoft-word.md?raw';
import enMicrosoftExcel from '@md/skills/en/application/microsoft-excel.md?raw';
import jaMicrosoftExcel from '@md/skills/ja/application/microsoft-excel.md?raw';
import enMicrosoftPowerPoint from '@md/skills/en/application/microsoft-powerpoint.md?raw';
import jaMicrosoftPowerPoint from '@md/skills/ja/application/microsoft-powerpoint.md?raw';
import enJetBrains from '@md/skills/en/application/jetbrains.md?raw';
import jaJetBrains from '@md/skills/ja/application/jetbrains.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const enCategories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Applications', slug: 'application' }),
] as const;

const jaCategories = [
	defineSkillCategory({ name: 'あいうえお', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Applications', slug: 'application' }),
] as const;

export const skillsData = writable<{
	title: string;
	items: Skill[];
	categories: SkillCategory[];
}>({
	title: 'N/A',
	items: [],
	categories: []
});

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof enCategories)[number]['slug']>;
	},
	language: string
): Skill<S> => {
	const categories = language == 'en' ? enCategories : jaCategories;
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

const enItems = [
	// Programming Languages
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: enPython,
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}, 'en'),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: enC,
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}, 'en'),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: enJavascript,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}, 'en'),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: enTypescript,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}, 'en'),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: enJava,
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}, 'en'),
	defineSkill({
		slug: 'autohotkey',
		color: 'green',
		description: enAutoHotkey,
		logo: Assets.AutoHotkey,
		name: 'AutoHotkey',
		category: 'pro-lang'
	}, 'en'),
	defineSkill({
		slug: 'matlab',
		color: 'orange',
		description: enMatlab,
		logo: Assets.Matlab,
		name: 'Matlab',
		category: 'pro-lang'
	}, 'en'),

	// Frameworks
	defineSkill({
		slug: 'django',
		color: 'green',
		description: enDjango,
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}, 'en'),

	// Libraries
	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description: enTensorFlow,
		logo: Assets.TensorFlow,
		name: 'TensorFlow',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: enReactJS,
		logo: Assets.ReactJs,
		name: 'React JS',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'react-native',
		color: 'cyan',
		description: enReactNative,
		logo: Assets.ReactJs,
		name: 'React Native',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: enSvelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'sklearn',
		color: 'orange',
		description: enScikitLearn,
		logo: Assets.ScikitLearn,
		name: 'Sci-kit Learn',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'numpy',
		color: 'cyan',
		description: enNumpy,
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'keras',
		color: 'red',
		description: enKeras,
		logo: Assets.Keras,
		name: 'Keras',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'pytorch',
		color: 'orange',
		description: enPyTorch,
		logo: Assets.PyTorch,
		name: 'PyTorch',
		category: 'library'
	}, 'en'),
	defineSkill({
		slug: 'regex',
		color: 'grey',
		description: enRegEx,
		logo: Assets.RegEx,
		name: 'RegEx',
		category: 'library'
	}, 'en'),

	// Databases
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: enMongoDB,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}, 'en'),
	defineSkill({
		slug: 'dynamodb',
		color: 'cyan',
		description: enDynamoDB,
		logo: Assets.DynamoDB,
		name: 'Amazon DynamoDB',
		category: 'db'
	}, 'en'),
	defineSkill({
		slug: 'azure-storage',
		color: 'cyan',
		description: enAzureStorage,
		logo: Assets.Azure,
		name: 'Azure Storage',
		category: 'db'
	}, 'en'),

	// DevOps
	defineSkill({
		slug: 'docker',
		color: 'cyan',
		description: enDocker,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}, 'en'),

	// Applications
	defineSkill({
		slug: 'microsoft-word',
		color: 'blue',
		description: enMicrosoftWord,
		logo: Assets.MicrosoftWord,
		name: 'Microsoft Word',
		category: 'application'
	}, 'en'),
	defineSkill({
		slug: 'microsoft-excel',
		color: 'green',
		description: enMicrosoftExcel,
		logo: Assets.MicrosoftExcel,
		name: 'Microsoft Excel',
		category: 'application'
	}, 'en'),
	defineSkill({
		slug: 'microsoft-powerpoint',
		color: 'orange',
		description: enMicrosoftPowerPoint,
		logo: Assets.MicrosoftPowerPoint,
		name: 'Microsoft PowerPoint',
		category: 'application'
	}, 'en'),
	defineSkill({
		slug: 'jetbrains',
		color: 'black',
		description: enJetBrains,
		logo: Assets.JetBrains,
		name: 'JetBrains IDEs',
		category: 'application'
	}, 'en'),
] as const;

const jaItems = [
	// Programming Languages
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: jaPython,
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}, 'ja'),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: jaC,
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}, 'ja'),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: jaJavascript,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}, 'ja'),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: jaTypescript,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}, 'ja'),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: jaJava,
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}, 'ja'),
	defineSkill({
		slug: 'autohotkey',
		color: 'green',
		description: jaAutoHotkey,
		logo: Assets.AutoHotkey,
		name: 'AutoHotkey',
		category: 'pro-lang'
	}, 'ja'),
	defineSkill({
		slug: 'matlab',
		color: 'orange',
		description: jaMatlab,
		logo: Assets.Matlab,
		name: 'Matlab',
		category: 'pro-lang'
	}, 'ja'),

	// Frameworks
	defineSkill({
		slug: 'django',
		color: 'green',
		description: jaDjango,
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}, 'ja'),

	// Libraries
	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description: jaTensorFlow,
		logo: Assets.TensorFlow,
		name: 'TensorFlow',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: jaReactJS,
		logo: Assets.ReactJs,
		name: 'React JS',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'react-native',
		color: 'cyan',
		description: jaReactNative,
		logo: Assets.ReactJs,
		name: 'React Native',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: jaSvelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'sklearn',
		color: 'orange',
		description: jaScikitLearn,
		logo: Assets.ScikitLearn,
		name: 'Sci-kit Learn',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'numpy',
		color: 'cyan',
		description: jaNumpy,
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'keras',
		color: 'red',
		description: jaKeras,
		logo: Assets.Keras,
		name: 'Keras',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'pytorch',
		color: 'orange',
		description: jaPyTorch,
		logo: Assets.PyTorch,
		name: 'PyTorch',
		category: 'library'
	}, 'ja'),
	defineSkill({
		slug: 'regex',
		color: 'grey',
		description: jaRegEx,
		logo: Assets.RegEx,
		name: 'RegEx',
		category: 'library'
	}, 'ja'),

	// Databases
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: jaMongoDB,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}, 'ja'),
	defineSkill({
		slug: 'dynamodb',
		color: 'cyan',
		description: jaDynamoDB,
		logo: Assets.DynamoDB,
		name: 'Amazon DynamoDB',
		category: 'db'
	}, 'ja'),
	defineSkill({
		slug: 'azure-storage',
		color: 'cyan',
		description: jaAzureStorage,
		logo: Assets.Azure,
		name: 'Azure Storage',
		category: 'db'
	}, 'ja'),

	// DevOps
	defineSkill({
		slug: 'docker',
		color: 'cyan',
		description: jaDocker,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}, 'ja'),

	// Applications
	defineSkill({
		slug: 'microsoft-word',
		color: 'blue',
		description: jaMicrosoftWord,
		logo: Assets.MicrosoftWord,
		name: 'Microsoft Word',
		category: 'application'
	}, 'ja'),
	defineSkill({
		slug: 'microsoft-excel',
		color: 'green',
		description: jaMicrosoftExcel,
		logo: Assets.MicrosoftExcel,
		name: 'Microsoft Excel',
		category: 'application'
	}, 'ja'),
	defineSkill({
		slug: 'microsoft-powerpoint',
		color: 'orange',
		description: jaMicrosoftPowerPoint,
		logo: Assets.MicrosoftPowerPoint,
		name: 'Microsoft PowerPoint',
		category: 'application'
	}, 'ja'),
	defineSkill({
		slug: 'jetbrains',
		color: 'black',
		description: jaJetBrains,
		logo: Assets.JetBrains,
		name: 'JetBrains IDEs',
		category: 'application'
	}, 'ja'),
] as const;

export const getSkills = (
	language: string,
	slugs: Array<StringWithAutoComplete<(typeof enItems)[number]['slug']>>
): Array<Skill> => {
	const items = [...(language == 'en' ? enItems : jaItems)];
	return items.filter((it) => slugs.includes(it.slug));
};

export const groupByCategory = (
	query: string,
	items: Array<Skill>,
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

selectedLanguage.subscribe((language) => {
	switch (language) {
		case 'en':
			skillsData.set({
				title: 'Skills',
				items: [...enItems],
				categories: [...enCategories]
			});
			break;

		case 'ja':
			skillsData.set({
				title: 'スキール',
				items: [...jaItems],
				categories: [...jaCategories]
			});
			break;

		default:
			console.error("Loading Skills - Unknown language selected.")
			skillsData.set({
				title: 'N/A',
				items: [],
				categories: []
			});
			break;
	}
})
