<script>
	let { big, small } = $props();
</script>

<h1>
	<span class="big">{@html big}</span><br /><span class="small">{small}</span>
</h1>

<style>
	h1 {
		text-align: center;
		line-height: 1;
	}

	span.big {
		text-align: center;
		display: inline-block;
		font-size: clamp(var(--96px), 12vw, var(--144px));
		font-weight: bold;
		text-transform: uppercase;
	}

	span.small {
		font-size: var(--20px);
	}
</style>
