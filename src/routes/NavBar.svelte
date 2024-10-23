<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavUl } from 'flowbite-svelte';
	import NavItem from './NavItem.svelte';

	function isActive(pathname: string, path: string) {
		if (path == '/') {
			return pathname == path;
		}
		return pathname.indexOf(path) == 0;
	}
</script>

<Navbar  >
	{#snippet children({ hidden, toggle })}
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> SSSS-made-easy </span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavItem href="/">Home</NavItem>
			<NavItem href="/split/">Split</NavItem>
			<NavItem href="/combine/">Combine</NavItem>
			<NavItem href="/about/">About</NavItem>
			<NavItem href="/contact/">Contact</NavItem>
		</NavUl>
	{/snippet}
</Navbar>
