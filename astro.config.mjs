import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
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
      recipes: 'storyblok/RecipeList',
      recipe: 'storyblok/Recipe',
      sponsor: 'storyblok/Sponsor',
      grid: 'storyblok/Grid',
      faq: 'storyblok/Faq',
      feature: 'storyblok/Feature',
      featureV1: 'storyblok/FeatureV1',
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'us' // optional,  or 'eu' (default)
    }
  }), tailwind(), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});