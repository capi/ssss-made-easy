<script lang="ts">
	interface Props {
		target?: string;
		title?: string;
		description?: string;
	}

	let { target = '', title = '', description = '' }: Props = $props();
</script>

<label for={target}>
	{#if title.length > 0}
	<div class="text-lg leading-tight font-medium text-white">{title}</div>
	{/if}
	{#if description.length > 0}
		<div class="text-xs">{description}</div>
	{/if}
</label>
