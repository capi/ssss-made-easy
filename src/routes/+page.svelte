<script>
	import Arrow from '$lib/Arrow.svelte';
	import RoundButton from '$lib/RoundButton.svelte';
</script>


<h2 class="text-5xl font-bold leading-tight text-white">Easily split secrets using Shamir's Secret Sharing Scheme</h2>
<p class="mt-5 text-xl leading-8 text-white">
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
