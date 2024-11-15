<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let weight: 'normal' | 'semibold' | 'bold' = 'normal';
	export let underline: boolean = false;
</script>

<button
	{type}
	class={`hover:text-zinc-500
  ${underline ? 'underline' : ''}
  ${weight === 'normal' ? 'font-normal' : ''}
  ${weight === 'semibold' ? 'font-semibold' : ''}
  ${weight === 'bold' ? 'font-bold' : ''}
  `}
>
	<slot />
</button>
