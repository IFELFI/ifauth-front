<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import Profile from '$components/Profile.svelte';
	import type { MainPageData } from './$types';

  export let data: MainPageData;
</script>

<div class="container">
  <Logo size={'3rem'} text={'ifauth'} />
  <div class="info">
    <div class="info-title">
      Manage your profile
    </div>
    <div class="info-text">
      IFAUTH is an integrated authentication service for IFELFI
      <br />
      It provides a secure and reliable way to authenticate users
    </div>
  </div>
  <div class="column-container">
    <Profile profile={data.profile} />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    width: 90vw;
    min-height: 70vh;
    padding: 2rem;
  }
  .info {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info-title {
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: bold;
  }
  .column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>