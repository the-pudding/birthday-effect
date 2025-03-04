<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Explore from "./Explore.svelte";
</script>

{#if browser}
	<Explore></Explore>
{/if}
