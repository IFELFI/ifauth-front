<script lang="ts">
	import { enhance } from '$app/forms';
	import Card from '$components/Card.svelte';
	import { error } from '$stores/client/error.store';
	import {
		authInfoContainer,
		authPath,
		authGuide,
		formContainer,
		signupForm,
		authButtonContainer
	} from '$styles/auth.css';
	import { defaultButton, defaultLink } from '$styles/global/root.css.js';

	export let form;

	$: error.set(form?.error || '');
</script>

<Card size={2}>
	<div slot="leftContent" class={authInfoContainer}>
		<div class={authPath}>sign up</div>
		<div class={authGuide}>Sign up with your email</div>
	</div>
	<div slot="rightContent" class={formContainer}>
		<form method="POST" action="?/local" class={signupForm} use:enhance>
			<input type="text" placeholder="email" name="email" required />
			<input type="text" placeholder="username" name="username" required />
			<input type="password" placeholder="password" name="password" required />
			<input type="password" placeholder="confirm password" name="passwordConfirm" required />
			<div class={authButtonContainer}>
				<a href="signin" class={defaultLink}>signin</a>
				<button type="submit" class={defaultButton}>Sign up</button>
			</div>
		</form>
	</div>
</Card>
