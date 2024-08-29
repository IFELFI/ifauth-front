<script lang="ts">
	import Alert from '$components/Alert.svelte';
	import { error } from '$stores/client/error.store';
	import { alertContainer } from '$styles/alert.css';
	import { pageContainer } from '$styles/global/container.css';
	import { whiteTheme } from '$styles/theme/white.css';
	import '../styles/global/root.css';

	let errorMessage = '';

	error.subscribe((value) => {
		errorMessage = value;
	});
</script>

<title> IFELFI </title>

<main class={`${pageContainer} ${whiteTheme}`}>
	<slot />
	{#if $error}
		<div class={alertContainer}>
			<Alert type="error" message={errorMessage} />
		</div>
	{/if}
</main>
