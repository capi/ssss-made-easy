<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	import QrCode from './QrCode.svelte';
	import { successToast } from './toasts/toasts';
	let showModal = false;

	export let secret = '';
	let qrcode: QrCode;

	function onShowQrCode() {
		showModal = true;
	}
	function onCopyQrCodeToClipboard(event: Event) {
		if (!qrcode.copyToClipboard()) {
			event.preventDefault();
		} else {
			successToast('Copied QR Code', 'QR Code has been successfully copied to clipboard', 2000);
			showModal = false;
		}
	}
</script>

<div class="sm:rounded-2xl rounded-lg bg-green-300 sm:px-2 px-1 sm:py-2 py-1 m-1 text-black flex">
	<div class="sm:p-2 p-1 truncate font-mono text-ellipsis flex-grow select-all">
		{secret}
	</div>
	<button class="sm:p-2 p-1 bg-blue-500" title="Show QR Code" on:click={onShowQrCode}>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
			/>
		</svg>
	</button>
</div>
{#if showModal}
	<Modal title="Share via QR Code" bind:open={showModal} autoclose={false}>
		<div class="text-center">
			<QrCode bind:this={qrcode} value={secret} width={320} margin={1} cssClass="mx-auto" />
			<div class="select-all font-mono">{secret}</div>
		</div>
		<svelte:fragment slot="footer">
			<Button on:click={onCopyQrCodeToClipboard}>Copy QR-Code to clipboad</Button>
			<Button color="alternative" on:click={() => (showModal = false)}>Close</Button>
		</svelte:fragment>
	</Modal>
{/if}
