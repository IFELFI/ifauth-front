<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$components/buttons/button.svelte';
	import Link from '$components/buttons/link.svelte';
	import BaseLayout from '$components/layouts/base_layout.svelte';
	import { error } from '$stores/client/error.store';

	export let form;

	$: error.set(form?.error || '');
</script>

<div class="flex-center full-size">
	<BaseLayout logo>
		<div class="flex-center flex-col gap-5">
			<div class="first-letter:uppercase">sign in with your email</div>
			<form
				method="POST"
				action="?/local"
				class="flex-center flex-col gap-5"
				use:enhance={() => {
					return async ({ update }) => {
						update({ reset: false });
					};
				}}
			>
				<input type="text" placeholder="email" name="email" required />
				<input type="text" placeholder="username" name="username" required />
				<input type="password" placeholder="password" name="password" required />
				<input
					type="password"
					placeholder="confirm password"
					name="passwordConfirm"
					required
					class="border-b border-gray-500"
				/>
				<div class="flex gap-5">
					<Link to="/signin" underline>Sign in</Link>
					<Button type="submit" weight="semibold" underline>Done</Button>
				</div>
			</form>
		</div>
	</BaseLayout>
</div>
