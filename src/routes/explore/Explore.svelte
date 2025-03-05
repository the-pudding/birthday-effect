<script>
	import * as Plot from "@observablehq/plot";
	import * as d3 from "d3";
	import rawData from "$data/day--all.json";

	let div = $state();
	let index = $state(0);
	// let data = $derived(rawData[index].days.filter((d) => Math.abs(d.day) <= 50));
	let data = $derived(rawData.filter((d) => Math.abs(d.day) <= 200));

	$effect(() => {
		// convert count to percent
		const total = d3.sum(data, (d) => d.count);
		// const c = data.map((d) => ({ ...d, count: (d.count / total) * 100 }));
		div?.firstChild?.remove(); // remove old chart, if any
		const chart = Plot.barY(data, { x: "day", y: "count" }).plot({
			x: { tickFormat: "" }
		});

		div?.append(chart); // add the new chart
	});
</script>

<section>
	<h1>Explore</h1>
	<div bind:this={div} role="img"></div>
	<input type="range" min="0" max={rawData.length - 1} bind:value={index} />
</section>

<style>
	section {
		max-width: 800px;
		margin: 0 auto;
		padding: 16px;
	}
</style>
