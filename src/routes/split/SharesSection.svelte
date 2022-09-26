<script lang="ts">
	import RoundButton from '$lib/RoundButton.svelte';
	import Fa from 'svelte-fa';
	import { faClone } from '@fortawesome/free-solid-svg-icons';
	import { successToast, errorToast } from '$lib/toasts/toasts';

	export let shares: string[] = [];

	function copyAll() {
		try {
			if (navigator.clipboard) {
				navigator.clipboard.writeText(shares.join('\n'));
				successToast("Copied", `Successfully copied ${shares.length} elements to the clipboard.`, 1500)
			} else {
				throw new Error('Your browser does not support the clipboard API.');
			}
		} catch (e) {
			errorToast('Could not copy', '' + e, 2500);
		}
	}
</script>

<h3 class="text-3xl font-bold mt-6 mb-3 mx-auto leading-tight text-white">Shares of the Secret</h3>
<RoundButton addClasses="mb-3" on:click={copyAll}><Fa icon={faClone} class="mx-2" />Copy all to clipboard</RoundButton>
{#each shares as share}
	<div class="px-2 py-2 m-1 bg-green-300 text-black select-all truncate text-ellipsis">
		{share}
	</div>
{/each}
