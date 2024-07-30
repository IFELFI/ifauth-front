<script lang="ts">
	import Card from '$components/Card.svelte';
	import {
		btn,
		buttonContainer,
		infoContainer,
		infoText,
		infoTitle,
		mainContainer,
	} from '$styles/main.css';

	export let data;
</script>

<Card size={6}>
  <div class={mainContainer} slot="rightContent">
		<div class={infoContainer}>
      <div class={infoTitle}>Manage your profile</div>
			<div class={infoText}>
        IFAUTH is an integrated authentication service for IFELFI
				<br />
				It provides a secure and reliable way to authenticate users
			</div>
		</div>
		{#if data.valid}
    <div class={buttonContainer}>
      <a href="profile" class={btn}>Profile</a>
      <a href="logout" class={btn} data-sveltekit-reload>Logout</a>
    </div>
		{:else}
    <div class={buttonContainer}>
      <a href="signin" class={btn} data-sveltekit-reload>Sign in</a>
      <a href="signup" class={btn} data-sveltekit-reload>Sign up</a>
    </div>
		{/if}
	</div>
</Card>