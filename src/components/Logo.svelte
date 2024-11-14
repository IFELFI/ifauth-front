<script lang="ts">
	import { PUBLIC_HOME_URL } from '$env/static/public';
	import logo from '$lib/assets/logo.svg';

	export let text: string = 'ifelfi';
	export let size: number = 6;

	const homeUrl = PUBLIC_HOME_URL || '/';
</script>

<div
	style={`
	width: ${size}rem;
	font-size: ${size / 3}rem;
`}
>
	<a class={''} href={homeUrl}>
		<img src={logo} alt="logo" class={''} />
		{#if size >= 6}
			<div class={''}>
				{text}
			</div>
		{/if}
	</a>
</div>
