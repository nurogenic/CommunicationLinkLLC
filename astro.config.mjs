import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://communicationlinkllc.pages.dev/',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  })
});