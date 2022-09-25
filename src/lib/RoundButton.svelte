<script lang="ts">
	export let filled = true;
	export let fullWidth = false;

	function isFilled() {
		return filled;
	}
	function hasBorder() {
		return !isFilled();
	}
</script>

<button
	on:click
	class="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-lg font-medium text-white"
	class:bg-violet-500={isFilled()}
	class:border={hasBorder()}
	class:border-violet-500={!isFilled()}
	class:w-full={fullWidth}
>
	<slot />
</button>
