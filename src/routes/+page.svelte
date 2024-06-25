<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import { btn, buttonContainer, infoContainer, infoText, infoTitle, mainContainer, mainLogo } from '$styles/main.css';
  
  export let data;
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
  {#if data?.valid}
    <div class={buttonContainer}>
      <a href="profile" class={btn}>Profile</a>
      <a href="logout" class={btn}>Logout</a>
    </div>
  {:else}
    <div class={buttonContainer}>
      <a href="signin" class={btn}>Sign in</a>
      <a href="signup" class={btn}>Sign up</a>
    </div>
  {/if}
</div>