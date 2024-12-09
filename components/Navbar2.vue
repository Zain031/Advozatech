<script lang="ts" setup>

</script>

<template>
<!-- Header ============================================= -->
<header>
            <!-- Start Navigation -->
            <nav
                class="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background"
                style="background-color: #2636b7"
            >
                <!-- Start Top Search -->
                <div class="top-search">
                    <div class="container-xl">
                        <div class="input-group">
                            <span class="input-group-addon"
                                ><i class="fa fa-search"></i
                            ></span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                            />
                            <span class="input-group-addon close-search"
                                ><i class="fa fa-times"></i
                            ></span>
                        </div>
                    </div>
                </div>
                <!-- End Top Search -->

                <div
                    class="container d-flex justify-content-between align-items-center"
                >
                    <!-- Start Header Navigation -->
                    <div class="navbar-header">
                        <button
                            type="button"
                            class="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#navbar-menu"
                        >
                            <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand" href="/">
                            <img
                                src="assets/img/favicon.png"
                                class="logo logo-display"
                                alt="Logo"
                            />
                            <img
                                src="assets/img/favicon1.png"
                                class="logo logo-scrolled"
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <!-- End Header Navigation -->

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <img src="assets/img/favicon.png" alt="Logo" />
                        <button
                            type="button"
                            class="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#navbar-menu"
                        >
                            <i class="fa fa-times"></i>
                        </button>

                        <ul
                            class="nav navbar-nav navbar-center"
                            data-in="fadeInDown"
                            data-out="fadeOutUp"
                        >
                            <li class="dropdown">
                                <a href="/">Home</a>
                            </li>

                            <li class="dropdown megamenu-fw">
                                <a href="/project">Products</a>
                            </li>
                            <li class="dropdown">
                                <a href="/">Pertanyaan</a>
                            </li>
                            <li class="dropdown">
                                <a href="#">Tutorial</a>
                            </li>
                            <li><a href="/">contact</a></li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                    <div class="attr-right">
                        <!-- Start Atribute Navigation -->
                        <div class="attr-nav">
                            <ul>
                                <li class="search">
                                    <a href="#"
                                        ><i class="far fa-search"></i
                                    ></a>
                                </li>
                                <li class="side-menu">
                                    <a href="#">
                                        <span class="bar-1"></span>
                                        <span class="bar-2"></span>
                                        <span class="bar-3"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- End Atribute Navigation -->

                        <!-- Start Side Menu -->
                        <div class="side">
                            <a href="#" class="close-side"
                                ><i class="icon_close"></i
                            ></a>
                            <div class="widget">
                                <div class="logo">
                                    <img
                                        src="assets/img/favicon.png"
                                        alt="Logo"
                                    />
                                </div>
                                <p>
                                    Navigating the complexities of web and
                                    mobile development with precision and
                                    purpose, we craft tailored solutions that
                                    resonate with your goals. With a focus on
                                    seamless user experiences, we adapt to every
                                    challenge, ensuring responsive designs and
                                    efficient performance.
                                </p>
                            </div>
                            <div class="widget address">
                                <div>
                                    <ul>
                                        <li>
                                            <div class="content">
                                                <p>Address</p>
                                                <strong
                                                    >Jl. Panghulu Djaja Cimahpar
                                                    - Bogor Utara 16151</strong
                                                >
                                            </div>
                                        </li>
                                        <li>
                                            <div class="content">
                                                <p>Email</p>
                                                <strong
                                                    >advozatech@gmail.com</strong
                                                >
                                            </div>
                                        </li>
                                        <li>
                                            <div class="content">
                                                <p>Contact</p>
                                                <strong>0819-3045-6886</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget newsletter">
                                <h4 class="title">Get Subscribed!</h4>
                                <form action="#">
                                    <div
                                        class="input-group stylish-input-group"
                                    >
                                        <input
                                            type="email"
                                            placeholder="Enter your e-mail"
                                            class="form-control"
                                            name="email"
                                        />
                                        <span class="input-group-addon">
                                            <button type="submit">
                                                <i class="arrow_right"></i>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div class="widget social">
                                <ul class="link">
                                    <li>
                                        <a href="#"
                                            ><i class="fab fa-facebook-f"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i class="fab fa-twitter"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i class="fab fa-linkedin-in"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i class="fab fa-behance"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- End Side Menu -->
                    </div>
                    <!-- Main Nav -->
                </div>

                <!-- Overlay screen for menu -->
                <div class="overlay-screen"></div>
                <!-- End Overlay screen for menu -->
            </nav>
            <!-- End Navigation -->
        </header>
        <!-- End Header -->
</template>
