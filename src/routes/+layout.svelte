<script>
	import Toasts from '$lib/toasts/Toasts.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
	import NavBar from './NavBar.svelte';
</script>

<svelte:head>
	<title>Shamir's Secret Sharing Scheme Made Easy</title>
</svelte:head>

<Toasts />
<div
	class="relative min-h-screen mx-auto lg:max-w-4xl md:max-w-3xl sm:max-w-2xl lg:min-w-4xl md:min-w-3xl sm:min-w-2xl min-w-[400px] overflow-hidden bg-white dark:bg-black py-6 sm:py-12"
>
	<NavBar />
	<div class="rounded-3xl bg-[#092540] md:px-20 sm:px-10 px-5 py-10 text-center">
		<slot />
	</div>
</div>
