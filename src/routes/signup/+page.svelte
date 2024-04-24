<script>
  import Auth from '$lib/components/Auth.svelte';
</script>

<Auth>
  <div slot="path">
    <p>Sign up</p>
  </div>

  <div slot="guide">
    <p>Sign up with your email</p>
  </div>

  <form slot="form" method="POST">
    <input type="text" placeholder="email" />
    <input type="password" placeholder="password" />
    <div class="button-container">
      <a href="/signin">signin</a>
      <button type="submit">Sign up</button>  
    </div>
  </form>
</Auth>
