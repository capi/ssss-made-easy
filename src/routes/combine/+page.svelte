<script lang="ts">
	import LabelWithDescription from '$lib/LabelWithDescription.svelte';
	import RoundButton from '$lib/RoundButton.svelte';
  import SecretDisplay from '$lib/SecretDisplay.svelte';
	import { combineSecret } from '$lib/ssss-util';
	import { errorToast, successToast } from '$lib/toasts/toasts';

	let taShares: HTMLTextAreaElement;
	let txtShares: string = '';
	let shares: string[] = [];
	let secret = '';
	let warningMessages: string[] = [];
	let errorMessages: string[] = [];

	$: shares = txtShares.split('\n').filter((s) => s.trim().length > 0);

	function getValidationMessages() {
		let result: string[] = [];
		if (shares.length < 2) {
			result.push('Need at least 2 key shares.');
		} // if
		return result;
	}

	function validate() {
		warningMessages = getValidationMessages();
		errorMessages = [];
	}

	function onCombine() {
		validate();
		secret = "";
		if (shares.length >= 2) {
			try {
				secret = combineSecret(shares);
			} catch (ex) {
				errorMessages.push('' + ex);
			} // try/catch
		} // if
	}

	function onClear() {
		secret = "";
		txtShares = "";
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
		try {
			if (navigator.clipboard) {
				navigator.clipboard.writeText(secret);
				successToast("Copied", `Successfully copied the secret to the clipboard.`, 1500)
			} else {
				throw new Error('Your browser does not support the clipboard API.');
			}
		} catch (e) {
			errorToast('Could not copy', '' + e, 2500);
		}
	}
</script>

<h2 class="text-5xl font-bold leading-tight text-white">Combine shares of a secret</h2>

<div class="text-white w-96 mx-auto mt-6 flex flex-col text-left">
	<div class="p-5 bg-indigo-400 rounded-3xl">
		<LabelWithDescription
			target="Shares"
			title="Shares:"
			description="You need to enter the correct amount of key shares here. This information cannot be deduced from the shares themselves."
		/>
		<textarea
			bind:this={taShares}
			on:paste={onPaste}
			id="Shares"
			rows="4"
			class="block mt-2.5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mono whitespace-pre"
			placeholder="Enter one key share per line..."
			bind:value={txtShares}
		/>
	</div>

	<div class="mt-5">
		Please make sure your secret was actually created with a <em>threshold</em> of <strong>{shares.length}</strong>.<br
		/>
	</div>
	<div class="mt-2 mb-5 text-xs">
		If you supply <strong>too few <em>or</em> too many</strong> key shares, the reconstructed secret will be wrong. And there is no mathematical way to
		know. (<a href="/about/" class="underline">Learn more</a>)
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
		<SecretDisplay secret={secret} />

		<div class="max-w-sm mt-6">
			<RoundButton fullWidth={true} on:click={onCopySecret}>Copy to clipboard</RoundButton>
		</div>
		<div class="max-w-sm mt-2">
			<RoundButton fullWidth={true} filled={false} on:click={onClear}>Clear</RoundButton>
		</div>

		{/if}
</div>
