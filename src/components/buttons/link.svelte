<script lang="ts">
	export let to: string = '';
	export let reload: boolean = false;
</script>

<a href={to} class="font-semibold hover:text-zinc-500 underline" data-sveltekit-reload={reload}>
	<slot />
</a>
