<script>
	import Arrow from '$lib/Arrow.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import RoundButton from '$lib/RoundButton.svelte';
</script>


<PageTitle>Easily split secrets using Shamir's Secret Sharing Scheme</PageTitle>
<p class="mt-5 sm:text-xl text-base leading-relaxed text-white">
	Use
	<a href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing" class="underline" target="_blank">
		Shamir's Secret Sharing Scheme
	</a>
	to split secrets into multiple parts, where a certain number of shares is required to recover the secret.
</p>
<div class="mt-6 flex items-center justify-center gap-4">
	<a href="/split/">
		<RoundButton>Split a secret <Arrow /></RoundButton>
	</a>
	<a href="/combine/">
		<RoundButton>Combine a secret <Arrow /></RoundButton>
	</a>
	<a href="/about/">
		<RoundButton filled={false}>Learn more <Arrow /></RoundButton>
	</a>
</div>
