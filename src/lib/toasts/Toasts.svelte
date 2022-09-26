<script lang="ts">
	import { Toast } from 'flowbite-svelte';
	import { toasts, type ToastInfo } from './toasts';

	function getColorFor(t: ToastInfo) {
		switch (t.level) {
			case "success": return "green";
			case "warning": return "yellow";
			default:
				return "red";
		}
	}
</script>

{#if $toasts.length > 0}
	<div class="fixed left-1/2 -translate-x-1/2 z-[1000]">
		{#each $toasts as toast (toast.id)}
			<Toast color={getColorFor(toast)}>
				<svelte:fragment slot="icon">
					<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
			    <span class="sr-only">Check icon</span>
				</svelte:fragment>
				<div class:visible={toast.title && toast.title.length > 0} class="font-bold">{toast.title}</div>
				{toast.content}
			</Toast>
		{/each}
	</div>
{/if}
