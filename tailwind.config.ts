import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import catppuccin from '@catppuccin/daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui],
	daisyui: {
		themes: [catppuccin('mocha', 'mauve')]
	}
} satisfies Config;
