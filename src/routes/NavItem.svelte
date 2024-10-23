<script lang="ts">
	import { run } from 'svelte/legacy';

  import { page } from '$app/stores';
  import { NavLi } from "flowbite-svelte";

	interface Props {
		href?: string;
		children?: import('svelte').Snippet;
	}

	let { href = "", children }: Props = $props();
  let active: boolean = $state(false);

	function isActive(path: string, href: string) {
		if (href == "/") {
			return href == path;
		}
		return path.indexOf(href) == 0;
	}
	run(() => {
		active = isActive($page.url.pathname, href);
	});

</script>

<NavLi {active} {href}>{@render children?.()}</NavLi>
