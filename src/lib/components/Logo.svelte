<script lang="ts">
	import { home } from "$lib/store";
	import { redirect } from "@sveltejs/kit";

  export let size: string = '2rem';
  export let text: string = 'IFELFI';
  let homeUrl: string = '/';
  home.subscribe((value) => {
    homeUrl = value;
  });

  const logoStyle = `
      font-size: ${size};
  `;
</script>

<div class="logo" style={logoStyle}>
  <a href={homeUrl} class="text">
    {text}
  </a>
</div>

<style>
  .logo {
    align-items: left;
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    font-weight: bold;
  }

  .text {
    background: linear-gradient(90deg, rgb(255, 115, 0), rgb(255, 230, 0));
    color: transparent;
    background-clip: text;
    text-transform: uppercase;
  }
</style>