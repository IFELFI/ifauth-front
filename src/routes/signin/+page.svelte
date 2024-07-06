<script>
	import { enhance } from '$app/forms';
	import Auth from '$components/Auth.svelte';
	import { page } from '$app/stores';
	import { error } from '$stores/client/error.store';

  export let form;

  $: error.set(form?.error || '')
  $: redirect= $page.url.searchParams.get('redirect');
</script>

<Auth>
  <div slot="path">
    <p>Sign in</p>
  </div>

  <div slot="guide">
    <p>Sign in with your email</p>
  </div>

  <form slot="form" method="POST" action="?/local" 
    use:enhance={() => {
      return async ({ update }) => {
        update({ reset: false });
      };
  }}>
    <input type="hidden" name="redirect" value={redirect} />
    <input type="text" placeholder="email" name="email" required />
    <input type="password" placeholder="password" name="password" required />
    <div class="bottomContainer">
      <div class="buttonContainer">
        <a href="signup">signup</a>
        <button type="submit" class="btn">Login</button>  
      </div>
    </div>
  </form>
</Auth>
