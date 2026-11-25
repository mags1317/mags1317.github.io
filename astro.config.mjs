import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://mags1317.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react()],
});
