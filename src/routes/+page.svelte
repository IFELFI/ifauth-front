<script lang="ts">
	import Card from '$components/Card.svelte';
	import 'globals';

	export let data;
</script>

<div class={''}>
	<Card size={6}>
		<div class={''} slot="rightContent">
			<div class={''}>
				<div class={''}>Manage your profile</div>
				<div class={''}>
					IFAUTH is an integrated authentication service for IFELFI
					<br />
					It provides a secure and reliable way to authenticate users
				</div>
			</div>
			{#if data.valid}
				<div class={''}>
					<a href={'profile'} class={''}>Profile</a>
					<a href={'logout'} class={''} data-sveltekit-reload>Logout</a>
				</div>
			{:else}
				<div class={''}>
					<a href={'signin'} class={''} data-sveltekit-reload>Sign in</a>
					<a href={'signup'} class={''} data-sveltekit-reload>Sign up</a>
				</div>
			{/if}
		</div>
	</Card>
</div>
