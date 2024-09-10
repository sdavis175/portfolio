import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'HomeTEST UPDATE';

export const name = 'Shane';

export const lastName = 'Davis';

export const description =
	'description';

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
