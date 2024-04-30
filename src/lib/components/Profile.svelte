<script lang="ts">
	import type { profile } from "$lib/api/interfaces/data.interface";
	import Loading from "./Loading.svelte";
  import defaultImage from "$lib/assets/default.svg";
	import { lang } from "$lib/store";

  export let profile: profile | null;
  export let language: string = 'en';
  $: lang.subscribe((value) => {
    language = value;
  });
</script>

{#if profile}
<div class="profile-container">
  <div class='card-container'>
    <div class="image-container">
      <img src={profile.imageUrl ?? defaultImage} alt="Not Found"/>
      <div class="middle">
        <div class="text">change image</div>
      </div>
    </div>
    <div class="info-container">
      <div class="info-title">
        nickname
      </div>
      <div class="info-text">
        {profile.nickname}
      </div>
      <div class="info-title">
        email
      </div>
      <div class="info-text">
        {profile.email}
      </div>
      <div class="info-title">
        joined
      </div>
      <div class="info-text">
        {new Intl.DateTimeFormat(language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(profile.joinDate)}
      </div>
      <div class="info-title">
        updated
      </div>
      <div class="info-text">
        {new Intl.DateTimeFormat(language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(profile.updateDate)}
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
  .profile-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .card-container {
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

  .image-container {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .image-container img {
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

  .image-container:hover img {
    cursor: pointer;
    filter: brightness(0.8);
  }

  .image-container:hover .middle {
    opacity: 1;
  }

  .text{
    opacity: 0.8;
    padding: 10px;
    border-radius: 20px;
    font-size: 1rem;
    color: white;
    background-color: var(--button-color);
  }

  .info-container {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    width: 80%;
    row-gap: 1rem;
  }

  .info-title {
    font-size: 1.25rem;
    text-transform: capitalize;
    margin-right: 1rem;
  }

  .info-title::after {
    content: ':';
  }

  .info-text {
    font-size: 0.8rem;
    text-transform: capitalize;
    border: 1px solid gray;
    align-content: center;
    width: 100%;
    padding-left: 0.5rem;
  }
</style>