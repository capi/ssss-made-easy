<script lang="ts">
	import html from '$lib/assets/contact.html?raw';
	import CopyrightNotice from '$lib/CopyrightNotice.svelte';
	import LicenseAndBuild from '$lib/LicenseAndBuild.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
</script>

<PageTitle>Contact</PageTitle>

<div class="text-white w-fit max-w-xs sm:max-w-md mx-auto mt-6 flex flex-col text-left">
	<div class="p-5 bg-gray-600 rounded-3xl mb-5">
		{@html html}
	</div>

	<LicenseAndBuild classNames="mt-3 text-sm leading-relaxed text-white text-left" />
	<hr class="my-5" />
	<div class="text-sm leading-relaxed text-white text-left">
		<CopyrightNotice />
	</div>
</div>
