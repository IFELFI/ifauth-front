<script lang="ts">
  export let data;
</script>

<div>
  <p>Profile</p>
  {#if data?.profile}
    <p>email: {data.profile.email}</p>
    <p>username: {data.profile.nickname}</p>
  {:else}
    <p>Profile: Not found</p>
  {/if}
</div>