<script>
  import '../app.css';
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