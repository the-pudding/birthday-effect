<script>
	import { getContext } from "svelte";
	import Footer from "$components/Footer.svelte";
	import Hero from "$components/Hero.svelte";
	import CMS from "$components/helpers/CMS.svelte";

	const copy = getContext("copy");
	const { body } = copy;
	const components = { Hero };
	// const data = getContext("data");
</script>

<CMS {body} {components}></CMS>

<svelte:boundary onerror={(e) => console.error(e)}>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>

<style>
	:global(section) {
		padding: 0 16px;
	}

	:global(section > *) {
		display: block;
		margin: 32px auto;
		max-width: var(--col-width);
	}

	:global(section aside, section code) {
		background: var(--color-bg-alt);
		padding: 16px;
	}

	:global(span.emoji) {
		display: block;
		text-align: center;
		font-size: 2em;
	}

	:global(section code) {
		text-align: center;
	}

	:global(section span.center) {
		display: block;
		text-align: center;
	}

	:global(section span.emoji) {
		display: block;
		text-align: center;
		font-size: 2.5em;
		line-height: 1;
	}

	:global(section .big) {
		font-size: 2em;
	}
</style>
