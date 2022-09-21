<script>
	import Arrow from '$lib/Arrow.svelte';
	import RoundButton from './RoundButton.svelte';
</script>

<div class="mx-auto max-w-4xl rounded-3xl bg-[#092540] p-20 text-center">
	<h2 class="text-5xl font-bold leading-tight text-white">Easily split secrets using Shamir's Secret Sharing Scheme</h2>
	<p class="mt-5 text-xl leading-8 text-white">
		Use
		<a href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing" target="_blank">Shamir's Secret Sharing Scheme</a>
		to split secrets into multiple parts, where a certain number of shares is required to recover the secret.
	</p>
	<div class="mt-6 flex items-center justify-center gap-4">
		<RoundButton>
			Split a secret
			<Arrow />
		</RoundButton>
		<RoundButton>
			Combine a shared secret
			<Arrow />
		</RoundButton>
		<RoundButton filled={false}>
			Learn more
			<Arrow />
		</RoundButton>
	</div>
</div>
