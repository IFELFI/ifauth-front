<script>
	import Logo from "./Logo.svelte";
</script>

<div class="auth-container">
  <div class="info-container">
    <Logo />
    <div class="info">
      <div class="path-container">
        <slot name="path" />
      </div>
      <div class="guide-container">
        <slot name="guide" />
      </div>
    </div>
  </div>
  <div class="form-container">
    <slot name="form"/>
  </div>
</div>

<style>
  .info-container {
    display: flex;
    flex-direction: column;
  }
  .path-container {
    font-size: 2.5rem;
  }
  .guide-container {
    font-size: 1rem;
  }
  .form-container {
    flex-direction: column;
    align-self: center;
  }
  .auth-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: clamp(400px, 50%, 1000px);
    height: 40vh;
    padding: 3rem;
    border-radius: 20px;
    background-color: white;
    justify-content: center;
  }
</style>