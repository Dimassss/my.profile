import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    plugins:['@/plugins/antd'],
    typescript: {
      strict: true
    }
})
