<script lang="ts">
	import Logo from "$components/Logo.svelte";
  import Profile from "$components/Profile.svelte";
	import { profilePageColumnContainer, profilePageContainer, profilePageLogo } from "$styles/profile.css.js";

  export let data;

  console.log(data);
</script>

<div class={profilePageContainer}>
  <Logo text={'ifauth'} className={profilePageLogo} />
  {#if data?.profile}
    <div class={profilePageColumnContainer}>
      <Profile profile={data.profile} />
    </div>
  {:else}
    <p>Profile: Not found</p>
  {/if}
</div>