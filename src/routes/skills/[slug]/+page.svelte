<script lang="ts">
	import { skillsData } from '@data/skills';
	import { projectsData } from '@data/projects';
	import { experienceData } from '@data/experience';
	import type { Experience, Project } from '$lib/types';
	import type { Skill } from '$lib/types';

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { getAssetURL } from '$lib/data/assets';

	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	type Related = {
		display: string;
		name: string;
		img: string;
		type: 'projects' | 'experience';
		url: string;
	};

	// Handle dynamic language changes
	let projectItems: Array<Project>;
	let experienceItems: Array<Experience>;
	let skill: Skill;
	let title: string;
	const projectsDataUnsubscribe = projectsData.subscribe(data => {
		projectItems = data.items;
	});
	const skillsDataUnsubscribe = skillsData.subscribe(data => {
		skill = data.items.find((item) => item.slug === $page.params.slug) as Skill;
		title = data.title;
	});
	const experienceDataUnsubscribe = experienceData.subscribe(data => {
		experienceItems = data.items;
	});

	// Clean up subscription when component is destroyed
	onDestroy(() => {
		projectsDataUnsubscribe();
		skillsDataUnsubscribe();
		experienceDataUnsubscribe();
	});

	const getRelatedProjects = (): Array<Related> => {
		const out: Array<Related> = [];

		if (!skill) {
			return [];
		}

		projectItems.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} (${item.type})`,
					name: item.name,
					type: 'projects',
					url: `/projects/${item.slug}`
				});
			}
		});

		experienceItems.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} @ ${item.company}`,
					name: item.name,
					type: 'experience',
					url: `/experience/${item.slug}`
				});
			}
		});

		return out;
	};

	$: computedTitle = skill ? `${skill.name} - ${title}` : title;

	$: related = skill ? getRelatedProjects() : [];
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if skill === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-software-resource-cluster" classes="text-3.5em" />
			<p class="font-300">Could not load skill data.</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(skill.logo)}>
				<MainTitle>{skill.name}</MainTitle>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if skill.description}
						<Markdown content={skill.description ?? 'This place is yet to be filled...'} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="self-stretch mb-2">
				<CardDivider />
			</div>
			<div class="flex flex-row gap-1 self-stretch flex-wrap ">
				<div class="px-10px">
					{#each related as item}
						<Chip
							classes="inline-flex flex-row items-center justify-center"
							href={`${base}${item.url}`}
						>
							<CardLogo src={item.img} alt={item.name} radius={'0px'} size={15} classes="mr-2" />
							<span class="text-[0.9em]">{item.display}</span>
						</Chip>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
