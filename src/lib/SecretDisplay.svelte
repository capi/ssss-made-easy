<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	let showModal = false;

	export let secret = '';
</script>

<div class="rounded-2xl bg-green-300 px-2 py-2 m-1 text-black select-all flex">
	<div class="p-2 truncate font-mono text-ellipsis flex-grow">
		{secret}
	</div>
	<button class="p-2 bg-blue-500" title="Show QR Code" on:click={() => (showModal = true)}>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
			/>
		</svg>
	</button>
</div>
{#if showModal}
	<Modal title="Share via QR Code" bind:open={showModal}>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">TODO 1</p>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">TODO 2</p>
		<svelte:fragment slot="footer">
			<Button on:click={() => alert('Not yet implemented')}>Copy to clipboad</Button>
			<Button color="alternative">Close</Button>
		</svelte:fragment>
	</Modal>
{/if}
