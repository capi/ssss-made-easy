<script>
	import Toasts from '$lib/toasts/Toasts.svelte';
import '../app.css';
	import NavBar from './NavBar.svelte';
</script>

<svelte:head>
	<title>Shamir's Secret Sharing Scheme Made Easy</title>
</svelte:head>

<Toasts />
<div class="relative min-h-screen mx-auto max-w-4xl min-w-4xl overflow-hidden bg-white dark:bg-black py-6 sm:py-12">
	<NavBar />
	<div class="rounded-3xl bg-[#092540] px-20 py-10 text-center">
		<slot />
	</div>
</div>
