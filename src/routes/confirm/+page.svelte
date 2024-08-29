<script>
	import Logo from '$components/Logo.svelte';
	import { content } from '$styles/card.css.js';
	import { defaultButton } from '$styles/global/root.css';
	import { pageContainer } from '$styles/pages/profile.css';

	export let data;
</script>

<div class={pageContainer}>
	<div class={content}>
		<Logo text="ifauth" />
		<h2>{data.body.message}</h2>
		<p>Thank you for confirming your email. You can now sign in with your email and password.</p>
		<a href="signin">
			<button class={defaultButton}> Sign in </button>
		</a>
	</div>
</div>
