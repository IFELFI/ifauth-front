<script>
	import { enhance } from '$app/forms';
	import Auth from '$components/Auth.svelte';
	import { error } from '$stores/client/error.store';

	export let form;

	$: error.set(form?.error || '');
</script>

<Auth>
	<div slot="path">
		<p>Sign up</p>
	</div>

	<div slot="guide">
		<p>Sign up with your email</p>
	</div>

	<form slot="form" method="POST" action="?/local" use:enhance>
		<input type="text" placeholder="email" name="email" required />
		<input type="text" placeholder="username" name="username" required />
		<input type="password" placeholder="password" name="password" required />
		<input type="password" placeholder="confirm password" name="passwordConfirm" required />
		<div class="bottomContainer">
			<div class="buttonContainer">
				<a href="signin">signin</a>
				<button type="submit" class="btn">Sign up</button>
			</div>
		</div>
	</form>
</Auth>
