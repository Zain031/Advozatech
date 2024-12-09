<script lang="ts" setup>
const route = useRoute();
console.log(route.params)
definePageMeta({
  layout: false,
})
</script>

<template>
        <!-- Star Project Details Area
         ============================================= -->
         <Navbar2/>
        <ProjectDetailMain/>
        <!-- End Project Details Area -->

        <ProjectDetailFooter/>

        <!-- jQuery Frameworks
    ============================================= -->
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
