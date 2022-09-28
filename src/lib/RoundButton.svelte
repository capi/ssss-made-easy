<script lang="ts">
	export let filled = true;
	export let fullWidth = false;
	export let addClasses = "";

	function isFilled() {
		return filled;
	}
	function hasBorder() {
		return !isFilled();
	}
</script>

<button
	on:click
	class="flex items-center justify-center gap-2 md:rounded-full rounded-lg md:px-5 md:py-3 px-3 py-3 md:text-lg text-sm font-medium text-white {addClasses}"
	class:bg-violet-500={isFilled()}
	class:border={hasBorder()}
	class:border-violet-500={!isFilled()}
	class:w-full={fullWidth}
>
	<slot />
</button>
