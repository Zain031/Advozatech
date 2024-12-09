# Fix Script dan CSS tidak terdeteksi di Dynamis URL
**CSS:**
Berikan ./ di href css di bagian head. (Give "./" on href css in nuxt.config.ts)
> Before
```ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    app:{
        ....
        head:{
        link: [
            { rel: "stylesheet", href: "css/bootstrap.min.css" },
            { rel: "stylesheet", href: "css/font-awesome.min.css" },
            { rel: "stylesheet", href: "css/themify-icons.css" },
            { rel: "stylesheet", href: "css/elegant-icons.css" },
            { rel: "stylesheet", href: "css/flaticon-set.css" },
            { rel: "stylesheet", href: "css/magnific-popup.css" },
            { rel: "stylesheet", href: "css/swiper-bundle.min.css" },
            { rel: "stylesheet", href: "css/animate.css" },
            { rel: "stylesheet", href: "css/validnavs.css" },
            { rel: "stylesheet", href: "css/helper.css" },
            { rel: "stylesheet", href: "css/unit-test.css" },
            { rel: "stylesheet", href: "css/style.css" },
            { rel: "stylesheet", href: "style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
        ],
        }
        ....
    }
})
```
> After
```ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    app:{
        ...
        head:{
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
            { rel: "stylesheet", href: "/style.css" },
            { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" }
        ],
        }
        ....
    }
})
```
**JS**
Biasanya Struktur File pada Nuxt seperti ini
```txt
pages
|
-project
    |
    -index.vue
    -[id].vue
```
[id].vue adalah file vue yang menangani dynamic url. dari sini ada beberapa case dimana saat mengimpor script file js, dia tidak terdeteksi.
```vue
// pages/project/index.vue
<template>
....
        <Script src="js/jquery-3.6.0.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/jquery.appear.js"></Script>
        <Script src="js/jquery.easing.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/modernizr.custom.13711.js"></Script>
        <Script src="js/swiper-bundle.min.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/progress-bar.min.js"></Script>
        <Script src="js/circle-progress.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/imagesloaded.pkgd.min.js"></Script>
        <Script src="js/jquery.nice-select.min.js"></Script>
        <Script src="js/count-to.js"></Script>
        <Script src="js/jquery.scrolla.min.js"></Script>
        <Script src="js/YTPlayer.min.js"></Script>
        <Script src="js/TweenMax.min.js"></Script>
        <Script src="js/validnavs.js"></Script>
        <Script src="js/main.js"></Script>
</template>
```
File javascript dapat diimport tanpa warning namun,
```vue
// pages/project/[id].vue
<template>
....
        <Script src="js/jquery-3.6.0.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/jquery.appear.js"></Script>
        <Script src="js/jquery.easing.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/modernizr.custom.13711.js"></Script>
        <Script src="js/swiper-bundle.min.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/progress-bar.min.js"></Script>
        <Script src="js/circle-progress.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/imagesloaded.pkgd.min.js"></Script>
        <Script src="js/jquery.nice-select.min.js"></Script>
        <Script src="js/count-to.js"></Script>
        <Script src="js/jquery.scrolla.min.js"></Script>
        <Script src="js/YTPlayer.min.js"></Script>
        <Script src="js/TweenMax.min.js"></Script>
        <Script src="js/validnavs.js"></Script>
        <Script src="js/main.js"></Script>
</template>
```
Tidak dapat diimport dengan warning 
>  WARN  [Vue Router warn]: No match found for location with path "/project/js/circle-progress.js"

Ini disebabkan file /project/[id].vue berada di folder "/project" , sedangkan /project/index.vue berada di folder "/" alias root (atau public jika di mode development).

Cara penanganannya adalah dengan naik satu tingkat untuk mendapatkan lokasi js nya.

> Before
```vue
// pages/project/[id].vue
<template>
....
        <Script src="js/jquery-3.6.0.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/jquery.appear.js"></Script>
        <Script src="js/jquery.easing.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/modernizr.custom.13711.js"></Script>
        <Script src="js/swiper-bundle.min.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/progress-bar.min.js"></Script>
        <Script src="js/circle-progress.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/imagesloaded.pkgd.min.js"></Script>
        <Script src="js/jquery.nice-select.min.js"></Script>
        <Script src="js/count-to.js"></Script>
        <Script src="js/jquery.scrolla.min.js"></Script>
        <Script src="js/YTPlayer.min.js"></Script>
        <Script src="js/TweenMax.min.js"></Script>
        <Script src="js/validnavs.js"></Script>
        <Script src="js/main.js"></Script>
</template>
```

> After
```vue
// pages/project/[id].vue
<template>
....
        <Script src="/js/jquery-3.6.0.min.js"></Script>
        <Script src="/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/jquery.appear.js"></Script>
        <Script src="/js/jquery.easing.min.js"></Script>
        <Script src="/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/modernizr.custom.13711.js"></Script>
        <Script src="/js/swiper-bundle.min.js"></Script>
        <Script src="/js/wow.min.js"></Script>
        <Script src="/js/progress-bar.min.js"></Script>
        <Script src="/js/circle-progress.js"></Script>
        <Script src="/js/isotope.pkgd.min.js"></Script>
        <Script src="/js/imagesloaded.pkgd.min.js"></Script>
        <Script src="/js/jquery.nice-select.min.js"></Script>
        <Script src="/js/count-to.js"></Script>
        <Script src="/js/jquery.scrolla.min.js"></Script>
        <Script src="/js/YTPlayer.min.js"></Script>
        <Script src="/js/TweenMax.min.js"></Script>
        <Script src="/js/validnavs.js"></Script>
        <Script src="/js/main.js"></Script>
</template>
```