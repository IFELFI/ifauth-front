<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import Profile from '$components/Profile.svelte';
	import { profilePageColumnContainer, profilePageContainer } from '$styles/profile.css';

	export let data;
</script>

<div class={profilePageContainer}>
	<Logo text={'ifauth'} />
	{#if data?.profile}
		<div class={profilePageColumnContainer}>
			<Profile profile={data.profile} />
		</div>
	{:else}
		<p>Profile: Not found</p>
	{/if}
</div>
