<script lang="ts" setup>
import {ref,onMounted} from 'vue'
const loading = ref(true)

onMounted(() => {
    loading.value = false;
});
</script>
<template>
       <div id="preloader" v-if="loading">
            <div id="ambrox-preloader" class="ambrox-preloader">
                <div class="animation-preloader">
                    <div class="spinner"></div>
                    <div class="txt-loading">
                        <span data-text-preloader="A" class="letters-loading">
                            A
                        </span>
                        <span data-text-preloader="D" class="letters-loading">
                            D
                        </span>
                        <span data-text-preloader="V" class="letters-loading">
                            V
                        </span>
                        <span data-text-preloader="O" class="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="Z" class="letters-loading">
                            Z
                        </span>
                        <span data-text-preloader="A" class="letters-loading">
                            A
                        </span>
                    </div>
                </div>
                <div class="loader">
                    <div class="row">
                        <div class="col-3 loader-section section-left">
                            <div class="bg"></div>
                        </div>
                        <div class="col-3 loader-section section-left">
                            <div class="bg"></div>
                        </div>
                        <div class="col-3 loader-section section-right">
                            <div class="bg"></div>
                        </div>
                        <div class="col-3 loader-section section-right">
                            <div class="bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>
</template>
