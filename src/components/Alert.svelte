<script lang="ts">
	import { receive, send } from "$lib/transition/alert";
	import { error, info, success, warning } from "$styles/alert.css";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  type alertType = "success" | "error" | "warning" | "info";

  export let type: alertType = "success";
  export let message = "default message";
  let isActivated = writable(false);
  let className = success;

  $: className = {
    success,
    error,
    warning,
    info,
  }[type];

  onMount(() => {
    isActivated.set(true);
    setTimeout(() => {
      isActivated.set(false);
    }, 3000);
  });
</script>

<div>
  {#if $isActivated} 
      <div class={className} in:receive={{key:1}} out:send={{key:1}}>
        <p>
          {message}
        </p>
      </div>
  {/if}
</div>
