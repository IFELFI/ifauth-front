<script lang="ts">
	import { card, cardContainer, cardLeft, miniCardLeft } from '$styles/card.css';
	import Logo from './Logo.svelte';

	export let size: number = 6;
	export let text: string = 'ifelfi';
</script>

<div class={cardContainer}>
	<div class={card}>
		<div class={size >= 6 ? `${cardLeft}` : `${miniCardLeft}`}>
			<Logo {text} {size} />
			<slot name="leftContent" />
		</div>
		<slot name="rightContent" />
	</div>
</div>
