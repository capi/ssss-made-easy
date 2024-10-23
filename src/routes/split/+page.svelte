<script lang="ts">
	import LabelWithDescription from '$lib/LabelWithDescription.svelte';
	import RoundButton from '$lib/RoundButton.svelte';
	import { splitSecret } from '$lib/ssss-util';

  import PageTitle from '$lib/PageTitle.svelte';
  import SharesSection from './SharesSection.svelte';

	let secret: string = $state('');
	let token: string = $state('');
	let numShares: number = $state(5);
	let threshold: number = $state(3);
	let shares: string[] = $state([]);
	let validationMessages: string[] = $state([]);

	function getValidationMessages(): string[] {
		let result: string[] = [];
		if (secret.length == 0) {
			result.push('Secret cannot be empty.');
		}
		if (secret.length > 128) {
			result.push('Secret can be maximum 128 characters.');
		}
		if (typeof numShares != 'number' || numShares <= 1 || numShares > 256) {
			result.push('Number of shares needs to be a number between 1 and 256.');
		}
		if (typeof threshold != 'number' || threshold <= 1 || threshold > numShares) {
			result.push('Threshold needs to be a number between 1 and the number of shares.');
		}

		return result;
	}

	function onSplit() {
		try {
			validationMessages = getValidationMessages();
			if (validationMessages.length == 0) {
				shares = splitSecret(secret, token, numShares, threshold);
			} else {
				shares = [];
			}
		} catch (ex) {
			alert(ex);
		}
	}
</script>

<PageTitle>Split a secret</PageTitle>

<div class="text-white sm:w-96 w-3/4 mx-auto mt-6 flex flex-col text-left">
	<div class="mb-6 p-5 bg-indigo-400 rounded-3xl">
		<LabelWithDescription
			target="secret"
			title="Secret:"
			description="This is the secret you want to share with others."
		/>
		<input id="Secret" type="text" bind:value={secret} class="text-black rounded-lg p-1 mt-2 w-full" />
	</div>

	<div class="mb-6 p-5 bg-indigo-400 rounded-3xl">
		<div>
			<LabelWithDescription
				target="shares"
				title="Shares:"
				description="The number of parts you want to split the secret into."
			/>
			<input
				id="shares"
				type="number"
				bind:value={numShares}
				min="2"
				max="128"
				class="text-black rounded-lg p-1 mt-2 w-full"
			/>
		</div>
		<div class="mt-3">
			<LabelWithDescription
				target="threshold"
				title="Threshold:"
				description="How many parts are required to restore the secret."
			/>
			<input
				id="threshold"
				type="number"
				bind:value={threshold}
				min="2"
				max="128"
				class="text-black rounded-lg p-1 mt-2 w-full"
			/>
		</div>
	</div>

	<div class="mb-6 p-5 bg-indigo-400 rounded-3xl">
		<LabelWithDescription target="token" title="Token:" description="Optional. A prefix for the generated tokens." />
		<input id="token" type="text" bind:value={token} class="text-black rounded-lg p-1 mt-2 w-full" />
	</div>

	{#if validationMessages.length > 0}
		<ul class="sm:rounded-3xl rounded-lg sm:px-10 px-10 sm:py-5 py-2 mb-5 bg-yellow-100 text-black text-left list-disc list-outside">
			{#each validationMessages as msg}
				<li>{msg}</li>
			{/each}
		</ul>
	{/if}

	<div class="max-w-sm ">
		<RoundButton fullWidth={true} on:click={onSplit}>Split the secret</RoundButton>
	</div>

	{#if shares && shares.length > 0}
		<SharesSection shares="{shares}" />
	{/if}
</div>
