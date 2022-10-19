<script lang="ts">
	import version from '$lib/assets/version.txt?raw';

	export let classNames = 'mt-3 text-sm leading-relaxed';
</script>

<!-- License Info -->
<div class={classNames}>
	This software is released under the terms of the
	<a href="/gplv3.txt" target="_blank" rel="noopener noreferrer" class="underline"
		>GNU GENERAL PUBLIC LICENSE, Version 3</a
	>. Source code of this project is available from
	<a href="https://github.com/capi/ssss-made-easy" class="underline">Github</a>.
</div>
<!-- Build Info -->
<div class={classNames}>
	Build: {version}
</div>
