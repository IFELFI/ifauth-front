<script>
  import Auth from '$components/Auth.svelte';
  import Alert from '$components/Alert.svelte';
  import { page } from '$app/stores';

  export let form;

  $: redirectUrl = $page.url.searchParams.get('redirect_url');
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
    <div class="bottomContainer">
      <div class="checkBoxContainer">
        <input type="checkbox" name="auto">
        <p >
          do you want to stay signed in?
        </p>
      </div>
      <div class="buttonContainer">
        <a href="signup">signup</a>
        <button type="submit" class="btn">Login</button>  
      </div>
    </div>
    <input type="hidden" name="redirectUrl" value={redirectUrl} />
  </form>

  <div slot="alert">
    {#if form?.error}
      <Alert type="error" message={form.error} />
    {/if}
  </div>
</Auth>
