<script lang="ts" setup>
import {ref,onMounted} from 'vue'
const loading = ref(true)

onMounted(() => {
    loading.value = false;
});
</script>

<template>
        <!--[if lte IE 9]>
            <p class="browserupgrade">
                You are using an <strong>outdated</strong> browser. Please
                <a href="https://browsehappy.com/">upgrade your browser</a> to
                improve your experience and security.
            </p>
        <![endif]-->

        <!-- Header
    ============================================= -->
        <Navbar/>
        <!-- End Header -->

        <!-- Start Banner Area
    ============================================= -->
        <MainBanner/>
        <!-- End Banner -->

        <!-- Start Services Area
    ============================================= -->
        <MainServices/>
        <!-- End Services Area -->

        <!-- Start Projects
    ============================================= -->
        <MainProject/>
        <!-- End Projects -->


        <!-- Start Why Choose us
    ============================================= -->
        <MainAboutUs2/>
        <!-- End Why Choose Us -->

        <!-- Start Pricing
    ============================================= -->
        <MainPricing/>
        <!-- End Pricing -->

        <!-- Start Project
    ============================================= -->
        <MainProject2/>
        <!-- End Project Area -->

        <!-- Start Process
    ============================================= -->
        <MainProcess/>
        <!-- End Process -->



        <!-- Start Services
    ============================================= -->
        <MainServices2/>
        <!-- End Services -->
        <MainContact/>

        <!-- clients -->

       <MainClients/>

        <!-- Start Footer
    ============================================= -->
        <Footer/>
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
