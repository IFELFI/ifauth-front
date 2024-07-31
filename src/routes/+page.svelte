<script lang="ts">
	import Card from '$components/Card.svelte';
	import {
		btn,
		buttonContainer,
		infoContainer,
		infoText,
		infoTitle,
		homeContainer
	} from '$styles/home.css.js';

	export let data;
</script>

<Card size={6}>
	<div class={homeContainer} slot="rightContent">
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
