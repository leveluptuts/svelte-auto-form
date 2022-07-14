<script>import { marked } from 'marked';
import Prism from 'prismjs';
// import 'prism-svelte'
export let text = '';
marked.setOptions({
    highlight: (code, lang) => {
        if (Prism.languages[lang])
            return Prism.highlight(code, Prism.languages[lang || 'markup'], lang);
        return code;
    }
});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/prism-themes@1.7.0/themes/prism-material-oceanic.css"
	/>
</svelte:head>

<div class="markdown-render">
	{@html marked(text)}
</div>

<style>.markdown-render {
  hyphens: auto;
  overflow-wrap: break-word;
  word-break: break-word;
  word-wrap: break-word;
}
.markdown-render :global(pre) {
  margin: 0.4rem 0;
  padding: 0;
}
.markdown-render :global(img) {
  max-height: 300px;
  max-width: 300px;
}
.markdown-render :global(iframe) {
  aspect-ratio: 16/9;
  height: auto;
  width: 100%;
}
.markdown-render :global(code) {
  background: var(--black);
  color: var(--white-90);
}
.markdown-render :global(ol) {
  margin-left: 0.8rem;
}
.markdown-render :global(*:first-child) {
  margin-top: 0;
}
.markdown-render :global(*:last-child) {
  margin-bottom: 0;
}</style>
