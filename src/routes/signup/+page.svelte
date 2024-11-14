<script lang="ts">
	import { enhance } from '$app/forms';
	import Card from '$components/Card.svelte';
	import { error } from '$stores/client/error.store';

	export let form;

	$: error.set(form?.error || '');
</script>

<div class={''}>
	<Card size={2}>
		<div slot="leftContent" class={''}>
			<div class={''}>sign up</div>
			<div class={''}>Sign up with your email</div>
		</div>
		<div slot="rightContent" class={''}>
			<form method="POST" action="?/local" class={''} use:enhance>
				<input type="text" placeholder="email" name="email" required class={''} />
				<input type="text" placeholder="username" name="username" required class={''} />
				<input type="password" placeholder="password" name="password" required class={''} />
				<input
					type="password"
					placeholder="confirm password"
					name="passwordConfirm"
					required
					class={''}
				/>
				<div class={''}>
					<a href={'signin'} class={''}>signin</a>
					<button type="submit" class={''}>Sign up</button>
				</div>
			</form>
		</div>
	</Card>
</div>
