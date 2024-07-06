<script>
	import { authContainer, formContainer, guideContainer, infoContainer, authLogo, logoContainer, pathContainer } from "$styles/auth.css";
	import Logo from "./Logo.svelte";
</script>

<div class={authContainer}>
  <div class={logoContainer}>
    <Logo className={authLogo}/>
  </div>
  <div class={infoContainer}>
      <div class={pathContainer}>
        <slot name="path" />
      </div>
      <div class={guideContainer}>
        <slot name="guide" />
      </div>
  </div>
  <div class={formContainer}>
    <slot name="form" />
  </div>
</div>
