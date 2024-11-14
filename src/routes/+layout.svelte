<script lang="ts">
	import '../app.css';
	import Alert from '$components/Alert.svelte';
	import { error } from '$stores/client/error.store';

	let errorMessage = '';

	error.subscribe((value) => {
		errorMessage = value;
	});
</script>

<title> IFELFI </title>

<main class="h-full w-full items-center justify-center">
	<slot />
	{#if $error}
		<div class="">
			<Alert message={errorMessage} />
		</div>
	{/if}
</main>
