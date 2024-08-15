<script>
	import Logo from '$components/Logo.svelte';
	import { content, contentContainer } from '$styles/global/container.css';
	import { defaultButton } from '$styles/global/root.css';

	export let data;
</script>

<div class={contentContainer}>
	<div class={content}>
		<Logo text="ifauth" />
		<h2>{data.body.message}</h2>
		<p>Thank you for confirming your email. You can now sign in with your email and password.</p>
		<a href="signin">
			<button class={defaultButton}> Sign in </button>
		</a>
	</div>
</div>
