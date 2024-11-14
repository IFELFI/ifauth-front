<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import Profile from '$components/Profile.svelte';

	export let data;
</script>

<div class={''}>
	<Logo text={'ifauth'} />
	{#if data?.profile}
		<div class={''}>
			<Profile profile={data.profile} />
		</div>
	{:else}
		<p>Profile: Not found</p>
	{/if}
</div>
