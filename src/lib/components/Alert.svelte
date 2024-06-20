<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
	import { receive, send } from "../transition/alert";

  type alertType = "success" | "error" | "warning" | "info";

  export let type: alertType = "success";
  export let message = "default message";
  let isActivated = writable(false);

  onMount(() => {
    isActivated.set(true);
    setTimeout(() => {
      isActivated.set(false);
    }, 3000);
  });
</script>

<div>
  {#if $isActivated} 
      <div class={`alertCox ${type}`} in:receive={{key:1}} out:send={{key:1}}>
        <p>
          {message}
        </p>
      </div>
  {/if}
</div>

<style>
  .alertCox {
    padding: 1rem;
    background-color: grey;
    border-radius: 10px;
    margin: 1rem;
    /* border: 1px solid black; */
    color: white;
    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  }
  .success {
    background-color: lightgreen;
  }
  .error {
    background-color: lightcoral;
  }
  .warning {
    background-color: rgb(255, 154, 46);
  }
  .info {
    background-color: rgb(150, 217, 239);
  }
</style>