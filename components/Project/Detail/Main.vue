<script lang="js" setup>
defineProps({
    project: {
        type: Array,
        default: {},
    }
})

</script>

<template>
     <div
            class="project-details-area default-padding"
            style="margin-top: 40px"
        >
            <div class="container">
                <div class="project-details-items">
                    <div class="project-thumb">
                        <img
                            :src="project?.image"
                            alt="Thumb"
                        />
                        <div class="project-info mt-md-50 mt-xs-40">
                            <h3 class="title">Product Info</h3>
                            <div class="content">
                                <!-- Informasi Dasar Proyek -->
                                <ul
                                    class="project-basic-info"
                                    style="
                                        list-style: none;
                                        padding: 0;
                                        margin: 0 0 20px;
                                    "
                                >
                                    <li style="margin-bottom: 5px">
                                        Price <span>{{ project?.price }}</span>
                                    </li>
                                    <li style="margin-bottom: 5px">
                                        Custom <span>{{ project?.custom }}</span>
                                    </li>
                                </ul>

                                <!-- Tombol Demo dan WhatsApp -->
                                <div
                                    style="
                                        display: flex;
                                        gap: 10px;
                                        margin-top: 20px;
                                    "
                                >
                                    <a
                                        :href="project?.link"
                                        style="
                                            display: inline-block;
                                            padding: 10px 20px;
                                            background-color: #007bff;
                                            color: white;
                                            text-align: center;
                                            text-decoration: none;
                                            border-radius: 50px;
                                            font-size: 16px;
                                            transition: background-color 0.3s;
                                        "
                                        onmouseover="this.style.backgroundColor='#0056b3'"
                                        onmouseout="this.style.backgroundColor='#007bff'"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href="https://wa.me/6281930456886"
                                        style="
                                            display: inline-block;
                                            padding: 10px 20px;
                                            background-color: #007bff;
                                            color: white;
                                            text-align: center;
                                            text-decoration: none;
                                            border-radius: 50px;
                                            font-size: 16px;
                                            transition: background-color 0.3s;
                                        "
                                        onmouseover="this.style.backgroundColor='#0056b3'"
                                        onmouseout="this.style.backgroundColor='#007bff'"
                                    >
                                        Get Tamplate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top-info">
                        <div class="row">
                            <div class="col-xl-12 left-info">
                                <h2>{{ `${project?.title}` }}</h2>
                                <p>
                                    {{`${project?.description}`}}
                                </p>

                                <p>
                                    Whether you're launching a new business,
                                    showcasing a portfolio, or promoting a
                                    product, this website template is the
                                    perfect foundation for creating a standout
                                    online presence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
