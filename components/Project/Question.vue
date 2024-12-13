<script lang="ts" setup></script>

<template>
    <div class="faq-area bg-gray default-padding" style="margin-top: 40px">
        <!-- Shape -->
        <div class="faq-sahpe">
            <img src="assets/img/illustration/faq1.png" alt="Image Not Found" />
            <img src="assets/img/illustration/faq2.png" alt="Image Not Found" />
        </div>
        <!-- End Shape -->
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="site-heading text-center">
                        <h4 class="sub-title">Question & Answer</h4>
                        <h2 class="title">Need Quick Support?</h2>
                        <div class="devider"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 faq-style-one">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    What features can I get with this custom
                                    website?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#faqAccordion"
                            >
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            1. Responsive design that works on
                                            any device.
                                        </li>
                                        <li>
                                            2. Custom pages tailored to your
                                            needs (homepage, about us, contact,
                                            etc.).
                                        </li>
                                        <li>
                                            3. Contact forms or other form
                                            integrations.
                                        </li>
                                        <li>
                                            4. Content Management System (CMS)
                                            for easy updates.
                                        </li>
                                        <li>
                                            5. Basic SEO optimization to improve
                                            search engine visibility.
                                        </li>
                                        <li>
                                            6. Website security to protect your
                                            data.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    How long does it take to complete the
                                    website?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#faqAccordion"
                            >
                                <div class="accordion-body">
                                    <p>
                                        The timeline depends on the complexity
                                        of the design and features required. On
                                        average, it takes around 2–6 weeks. If
                                        you need it faster, we can discuss a
                                        custom timeline.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Can I choose a design that suits my
                                    preferences?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#faqAccordion"
                            >
                                <div class="accordion-body">
                                    <p>
                                        Absolutely! You can provide design
                                        references you like, or we can help
                                        create a brand-new design based on your
                                        needs and branding.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    What is the payment process?
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#faqAccordion"
                            >
                                <div class="accordion-body">
                                    <ul style="list-style: disc">
                                        <li>
                                            <b>Initial stage:</b> A 50% deposit
                                            is required to begin the project.
                                        </li>
                                        <li>
                                            <b>Final stage:</b> The remaining
                                            balance is due upon project
                                            completion.
                                        </li>
                                        <li>
                                            <b
                                                >We accept bank transfers,
                                                e-wallets, or other payment
                                                methods as agreed upon.</b
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    Can this website be updated in the future?
                                </button>
                            </h2>
                            <div
                                id="collapseFive"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingFive"
                                data-bs-parent="#faqAccordion"
                            >
                                <div class="accordion-body">
                                    <ul style="list-style: disc">
                                        Of course! We build websites that are
                                        easy to update. You can also request
                                        additional services for maintenance and
                                        updates in the future.
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
