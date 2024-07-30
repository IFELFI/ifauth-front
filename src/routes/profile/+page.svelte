<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import Profile from '$components/Profile.svelte';
	import {
		profilePageColumnContainer,
		profilePageContainer,
	} from '$styles/profile.css';
	import { error } from '$stores/client/error.store';

	export let data;

	$: if (data?.error) {
		error.set(data.error);
	}
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
