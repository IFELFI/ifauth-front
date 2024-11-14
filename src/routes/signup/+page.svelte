<script lang="ts">
	import { enhance } from '$app/forms';
	import Card from '$components/Card.svelte';
	import { error } from '$stores/client/error.store';
	import { authButtonContainer, authForm, authFormButton, authFormInputSmall, authFormLink, authGuide, authInfoContainer, authPath, formContainer, pageContainer } from '$styles/pages/auth.css.js';

	export let form;

	$: error.set(form?.error || '');
</script>

<div class={pageContainer}>
	<Card size={2}>
		<div slot="leftContent" class={authInfoContainer}>
			<div class={authPath}>sign up</div>
			<div class={authGuide}>Sign up with your email</div>
		</div>
		<div slot="rightContent" class={formContainer}>
			<form method="POST" action="?/local" class={authForm} use:enhance>
				<input type="text" placeholder="email" name="email" required class={authFormInputSmall} />
				<input type="text" placeholder="username" name="username" required class={authFormInputSmall} />
				<input type="password" placeholder="password" name="password" required class={authFormInputSmall}/>
				<input type="password" placeholder="confirm password" name="passwordConfirm" required class={authFormInputSmall}/>
				<div class={authButtonContainer}>
					<a href="signin" class={authFormLink}>signin</a>
					<button type="submit" class={authFormButton}>Sign up</button>
				</div>
			</form>
		</div>
	</Card>
</div>
