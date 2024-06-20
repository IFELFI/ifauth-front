<script>
	import Logo from "./Logo.svelte";
</script>

<div class="authContainer">
  <div class="infoContainer">
    <Logo size={'2rem'}/>
    <div class="info">
      <div class="pathContainer">
        <slot name="path" />
      </div>
      <div class="guideContainer">
        <slot name="guide" />
      </div>
      <div class="alertContainer">
        <slot name="alert" />
      </div>
    </div>
  </div>
  <div class="formContainer">
    <slot name="form"/>
  </div>
</div>

<style>
  .infoContainer {
    display: flex;
    flex-direction: column;
  }
  .pathContainer {
    font-size: 2.5rem;
  }
  .guideContainer {
    font-size: 1rem;
  }
  .formContainer {
    flex-direction: column;
    align-self: center;
  }
  .authContainer {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    width: clamp(400px, 50%, 1000px);
    min-height: 300px;
    padding: 3rem;
    border-radius: 20px;
    background-color: white;
    justify-content: center;
  }
  .alertContainer {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>