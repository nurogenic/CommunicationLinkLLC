import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://communicationlinkllc.com/',
  integrations: [tailwind(), mdx(), sitemap()],
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true
    }
  })
});