<script lang="ts">
	import html from '$lib/assets/contact.html?raw'
	import PageTitle from '$lib/PageTitle.svelte';
</script>

<PageTitle>Contact</PageTitle>

<div class="text-white w-fit max-w-xs sm:max-w-md mx-auto mt-6 flex flex-col text-left">
	<div class="p-5 bg-gray-600 rounded-3xl">
		{@html html}
	</div>
</div>
