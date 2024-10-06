<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';

	let container: HTMLDivElement;

	export let content: string;

	const sanitizer = createSanitizer(window);

	// Reactive statement that runs whenever `content` changes
	$: if (container && content) {
		marked.use(gfmHeadingId());
		marked.use(mangle());

		const parsed = marked.parse(content);

		container.innerHTML = sanitizer.sanitize(parsed);

		// Highlight the syntax
		Prism.highlightAllUnder(container);
	}
</script>

<div bind:this={container} class="markdown-container" />
