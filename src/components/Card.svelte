<script lang='ts'>
	import { card, cardContainer, cardLeft } from "$styles/global/container.css";
	import Logo from './Logo.svelte';

  export let size: number = 6;
  export let text: string = 'ifelfi';
</script>

<div class={cardContainer}>
  <div class={card}>
    <div class={cardLeft} style={
      size >= 6
        ? 'align-items: center; justify-content: center;'
        : ''
    }>
      <Logo text={text} size={size} />
      <slot name='leftContent' />
    </div>
    <slot name='rightContent' />
  </div>
</div>