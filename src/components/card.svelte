<script lang="ts">
	import Logo from './logo.svelte';

	export let size: number = 6;
	export let text: string = 'ifelfi';
</script>

<div class={''}>
	<div class={''}>
		<div class={''}>
			<Logo {text} {size} />
			<slot name="leftContent" />
		</div>
		<slot name="rightContent" />
	</div>
</div>
