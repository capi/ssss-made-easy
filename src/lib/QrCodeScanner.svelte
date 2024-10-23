<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';
	import type { Html5QrcodeError, Html5QrcodeResult } from 'html5-qrcode/esm/core';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let html5QrcodeScanner: Html5QrcodeScanner | null;

	onMount(() => {
		showQrCodeScannerUi();
	});
	onDestroy(() => {
		close();
	});

	function onScanSuccess(decodedText: string, result: Html5QrcodeResult) {
		// handle the scanned code as you like, for example:
		dispatch("scanSuccess", result);
		close();
	}

	function close() {
		if (html5QrcodeScanner) {
			html5QrcodeScanner.clear();
			html5QrcodeScanner = null;
		}
		dispatch('close');
	}

	function onScanFailure(errorMessage: string, error: Html5QrcodeError) {
		// handle scan failure, usually better to ignore and keep scanning.
		// for example:
		//alert(`Code scan error = ${error}`);
	}

	function showQrCodeScannerUi() {
		if (html5QrcodeScanner) return; // already running
		html5QrcodeScanner = new Html5QrcodeScanner(
			'qrcode-reader',
			{
				rememberLastUsedCamera: true,
				fps: 3,
				aspectRatio: 1,
				qrbox: { width: 250, height: 250 },
				supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA, Html5QrcodeScanType.SCAN_TYPE_FILE]
			},
			/* verbose= */ false
		);
		html5QrcodeScanner.render(onScanSuccess, onScanFailure);
	}
</script>

<div class="fixed inset-0 w-full h-full bg-black bg-opacity-50">
	<div>
		<div
			class="fixed rounded-3xl inset-x-0 inset-y-0 m-auto sm:w-[512px] w-[360px] sm:h-[530px] h-[530px] bg-white text-black border border-solid flex flex-col items-center"
		>
			<div class="w-[320px] h-[430px] bg-slate-100 mt-3 mx-auto" id="qrcode-reader"></div>
			<Button class="absolute bottom-5 m-auto" on:click={close}>Close scanner</Button>
		</div>
	</div>
</div>
