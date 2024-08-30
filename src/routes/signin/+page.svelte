<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { error } from '$stores/client/error.store';
	import Card from '$components/Card.svelte';
	import { authButtonContainer, authForm, authFormButton, authFormInput, authFormLink, authGuide, authInfoContainer, authPath, formContainer, pageContainer } from '$styles/pages/auth.css.js';

	export let form;

	$: error.set(form?.error || '');
	$: redirect = $page.url.searchParams.get('redirect');
</script>

<div class={pageContainer}>
	<Card size={2}>
		<div slot="leftContent" class={authInfoContainer}>
			<div class={authPath}>sign in</div>
			<div class={authGuide}>Sign in with your email</div>
		</div>
		<div slot="rightContent" class={formContainer}>
			<form
				method="POST"
				action="?/local"
				class={authForm}
				use:enhance={() => {
					return async ({ update }) => {
						update({ reset: false });
					};
				}}
			>
				<input type="hidden" name="redirect" value={redirect} class={authFormInput} />
				<input type="text" placeholder="email" name="email" required class={authFormInput} />
				<input type="password" placeholder="password" name="password" required class={authFormInput}/>
				<div class={authButtonContainer}>
					<a href="signup" class={authFormLink}>signup</a>
					<button type="submit" class={authFormButton}>Login</button>
				</div>
			</form>
		</div>
	</Card>
</div>
