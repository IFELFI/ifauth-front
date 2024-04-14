<script>
  import Auth from '$lib/auth.svelte';
</script>

<Auth>
  <div slot="path">
    <p>Sign in</p>
  </div>

  <div slot="guide">
    <p>Sign in with your email</p>
  </div>

  <form slot="form" method="POST" action="?/login">
    <input type="text" placeholder="email" name="email" />
    <input type="password" placeholder="password" name="password" />
    <div class="button-container">
      <a href="/signup">signup</a>
      <button type="submit">Login</button>  
    </div>
  </form>
</Auth>
