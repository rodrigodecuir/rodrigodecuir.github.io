<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import './fancy.css';
	export let title;
</script>

<Seo title="Rodrigo Decuir &mdash; {title}" description="adios mundo" />

<main class="markdown-body">
	<slot />
</main>
