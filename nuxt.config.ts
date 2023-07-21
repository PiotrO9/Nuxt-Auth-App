// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    routes: [
      {
        name: "home",
        path: "/",
        component: "~/pages/index.vue",
      },
      {
        name: "about",
        path: "/about",
        component: "~/pages/about.vue",
      },
    ],
  },
});
