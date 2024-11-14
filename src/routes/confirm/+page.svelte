<script>
	import Logo from '$components/Logo.svelte';

	export let data;
</script>

<div class={''}>
	<div class={''}>
		<Logo text="ifauth" />
		<h2>{data.body.message}</h2>
		<p>Thank you for confirming your email. You can now sign in with your email and password.</p>
		<a href="signin">
			<button class={''}> Sign in </button>
		</a>
	</div>
</div>
