import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import mkcert from 'vite-plugin-mkcert';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit(), mkcert()],
	base: "https://www.shanedavisinc.com/portfolio/"
};

export default config;
