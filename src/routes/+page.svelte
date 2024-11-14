<script lang="ts">
	import BaseLayout from '$components/layouts/base_layout.svelte';
	import Link from '$components/buttons/link.svelte';

	export let data;
</script>

<div class="flex-center full-size justify-center items-center">
	<BaseLayout logo>
		<div class="flex-center flex-col pt-5 gap-5">
			<div class="flex justify-start flex-col">
				<p>
					Sign in or sign up to try our services
					<br />
					MandaCode provides various services for you
				</p>
			</div>
			<div class="flex-center gap-2">
				{#if data.valid}
					<Link to="/profile">Profile</Link>
					<Link to="/logout" reload>Logout</Link>
				{:else}
					<Link to="/signin" reload>Sign in</Link>
					<Link to="/signup" reload>Sign up</Link>
				{/if}
			</div>
		</div>
	</BaseLayout>
</div>
