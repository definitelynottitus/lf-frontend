import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogpost: 'storyblok/BlogPost',
      blogpostlist: 'storyblok/BlogPostList',
      page: 'storyblok/Page',
      employeelist: 'storyblok/Employee',
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'us' // optional,  or 'eu' (default)
    }
  }), tailwind({
    config: { applyBaseStyles: false },
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});