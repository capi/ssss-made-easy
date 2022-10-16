<script lang="ts">
  import { page } from '$app/stores';
  import { NavLi } from "flowbite-svelte";

	export let href: string = "";
  let active: boolean = false;

	function isActive(path: string, href: string) {
		if (href == "/") {
			return href == path;
		}
		return path.indexOf(href) == 0;
	}
	$: active = isActive($page.url.pathname, href);

</script>

<NavLi {active} {href}><slot/></NavLi>
