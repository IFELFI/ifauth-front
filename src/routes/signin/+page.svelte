<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { error } from '$stores/client/error.store';
	import Card from '$components/Card.svelte';
	import {
		loginForm,
		formContainer,
		authGuide,
		authInfoContainer,
		authPath,
		authButtonContainer
	} from '$styles/auth.css';

	export let form;

	$: error.set(form?.error || '');
	$: redirect = $page.url.searchParams.get('redirect');
</script>

<Card size={2}>
	<div slot="leftContent" class={authInfoContainer}>
		<div class={authPath}>sign in</div>
		<div class={authGuide}>Sign in with your email</div>
	</div>
	<div slot="rightContent" class={formContainer}>
		<form
			method="POST"
			action="?/local"
			class={loginForm}
			use:enhance={() => {
				return async ({ update }) => {
					update({ reset: false });
				};
			}}
		>
			<input type="hidden" name="redirect" value={redirect} />
			<input type="text" placeholder="email" name="email" required />
			<input type="password" placeholder="password" name="password" required />
			<div class={authButtonContainer}>
				<a href="signup">signup</a>
				<button type="submit" class="btn">Login</button>
			</div>
		</form>
	</div>
</Card>
