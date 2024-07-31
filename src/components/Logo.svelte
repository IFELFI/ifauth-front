<script lang="ts">
	import { PUBLIC_HOME_URL } from '$env/static/public';
	import { logoText, logoImg, logoContainer } from '$styles/logo.css';
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
	<a class={logoContainer} href={homeUrl}>
		<img src={logo} alt="logo" class={logoImg} />
		{#if size >= 6}
			<div class={logoText}>
				{text}
			</div>
		{/if}
	</a>
</div>
