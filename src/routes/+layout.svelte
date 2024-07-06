<script lang="ts">
	import '../app.css';
	import Alert from '$components/Alert.svelte';
	import { error } from '$stores/client/error.store';
	import { alertContainer } from '$styles/alert.css';

  let errorMessage = '';

  error.subscribe((value) => {
    errorMessage = value;
  });

</script>

<title>
  IFELFI
</title>

<main>
  <slot />
  {#if $error}
    <div class={alertContainer}>
      <Alert type="error" message={errorMessage} />
    </div>
  {/if}
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