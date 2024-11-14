<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { error } from '$stores/client/error.store';
	import Card from '$components/Card.svelte';

	export let form;

	$: error.set(form?.error || '');
	$: redirect = $page.url.searchParams.get('redirect');
</script>

<div class={''}>
	<Card size={2}>
		<div slot="leftContent" class={''}>
			<div class={''}>sign in</div>
			<div class={''}>Sign in with your email</div>
		</div>
		<div slot="rightContent" class={''}>
			<form
				method="POST"
				action="?/local"
				class={''}
				use:enhance={() => {
					return async ({ update }) => {
						update({ reset: false });
					};
				}}
			>
				<input type="hidden" name="redirect" value={redirect} class={''} />
				<input type="text" placeholder="email" name="email" required class={''} />
				<input type="password" placeholder="password" name="password" required class={''} />
				<div class={''}>
					<a href="signup" class={''}>signup</a>
					<button type="submit" class={''}>Login</button>
				</div>
			</form>
		</div>
	</Card>
</div>
