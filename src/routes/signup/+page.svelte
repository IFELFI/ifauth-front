<script>
  import Auth from '$lib/components/Auth.svelte';
  import Alert from '$lib/components/Alert.svelte';

  export let form;
</script>

<Auth>
  <div slot="path">
    <p>Sign up</p>
  </div>

  <div slot="guide">
    <p>Sign up with your email</p>
  </div>

  <form slot="form" method="POST" action="?/local">
    <input type="text" placeholder="email" name="email" required />
    <input type="text" placeholder="username" name="username" required />
    <input type="password" placeholder="password" name="password" required />
    <input type="password" placeholder="confirm password" name="passwordConfirm" required />
    <div class="button-container">
      <a href="/signin">signin</a>
      <button type="submit">Sign up</button>  
    </div>
  </form>

  <div slot="alert">
    {#if form?.error}
      <Alert type="error" message={form.error} />
    {/if}
  </div>

</Auth>
