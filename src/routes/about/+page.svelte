<script lang="ts">
	import PageTitle from '$lib/PageTitle.svelte';
	import version from '$lib/assets/version.txt?raw'
</script>

<PageTitle>What's it all about?</PageTitle>

<div class="mt-5 sm:text-xl text-base leading-relaxed text-white text-left">
	<a href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing" class="underline" target="_blank">
		Shamir's Secret Sharing Scheme
	</a>
	is a proven mathematical algorithm to split a secret into several parts that can be distributed to multiple parties which
	need to cooperate in order for the secret to be restored.
</div>
<div class="mt-5 sm:text-xl text-base leading-relaxed text-white text-left">
	<ul class="list-disc list-outside">
		<li>
			You decide on the <em>number of parts</em> you want to split the secret in total (the
			<strong><em>shares</em></strong>).
		</li>
		<li>
			You decide on the <em>how many parts you need to know</em> (the <strong><em>threshold</em></strong>) to restore
			the secret.
		</li>
	</ul>
</div>
<div class="mt-5 sm:text-xl text-base leading-relaxed text-white text-left">
	The beauty of Shamir's Secret Sharing Scheme is that any number of shares below the threshold will not increase the
	possibility to reconstruct the secret. So if the threshold is 3 and you got access to two secrets, you still wouldn't
	know any more than if you'd only know one share.
</div>

<div class="grid sm:grid-cols-2 gap-3 mt-5">
	<div class="rounded-3xl p-5 bg-indigo-400 text-base leading-relaxed text-white text-left">
		<p>
			<u>A scenario:</u> You have a vault and want other people to be able to access the vault when you are not available
			(e.g. you are on vacation). But you also don't want a single person to be able to empty the vault unnoticed.
		</p>
		<p>
			So you decide to split the code into 5 parts, but at least 3 of them are required to get the code to the vault.
			That means, you define the number of shares as 5, and the threshold as 3.
		</p>
	</div>

	<div class="rounded-3xl p-5 bg-indigo-400 text-base leading-relaxed text-white text-left">
		A very interesting and funny explanation of Shamir's Secret Sharing Scheme is presented by the awesome
		<a href="https://en.wikipedia.org/wiki/Matt_Parker" target="_blank" class="underline"
			><strong>Matt Parker</strong></a
		>
		on his YouTube Channel
		<a href="https://www.youtube.com/user/standupmaths" target="_blank" class="underline">
			<strong>Stand-up Maths</strong></a
		>, called
		<a href="https://www.youtube.com/watch?v=K54ildEW9-Q" target="_blank" class="underline">
			<strong>How to keep an open secret using mathematics</strong></a
		>.
		<div class="mt-2">Watch it. It's awesome.</div>
	</div>
</div>
<div class="rounded-3xl p-5 bg-indigo-400 mt-5 text-base leading-relaxed text-white text-left">
	<strong>Everything on this site is performed in the browser. No data about the secrets is sent to the server!</strong>
</div>
<div class="mt-10 text-sm leading-relaxed text-white text-left">
	This site uses the <a href="https://www.npmjs.com/package/ssss-js" target="_blank" class="underline">
		<code>ssss-js</code>
	</a>
	package, which is released under GPLv3. It is mostly compatible with
	<a href="https://linux.die.net/man/1/ssss-split" target="_blank" class="underline">
		<code>ssss-split</code>
	</a>
	and
	<a href="https://linux.die.net/man/1/ssss-combine" target="_blank" class="underline">
		<code>ssss-combine</code>
	</a>
	commands for Linux, developed by B. Poettering (<a
		href="http://point-at-infinity.org/ssss/"
		target="_blank"
		class="underline">Homepage</a
	>).
</div>
<div class="mt-10 text-sm leading-relaxed text-gray-400 text-left">
	Build: {version}
</div>
