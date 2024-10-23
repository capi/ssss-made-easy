<script lang="ts">
	import RoundButton from '$lib/RoundButton.svelte';
	import Fa from 'svelte-fa';
	import { faClone } from '@fortawesome/free-solid-svg-icons';
	import { successToast, errorToast } from '$lib/toasts/toasts';
	import SecretDisplay from '$lib/SecretDisplay.svelte';
	import { copyTextToClipboard } from '$lib/clipboard-utils';

	interface Props {
		shares?: string[];
	}

	let { shares = [] }: Props = $props();

	function copyAll() {
		copyTextToClipboard(shares.join('\n'), (err) => {
			if (err) {
				errorToast('Could not copy', '' + err, 2000);
			} else {
				successToast('Copied', `Successfully copied ${shares.length} elements to the clipboard.`, 1500);
			}
		});
	}
</script>

<h3 class="text-3xl font-bold mt-6 mb-3 mx-auto leading-tight font-mono text-white">Shares of the Secret</h3>
<RoundButton addClasses="mb-3" on:click={copyAll}><Fa icon={faClone} class="mx-2" />Copy all to clipboard</RoundButton>
{#each shares as share}
	<SecretDisplay secret={share} />
{/each}
