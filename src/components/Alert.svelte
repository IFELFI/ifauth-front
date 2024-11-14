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

<div>
	{#if $isActivated}
		<div class={''} in:receive={{ key: 1 }} out:send={{ key: 1 }}>
			<p>
				{message}
			</p>
		</div>
	{/if}
</div>
