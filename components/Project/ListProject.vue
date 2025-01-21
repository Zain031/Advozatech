<script lang="js" setup>
defineProps({
    project: {
        type: Array,
        default: [{}],
    }
})
// const project = ref(project)
// console.log(project,"Data Project")
</script>

<template>
    
    <div class="project-area default-padding bottom-less half-bg-gray" style="background-color: #f3f6fd; padding-bottom: 200px;" id="web" >
            <!-- Shape -->
            <div
                class="shape-left-bottom"
                style="background-image: url('img/shape/21.png')"
            ></div>
            <!-- End Shape -->
            <div class="container">
                <div class="projects-box">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row" >
                                <!-- Single Item -->
                                <div
                                    class="col-xl-4 col-md-6 single-item"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                    v-for="template in project" :key="template?.id"
                                >
                                    <div class="project-style-one">
                                        <div class="thumb">
                                            <img
                                                :src="template?.image"
                                                alt="Thumb"
                                            />
                                        </div>
                                        <div class="content">
                                            <a
                                                class="button"
                                                :href="`/project/${template?.id}`"
                                                ><i
                                                    class="fas fa-angle-right"
                                                ></i
                                            ></a>
                                            <h4>
                                                <a 
                                                :href="`/project/${template?.id}`"
                                                    >{{ `Rp.${template?.price}` }}</a
                                                >
                                            </h4>
                                            <ul>
                                                <li>{{ `${template?.category?.name}` }}</li>
                                                <li>60 orang membeli ini</li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
