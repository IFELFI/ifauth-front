<script lang="ts">
	import { writable } from 'svelte/store';
	import '../app.css';
  import type { LayoutData } from './$types';
  import { setContext } from 'svelte';

  export let data;

  const language = writable<string>('ko');
	
  setContext('home', data.homeUrl);
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