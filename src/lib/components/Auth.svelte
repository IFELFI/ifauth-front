<script>
	import Logo from "./Logo.svelte";
</script>

<div class="auth-container">
  <div class="info-container">
    <Logo size={'2rem'}/>
    <div class="info">
      <div class="path-container">
        <slot name="path" />
      </div>
      <div class="guide-container">
        <slot name="guide" />
      </div>
      <div class="alert-container">
        <slot name="alert" />
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
    min-height: 300px;
    padding: 3rem;
    border-radius: 20px;
    background-color: white;
    justify-content: center;
  }
  .alert-container {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>