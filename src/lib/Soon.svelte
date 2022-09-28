<script lang="ts">
	import Arrow from './Arrow.svelte';
	import PageTitle from './PageTitle.svelte';
	import RoundButton from './RoundButton.svelte';
</script>

<PageTitle>Soon!</PageTitle>
<p class="mt-5 text-xl leading-8 text-white">The content of this page will be available soon.</p>
<a href="/">
	<div class="mt-6 flex items-center justify-center gap-4">
		<RoundButton>Home <Arrow /></RoundButton>
	</div>
</a>
