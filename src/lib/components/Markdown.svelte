<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';

	let container: HTMLDivElement;
	export let content: string;

	// Declare the sanitizer variable with the correct type
	let sanitizer: DOMPurify.DOMPurifyI | null = null;

	// Initialize and configure marked and DOMPurify once
	onMount(() => {
		if (typeof window !== 'undefined') {
			marked.use(gfmHeadingId());
			marked.use(mangle());
			sanitizer = createSanitizer(window);
		}
	});

	// Reactive block: This updates the content whenever `content` changes
	$: if (sanitizer && content) {
		const parsed = marked.parse(content);
		container.innerHTML = sanitizer.sanitize(parsed);
		Prism.highlightAllUnder(container); // Re-apply syntax highlighting
	}
</script>

<div bind:this={container} class="markdown-container" />
