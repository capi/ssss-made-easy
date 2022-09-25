<script lang="ts">
	import RoundButton from '$lib/RoundButton.svelte';
	import Fa from 'svelte-fa';
	import { faClone } from '@fortawesome/free-solid-svg-icons';

	export let shares: string[] = [];

	const defaultCopyText = "Copy all to clipboard"
	let copyText = defaultCopyText;

	function copyAll() {
		navigator.clipboard.writeText(shares.join("\n"));
		copyText = "Copied to clipboard";
		setTimeout(() => copyText = defaultCopyText, 1000)
	}

</script>

<h3 class="text-3xl font-bold mt-6 mb-3 mx-auto leading-tight text-white">Shares of the Secret</h3>
<RoundButton addClasses="mb-3" on:click="{copyAll}"><Fa icon={faClone} class="mx-2" /> {copyText} </RoundButton>
{#each shares as share}
	<div class="px-2 py-2 m-1 bg-green-300 text-black select-all truncate text-ellipsis">
		{share}
	</div>
{/each}
