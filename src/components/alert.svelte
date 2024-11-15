<script lang="ts">
	import { receive, send } from '$lib/transition/alert';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let message = 'default message';
	let isActivated = writable(false);

	onMount(() => {
		isActivated.set(true);
		setTimeout(() => {
			isActivated.set(false);
		}, 3000);
	});
</script>

{#if $isActivated}
	<div
		class="flex rounded-lg max-w-md p-8 bg-rose-400"
		in:receive={{ key: 1 }}
		out:send={{ key: 1 }}
	>
		<p class="text-white text-center text-ellipsis overflow-hidden">
			{message}
		</p>
	</div>
{/if}
