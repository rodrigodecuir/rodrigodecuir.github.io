<script lang="ts">
	export let options: Array<{ text: string; url: string }>;
</script>

<a class="links" href="https://cumbancha.vercel.app/">Website</a>,
<a class="links" href="https://github.com/rodrigodecuir/cumbancha">Github</a>

<!--
    Pendiente:
    <a class="links" href="{url}">{text}</a>
-->

<style lang="postcss">
	.links {
		@apply text-[#95a1c8] underline decoration-[#a6b3df] decoration-[2px] underline-offset-[8px];
	}
</style>
