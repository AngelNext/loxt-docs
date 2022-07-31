import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	base: '/loxt-docs',
	integrations: [tailwind()],
});
