<script lang="ts">
	export let to: string = '';
	export let reload: boolean = false;
	export let weight: 'normal' | 'semibold' | 'bold' = 'normal';
	export let underline: boolean = false;
</script>

<a
	href={to}
	class={`hover:text-zinc-500
  ${underline ? 'underline' : ''}
  ${weight === 'normal' ? 'font-normal' : ''}
  ${weight === 'semibold' ? 'font-semibold' : ''}
  ${weight === 'bold' ? 'font-bold' : ''}
  `}
	data-sveltekit-reload={reload}
>
	<slot />
</a>
