<script lang="ts">
	import { writable } from 'svelte/store';
	import '../app.css';
  import { setContext } from 'svelte';
	import { page } from '$app/stores';
	import Alert from '$components/Alert.svelte';

  const language = writable<string>('ko');
  setContext('language', language);
</script>

<title>
  IFELFI
</title>

<main>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
</style>