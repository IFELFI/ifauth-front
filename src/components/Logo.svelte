<script lang="ts">
	import { PUBLIC_HOME_URL } from "$env/static/public";
	import { logo } from "$styles/logo.css";

  export let text: string = 'IFELFI';
  export let className: string = '';

  const homeUrl = PUBLIC_HOME_URL || '/';
</script>

<div class={className}>
  <a href={homeUrl} class={logo}>
    {text}
  </a>
</div>