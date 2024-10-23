<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<h2 class="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold leading-tight text-white">{@render children?.()}</h2>
