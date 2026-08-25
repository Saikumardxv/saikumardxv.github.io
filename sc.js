/* =========================================================
   GUDIPATI SAI KUMAR - PORTFOLIO JAVASCRIPT
   Fixed Navigation + Section Visibility
========================================================= */

document.documentElement.classList.add("js-enabled");


/* =========================================================
   WAIT FOR HTML TO LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       COMMON SCROLL FUNCTION
    ===================================================== */

    const navbar = document.querySelector(".navbar");


    function getNavbarOffset() {

        return navbar
            ? navbar.offsetHeight + 25
            : 100;

    }


    function scrollToSection(target) {

        if (!target) {
            return;
        }


        const position =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            getNavbarOffset();


        window.scrollTo({

            top: Math.max(0, position),

            behavior: "smooth"

        });

    }



    /* =====================================================
       NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav-link");


    const navMenu =
        document.getElementById("nav-menu");


    navLinks.forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            scrollToSection(target);


            /* Active navigation */

            navLinks.forEach((item) => {

                item.classList.remove("active");

            });


            this.classList.add("active");


            /* Close mobile menu */

            if (navMenu) {

                navMenu.classList.remove("open");

            }

        });

    });



    /* =====================================================
       CONTACT ME BUTTON
    ===================================================== */

    const hireButton =
        document.querySelector(".hire-button");


    if (hireButton) {

        hireButton.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector("#contact");


                if (!target) {

                    return;

                }


                event.preventDefault();


                scrollToSection(target);

            }
        );

    }



    /* =====================================================
       HERO BUTTONS + SCROLL DOWN
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]:not(.nav-link):not(.logo):not(.hire-button)'
        );


    anchorLinks.forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            scrollToSection(target);

        });

    });



    /* =====================================================
       SCROLL REVEAL ANIMATION
       
       IMPORTANT:
       The CSS is also configured so sections stay visible.
       Therefore, even if the observer fails, the content
       will NOT disappear.
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );


    if (
        "IntersectionObserver" in window
    ) {


        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    });

                },

                {

                    threshold: 0.08,

                    rootMargin:
                        "0px 0px -40px 0px"

                }

            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });


    } else {


        /* Browser fallback */

        revealElements.forEach((element) => {

            element.classList.add("show");

        });

    }



    /* =====================================================
       ACTIVE NAVIGATION WHILE SCROLLING
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    if (
        "IntersectionObserver" in window &&
        sections.length
    ) {


        const sectionObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const id =
                            entry.target.getAttribute(
                                "id"
                            );


                        navLinks.forEach((link) => {

                            link.classList.toggle(

                                "active",

                                link.getAttribute(
                                    "href"
                                ) === `#${id}`

                            );

                        });

                    });

                },

                {

                    rootMargin:
                        "-35% 0px -55% 0px",

                    threshold: 0

                }

            );


        sections.forEach((section) => {

            sectionObserver.observe(section);

        });

    }



    /* =====================================================
       DARK / LIGHT THEME
    ===================================================== */

    const themeToggle =
        document.getElementById(
            "theme-toggle"
        );


    if (themeToggle) {


        themeToggle.addEventListener(
            "click",
            () => {


                document.body.classList.toggle(
                    "light-mode"
                );


                const icon =
                    themeToggle.querySelector(
                        "i"
                    );


                if (!icon) {

                    return;

                }


                if (
                    document.body.classList.contains(
                        "light-mode"
                    )
                ) {


                    icon.classList.remove(
                        "fa-moon"
                    );


                    icon.classList.add(
                        "fa-sun"
                    );


                } else {


                    icon.classList.remove(
                        "fa-sun"
                    );


                    icon.classList.add(
                        "fa-moon"
                    );

                }

            }
        );

    }



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById(
            "menu-toggle"
        );


    if (
        menuToggle &&
        navMenu
    ) {


        menuToggle.addEventListener(
            "click",
            () => {


                navMenu.classList.toggle(
                    "open"
                );

            }
        );

    }



    /* =====================================================
       RESUME CHECK
    ===================================================== */

    const resumeLinks =
        document.querySelectorAll(
            'a[href="resume.pdf"]'
        );


    resumeLinks.forEach((link) => {


        link.addEventListener(
            "click",
            () => {


                console.log(
                    "Opening resume.pdf"
                );

            }
        );

    });



    /* =====================================================
       TYPING ANIMATION
    ===================================================== */

    const typingElement = document.getElementById("typing");

    if (typingElement) {
        const texts = [
            "Python Developer",
            "Web Developer",
            "Fullstack Developer"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];
            
            if (!isDeleting) {
                typingElement.textContent += currentText.charAt(charIndex);
                charIndex++;

                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(type, 1500);
                    return;
                }
            } else {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }

            setTimeout(type, isDeleting ? 50 : 100);
        }

        type();
    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contact-form"
        );


    if (contactForm) {


        contactForm.addEventListener(
            "submit",
            (event) => {


                event.preventDefault();


                alert(
                    "Thank you! Your message form is ready. Connect it to an email service or backend to receive messages."
                );

            }
        );

    }

});