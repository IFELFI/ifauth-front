<script>
	import {
		authCard,
		formContainer,
		guideContainer,
		infoContainer,
		authLogo,
		logoContainer,
		pathContainer
	} from '$styles/auth.css';
	import Logo from './Logo.svelte';
</script>

<div class={authCard}>
	<div class={logoContainer}>
		<Logo />
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
