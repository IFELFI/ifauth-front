<script lang="ts">
	import '../app.css';
	import { error } from '$stores/client/error.store';
	import { page } from '$app/stores';
	import Alert from '$components/alert.svelte';
	import Link from '$components/buttons/link.svelte';

	let errorMessage = '';

	error.subscribe((value) => {
		errorMessage = value;
	});
</script>

<title> MandaCode </title>

<main class="flex-center flex-col full-size items-center justify-center">
	<nav class="flex w-full justify-start p-3 fixed top-0">
		{#if $page.url.pathname !== '/'}
			<Link to="/" underline>Home</Link>
		{/if}
	</nav>
	<slot />
	<div class="flex w-full justify-end fixed bottom-0 p-3">
		{#if $error}
			<Alert message={errorMessage} />
		{/if}
	</div>
</main>
