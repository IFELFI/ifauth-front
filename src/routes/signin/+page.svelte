<script>
	import { redirect } from '@sveltejs/kit';
  import Auth from '$components/Auth.svelte';
  import Alert from '$components/Alert.svelte';
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
  import { auto } from './../../lib/api/auth';
	import { code } from '$stores/auth';
  import { PUBLIC_HOME_URL } from '$env/static/public';
	import { enhance } from '$app/forms';

  export let form;

  $: redirectUrl = $page.url.searchParams.get('redirect_url');

  onMount(async () => {
    const authCode = await auto.verify().then((response) => {
      if (response.status === 200) {
        const authCode = response.data.code;
        code.set(authCode);
        return authCode;
      }
    }).catch(err => {});
    if (authCode && redirectUrl) {
      redirect(302, `${redirectUrl}?code=${authCode}`);
    } else if (authCode) {
      redirect(302, PUBLIC_HOME_URL);
    }
  });
</script>

<Auth>
  <div slot="path">
    <p>Sign in</p>
  </div>

  <div slot="guide">
    <p>Sign in with your email</p>
  </div>

  <form slot="form" method="POST" action="?/local" use:enhance>
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
