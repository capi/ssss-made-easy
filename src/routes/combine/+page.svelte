<script lang="ts">
	import { run } from 'svelte/legacy';

	import { copyTextToClipboard } from '$lib/clipboard-utils';
	import LabelWithDescription from '$lib/LabelWithDescription.svelte';
  import PageTitle from '$lib/PageTitle.svelte';
	import QrCodeScanner from '$lib/QrCodeScanner.svelte';
	import RoundButton from '$lib/RoundButton.svelte';
	import SecretDisplay from '$lib/SecretDisplay.svelte';
	import { combineSecret } from '$lib/ssss-util';
	import { errorToast, successToast } from '$lib/toasts/toasts';

	let taShares: HTMLTextAreaElement = $state();
	let txtShares: string = $state('');
	let shares: string[] = $state([]);
	let secret = $state('');
	let warningMessages: string[] = $state([]);
	let errorMessages: string[] = $state([]);
	let showQrCodeScanner = $state(false);

	run(() => {
		shares = txtShares.split('\n').filter((s) => s.trim().length > 0);
	});

	function onScanQrCode() {
		showQrCodeScanner = true;
	}

	function onQrScanSuccess(event: CustomEvent) {
		if (txtShares.length > 0) txtShares += "\n";
		txtShares += event.detail.decodedText;
	}

	function getValidationMessages() {
		let result: string[] = [];
		if (shares.length < 2) {
			result.push('Need at least 2 key shares.');
		}
		return result;
	}

	function validate() {
		warningMessages = getValidationMessages();
		errorMessages = [];
	}

	function onCombine() {
		validate();
		secret = '';
		if (shares.length >= 2) {
			try {
				secret = combineSecret(shares);
			} catch (ex) {
				errorMessages.push('' + ex);
			} // try/catch
		} // if
	}

	function onClear() {
		secret = '';
		txtShares = '';
	}

	function onPaste() {
		if (taShares && txtShares.trim().length == 0) {
			setTimeout(() => {
				taShares.scrollLeft = 0;
				taShares.scrollTop = 0;
			}, 1);
		}
	}

	function onCopySecret() {
		copyTextToClipboard(secret, (err) => {
			if (err) {
				errorToast('Could not copy', '' + err, 2000);
			} else {
				successToast('Copied', `Copied the decoded secret to the clipboard`, 1500);
			}
		});
	}
</script>

<PageTitle>Combine shares of a secret</PageTitle>

<div class="text-white w-96 mx-auto mt-6 flex flex-col text-left">
	<div class="p-5 bg-indigo-400 rounded-3xl">
		<LabelWithDescription
			target="Shares"
			title="Shares:"
			description="You need to enter the correct amount of key shares here. This information cannot be deduced from the shares themselves."
		/>
		<textarea
			bind:this={taShares}
			onpaste={onPaste}
			id="Shares"
			rows="4"
			class="block mt-2.5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mono whitespace-pre"
			placeholder="Enter one key share per line..."
			bind:value={txtShares}
		></textarea>
	</div>

	<div class="max-w-sm mt-2">
		<RoundButton fullWidth={true} on:click={onScanQrCode}>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
				/>
			</svg>
			Scan QR Code
		</RoundButton>
		{#if showQrCodeScanner}
			<QrCodeScanner on:close={() => showQrCodeScanner = false} on:scanSuccess={onQrScanSuccess} />
		{/if}
	</div>

	<div class="mt-5">
		Please make sure your secret was actually created with a <em>threshold</em> of <strong>{shares.length}</strong>.<br
		/>
	</div>
	<div class="mt-2 mb-5 text-xs">
		If you supply <strong>too few <em>or</em> too many</strong> key shares, the reconstructed secret will be wrong. And
		there is no mathematical way to know. (<a href="/about/" class="underline">Learn more</a>)
	</div>

	{#if errorMessages.length > 0}
		<ul class="rounded-3xl px-10 py-5 mb-5 bg-red-500 text-black text-left list-disc list-outside">
			{#each errorMessages as msg}
				<li>{msg}</li>
			{/each}
		</ul>
	{/if}
	{#if warningMessages.length > 0}
		<ul class="rounded-3xl px-10 py-5 mb-5 bg-yellow-100 text-black text-left list-disc list-outside">
			{#each warningMessages as msg}
				<li>{msg}</li>
			{/each}
		</ul>
	{/if}

	<div class="max-w-sm">
		<RoundButton fullWidth={true} on:click={onCombine}>Combine</RoundButton>
	</div>

	{#if secret.length > 0}
		<h3 class="text-3xl font-bold mt-6 mb-3 mx-auto leading-tight text-white">Reconstructed secret</h3>
		<SecretDisplay {secret} />

		<div class="max-w-sm mt-6">
			<RoundButton fullWidth={true} on:click={onCopySecret}>Copy to clipboard</RoundButton>
		</div>
		<div class="max-w-sm mt-2">
			<RoundButton fullWidth={true} filled={false} on:click={onClear}>Clear</RoundButton>
		</div>
	{/if}
</div>
