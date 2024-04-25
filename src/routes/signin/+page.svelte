<script>
  import Auth from '$lib/components/Auth.svelte';
  import Alert from '$lib/components/Alert.svelte';
  import { page } from '$app/stores';

  export let form;

  const redirectUrl = $page.url.searchParams.get('redirectUrl');
</script>

<Auth>
  <div slot="path">
    <p>Sign in</p>
  </div>

  <div slot="guide">
    <p>Sign in with your email</p>
  </div>

  <form slot="form" method="POST" action="?/local">
    <input type="text" placeholder="email" name="email" required />
    <input type="password" placeholder="password" name="password" required />
    <div class="button-container">
      <a href="/signup">signup</a>
      <button type="submit">Login</button>  
    </div>
    <input type="hidden" name="redirectUrl" value={redirectUrl} />
  </form>

  <div slot="alert">
    {#if form?.error}
      <Alert type="error" message={form.error} />
    {/if}
  </div>
</Auth>
