<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	interface Props {
		filled?: boolean;
		fullWidth?: boolean;
		addClasses?: string;
		children?: import('svelte').Snippet;
	}

	let {
		filled = true,
		fullWidth = false,
		addClasses = "",
		children
	}: Props = $props();

	function isFilled() {
		return filled;
	}
	function hasBorder() {
		return !isFilled();
	}
</script>

<button
	onclick={bubble('click')}
	class="flex items-center justify-center gap-2 md:rounded-full rounded-lg md:px-5 md:py-3 px-3 py-3 md:text-lg text-sm font-medium text-white {addClasses}"
	class:bg-violet-500={isFilled()}
	class:border={hasBorder()}
	class:border-violet-500={!isFilled()}
	class:w-full={fullWidth}
>
	{@render children?.()}
</button>
