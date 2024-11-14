<script lang="ts">
	import Logo from '../logo.svelte';

	export let logo: boolean = false;
	export let size: number = 60;
</script>

<div
	class="
    flex justify-center items-center flex-col
    border-4
    border-black rounded-full
  "
	style={`width: ${size * 10}px; height: ${size * 10}px;`}
>
	{#if logo}
		<Logo size={6} />
	{/if}
	<slot />
</div>
