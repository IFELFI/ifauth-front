<script lang="ts">
	import type { profile } from "$lib/api/interfaces/data.interface";
	import Loading from "./Loading.svelte";
  import defaultImage from "$lib/assets/default.svg";
	import { getContext } from "svelte";
		import type { Writable } from "svelte/store";

  export let profile: profile | null;

  console.log(profile);

  $: language = getContext<Writable<string>>('language');
</script>

{#if profile}
<div class="profileContainer">
  <div class='cardContainer'>
    <div class="imageContainer">
      <img src={profile.imageUrl ?? defaultImage} alt="Not Found"/>
      <div class="middle">
        <div class="text">change image</div>
      </div>
    </div>
    <div class="infoContainer">
      <div class="info-title">
        nickname
      </div>
      <div class="infoText">
        {profile.nickname}
      </div>
      <div class="infoTitle">
        email
      </div>
      <div class="infoText">
        {profile.email}
      </div>
      <div class="infoTitle">
        joined
      </div>
      <div class="infoText">
        {new Intl.DateTimeFormat($language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(Date.parse(profile.joinDate))}
      </div>
      <div class="infoTitle">
        updated
      </div>
      <div class="infoText">
        {new Intl.DateTimeFormat($language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(Date.parse(profile.updateDate))}
      </div>
    </div>
  </div>
  <div>
    <button type="button" class="btn">
      Edit Profile
    </button>
  </div>
</div>
  {:else}
  <Loading />
{/if}

<style>
  .profileContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .cardContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 4rem;
    margin-bottom: 2rem;
  }

  .imageContainer {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .imageContainer img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .imageContainer:hover img {
    cursor: pointer;
    filter: brightness(0.8);
  }

  .imageContainer:hover .middle {
    opacity: 1;
  }

  .text {
    opacity: 0.8;
    padding: 10px;
    border-radius: 20px;
    font-size: 1rem;
    color: white;
    background-color: var(--button-color);
  }

  .infoContainer {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    width: 80%;
    row-gap: 1rem;
  }

  .infoTitle {
    font-size: 1.25rem;
    text-transform: capitalize;
    margin-right: 1rem;
  }

  .infoTitle::after {
    content: ':';
  }

  .infoText {
    font-size: 0.8rem;
    border: 1px solid gray;
    align-content: center;
    width: 100%;
    padding-left: 0.5rem;
  }
</style>