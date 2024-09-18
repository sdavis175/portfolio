<script lang="ts">
	import { resumeData } from '@data/resume';
	import { onDestroy, onMount } from 'svelte';

	import CommonPage from '$lib/components/CommonPage.svelte';

	let title: string;
	let resumes: Array<[string, string, string]>;
	const resumeDataUnsubscribe = resumeData.subscribe(data => {
		title = data.title;
		resumes = data.resumes;
	});

	// Clean up subscription when component is destroyed
	onDestroy(() => {
		resumeDataUnsubscribe();
	});

	let PdfViewer: typeof import('svelte-pdf-resize-fix').default | undefined;
	onMount(async () => {
		const module = await import('svelte-pdf-resize-fix');
		PdfViewer = module.default;
	});
</script>

<CommonPage {title}>
	<div class="resume">
		{#each resumes as [fileName, data, data64] (fileName)}
			<div class="resume-item">
				<h1 class="resume-header">{fileName}</h1>
				<!--Not sure if going to keep header-->
				<svelte:component
					this={PdfViewer}
					url={data}
					data={atob(data64)}
					showButtons={["navigation", "zoom", "print", "download", "pageInfo"]}
					showBorder={false}
					downloadFileName={fileName}
				/>
			</div>
		{/each}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
    flex-direction: column;
		justify-content: center;
		margin-top: 20px;

    .resume-item {
      margin-bottom: 20px;
      text-align: center; /* Center the text within the resume-item */
    }

    .resume-header {
      font-size: 1.25em;
      font-weight: bold;
      margin-bottom: 10px;
    }

    /* Customizing the PdfViewer CSS */
    :global(.icon) {
      color: inherit;
    }
    :global(#topBtn) {
      display: none;
    }
    :global(.line) {
      border-color: inherit;
    }
	}
</style>
