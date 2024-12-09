<script lang="ts" setup>

</script>

<template>
    <div class="contact-area bg-gray default-padding" id="contact">
            <div class="container">
                <div class="row">
                    <div
                        class="col-tact-stye-one col-lg-5 pr-60 pr-md-15 pr-xs-15"
                    >
                        <div class="contact-style-one-info">
                            <h2>Contact Information</h2>
                            <p>
                                Plan upon yet way get cold spot its week. Almost
                                do am or limits hearts. Resolve parties but why
                                she shewing.
                            </p>
                            <ul>
                                <li class="wow fadeInUp">
                                    <div class="icon">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Hotline</h4>
                                        <a href="">0819-3045-6886</a>
                                    </div>
                                </li>
                                <li class="wow fadeInUp" data-wow-delay="300ms">
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title">Our Location</h4>
                                        <p>
                                            Jl. Panghulu Djaja Cimahpar - Bogor Utara 16151 <br />
                                            Bogor
                                        </p>
                                    </div>
                                </li>
                                <li class="wow fadeInUp" data-wow-delay="500ms">
                                    <div class="icon">
                                        <i
                                            class="fas fa-envelope-open-text"
                                        ></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title">Official Email</h4>
                                        <a href="mailto:info@digital.com.com"
                                            >advotech@gmail.com</a
                                        >
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-tact-stye-one col-lg-7" data-aos="fade-up" data-aos-duration="1000"    data-aos-delay="200">
                        <div class="contact-form-style-one">
                            <div
                                class="illustration wow fadeInRight"
                                data-wow-delay="300ms"
                            >
                                <img
                                    src="assets/img/illustration/20.png"
                                    alt="Image Not Found"
                                />
                            </div>
                            <h4 class="sub-heading">Have Questions?</h4>
                            <h2 class="heading">Send us a Massage</h2>
                            <form
                                action="assets/mail/contact.php"
                                method="POST"
                                class="contact-form contact-form"
                            >
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input
                                                class="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                type="text"
                                            />
                                            <span class="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input
                                                class="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Email*"
                                                type="email"
                                            />
                                            <span class="alert-error"></span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input
                                                class="form-control"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone"
                                                type="text"
                                            />
                                            <span class="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group comments">
                                            <textarea
                                                class="form-control"
                                                id="comments"
                                                name="comments"
                                                placeholder="Tell Us About Project *"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <button
                                            type="submit"
                                            name="submit"
                                            id="submit"
                                        >
                                            <i class="fa fa-paper-plane"></i>
                                            Get in Touch
                                        </button>
                                    </div>
                                </div>
                                <!-- Alert Message -->
                                <div class="col-lg-12 alert-notification">
                                    <div id="message" class="alert-msg"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
