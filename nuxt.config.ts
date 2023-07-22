// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase"],
  router: {
    routes: [
      {
        name: "home",
        path: "/",
        component: "~/pages/index.vue",
      },
      {
        name: "register",
        path: "/register",
        component: "~/pages/register.vue",
      },
      {
        name: "notes",
        path: "/notes",
        component: "~/pages/notes.vue",
      },
    ],
  },
});
