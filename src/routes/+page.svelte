<script lang="ts">
  import Logo from '$components/Logo.svelte';
	import { btn, buttonContainer, infoContainer, infoText, infoTitle, mainContainer, mainLogo } from '$styles/main.css';
  import type { Profile } from '$types/data';

  export let data: { profile: Profile };
</script>

<div class={mainContainer}>
  <Logo text={'ifauth'} className={mainLogo}/>
  <div class={infoContainer}>
    <div class={infoTitle}>
      Manage your profile
    </div>
    <div class={infoText}>
      IFAUTH is an integrated authentication service for IFELFI
      <br />
      It provides a secure and reliable way to authenticate users
    </div>
  </div>
  {#if data.profile}
    <div class={buttonContainer}>
      <a href="profile" class={btn}>Profile</a>
      <a href="signout" class={btn}>Sign out</a>
    </div>
  {:else}
    <div class={buttonContainer}>
      <a href="signin" class={btn}>Sign in</a>
      <a href="signup" class={btn}>Sign up</a>
    </div>
  {/if}
</div>