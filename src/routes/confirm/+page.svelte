<script>
	import Link from '$components/buttons/link.svelte';
	import BaseLayout from '$components/layouts/base_layout.svelte';

	export let data;
</script>

<div class="flex-center full-size">
	<BaseLayout logo>
		<div class="flex-center flex-col px-10 gap-5">
			<h2 class="font-bold text-2xl">{data.body.message}</h2>
			<p>Thank you for confirming your email. You can now sign in with your email and password.</p>
			<Link to="signin" underline>Sign in</Link>
		</div>
	</BaseLayout>
</div>
