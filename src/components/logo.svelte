<script lang="ts">
	import { PUBLIC_HOME_URL } from '$env/static/public';
	import logo from '$lib/assets/logo.svg';

	export let text: string = 'MandaCode';
	export let size: number = 6;

	const homeUrl = PUBLIC_HOME_URL || '/';
</script>

<a
	class="flex-center flex-col"
	href={homeUrl}
	style={`
    width: ${size}rem;
  `}
>
	<img src={logo} alt="logo" class={''} />
	{#if size >= 6}
		<div
			class="text-center"
			style={`
          font-size: ${size / 3}rem;
        `}
		>
			{text}
		</div>
	{/if}
</a>
