// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/css/style.css"],
  features: {
    inlineStyles: false,  
  },
  app:{
    head:{
      title:"Advoza-IT Solution",
      meta: [
        { charset: "utf-8" },
        {
            name: "viewport",
            content:
                "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
            hid: "description",
            name: "description",
            content: "Jasa Pembuatan Website - Advoza-IT Solution",
        },
        {
            hid: "keywords",
            name: "keywords",
            content:
                "Jasa Pembuatan Website, Jasa Pembuatan Website Terbaik, Jasa Pembuatan Website Murah, Jasa Pembuatan Website Profesional, Jasa Pembuatan Website Jakarta, Jasa Pembuatan Website Terpercaya, Jasa Pembuatan Website Terbaik,jasa pembuatan website, jasa pembuatan website terbaik, jasa pembuatan website murah, jasa pembuatan website profesional, jasa pembuatan website jakarta, jasa pembuatan website terpercaya, jasa pembuatan website terbaik",
        },
        {
            hid: "author",
            name: "author",
            content:
                "Advoza-IT Solution",
        },
        { hid: "robots", name: "robots", content: "index, follow" },
        {
            hid: "googlebot",
            name: "googlebot",
            content: "index, follow",
        },
        { hid: "bingbot", name: "bingbot", content: "index, follow" },
        { hid: "yandex", name: "yandex", content: "index, follow" },
    ],
      link: [
        { rel: "stylesheet", href: "/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/css/font-awesome.min.css" },
        { rel: "stylesheet", href: "/css/themify-icons.css" },
        { rel: "stylesheet", href: "/css/elegant-icons.css" },
        { rel: "stylesheet", href: "/css/flaticon-set.css" },
        { rel: "stylesheet", href: "/css/magnific-popup.css" },
        { rel: "stylesheet", href: "/css/swiper-bundle.min.css" },
        { rel: "stylesheet", href: "/css/animate.css" },
        { rel: "stylesheet", href: "/css/validnavs.css" },
        { rel: "stylesheet", href: "/css/helper.css" },
        { rel: "stylesheet", href: "/css/unit-test.css" },
        { rel: "stylesheet", href: "/css/style.css" },
        { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
    ],
    }
  },

  modules: ["nuxt-aos"]
})