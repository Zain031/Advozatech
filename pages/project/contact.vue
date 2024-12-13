<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Question from "~/components/Project/Question.vue";

const loading = ref(true);

onMounted(() => {
    loading.value = false;
});
</script>

<template>
    <!--[if lte IE 9]>
        <p class="browserupgrade">
            You are using an <strong>outdated</strong> browser. Please <a
            href="https://browsehappy.com/">upgrade your browser</a> to improve
            your experience and security.
        </p>
    <![endif]-->

    <!-- Header
    ============================================= -->
    <Navbar2 />
    <!-- End Header -->

    <!-- Start Banner Area
    ============================================= -->

    <!-- End Banner -->

    <MainContact />

    <Footer />
    <!-- End Footer -->

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
