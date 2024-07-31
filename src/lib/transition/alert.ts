import { quadInOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 300),

	fallback(node) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quadInOut,
			css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
		};
	}
});
