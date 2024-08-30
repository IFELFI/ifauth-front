<script lang="ts">
	import Card from '$components/Card.svelte';
	import {
		homeButton,
		buttonContainer,
		infoContainer,
		infoText,
		infoTitle,
		homeContainer,
		pageContainer
	} from '$styles/pages/home.css.js';

	export let data;
</script>

<div class={pageContainer}>
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
					<a href="profile" class={homeButton}>Profile</a>
					<a href="logout" class={homeButton} data-sveltekit-reload>Logout</a>
				</div>
			{:else}
				<div class={buttonContainer}>
					<a href="signin" class={homeButton} data-sveltekit-reload>Sign in</a>
					<a href="signup" class={homeButton} data-sveltekit-reload>Sign up</a>
				</div>
			{/if}
		</div>
	</Card>
</div>
