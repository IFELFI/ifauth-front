<script lang="ts">
	import { logo } from "$styles/logo.css";
	import { getContext } from "svelte";

  export let text: string = 'IFELFI';
  export let className: string = '';

  const homeUrl = getContext<string>('home') ?? '/';
</script>

<div class={className}>
  <a href={homeUrl} class={logo}>
    {text}
  </a>
</div>