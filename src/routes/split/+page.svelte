<script lang="ts">
	import RoundButton from '$lib/RoundButton.svelte';
	import LabelWithDescription from '$lib/LabelWithDescription.svelte';
</script>

<div class="rounded-3xl bg-[#092540] p-20 text-center">
	<h2 class="text-5xl font-bold leading-tight text-white">Split a secret</h2>

	<div class="text-white w-fit mx-auto mt-6 flex flex-col">
		<div class="mb-6 p-5 bg-indigo-400 rounded-3xl">
			<LabelWithDescription
				target="secret"
				title="Secret:"
				description="This is the secret you want to share with others."
			/>
			<input id="Secret" type="text" class="text-black rounded-lg p-1 mt-2 w-full" />
		</div>

		<div class="mb-6 p-5 bg-indigo-400 rounded-3xl">
			<div>
				<LabelWithDescription
					target="shares"
					title="Shares:"
					description="The number of parts you want to split the secret into."
				/>
				<input id="shares" type="number" value="5" min="2" max="128" class="text-black rounded-lg p-1 mt-2 w-full" />
			</div>
			<div class="mt-3">
				<LabelWithDescription
					target="threshold"
					title="Threshold:"
					description="How many parts are required to restore the secret."
				/>
				<input id="threshold" type="number" value="3" min="2" max="128" class="text-black rounded-lg p-1 mt-2 w-full" />
			</div>
		</div>

		<div class="mb-6 p-5 bg-indigo-400 rounded-3xl">
			<LabelWithDescription target="token" title="Token:" description="Optional. A prefix for the generated tokens." />
			<input id="token" type="text" class="text-black rounded-lg p-1 mt-2 w-full" />
		</div>

		<div class="max-w-sm ">
			<RoundButton fullWidth={true}>Split the secret</RoundButton>
		</div>
	</div>
</div>
