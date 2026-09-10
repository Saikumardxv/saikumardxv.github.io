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
       RESUME PDF DOWNLOAD
    ===================================================== */

    const resumeLink = document.getElementById("download-resume");

    if (resumeLink) {
        resumeLink.addEventListener("click", (event) => {
            event.preventDefault();

            const lines = [
                "GUDIPATI SAI KUMAR",
                "Web Developer | Computer Science Student",
                "Email: gudipatisaikumar46@gmail.com",
                "",
                "PROFILE",
                "Computer Science student passionate about web and full stack development.",
                "Focused on building responsive, interactive and user-friendly applications.",
                "",
                "EDUCATION",
                "Bachelor of Technology, Computer Science and Engineering",
                "DVR&Dr.HS MIC College of Technology, Kanchikacherla, Andhra Pradesh",
                "2023 - 2027",
                "",
                "SKILLS",
                "HTML, CSS, JavaScript, Python, React, Node.js, Git, GitHub",
                "",
                "PROJECTS",
                "Weather Application (Weather/Now)",
                "Real-time weather information application using an external API.",
                "",
                "CONTACT",
                "Email: gudipatisaikumar46@gmail.com",
                "GitHub: github.com/Saikumardxv/saikumardxv.github.io"
            ];

            const escapePdfText = (text) => text
                .replace(/\\/g, "\\\\")
                .replace(/\(/g, "\\(")
                .replace(/\)/g, "\\)");

            const textCommands = lines.map((line, index) =>
                `BT /F1 ${index === 0 ? 20 : index === 1 ? 11 : 10} Tf 54 ${760 - index * 25} Td (${escapePdfText(line)}) Tj ET`
            ).join("\n");

            const objects = [
                "<< /Type /Catalog /Pages 2 0 R >>",
                "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
                "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
                "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
                `<< /Length ${textCommands.length} >>\nstream\n${textCommands}\nendstream`
            ];

            let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
            const offsets = [0];

            objects.forEach((object, index) => {
                offsets.push(pdf.length);
                pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
            });

            const xrefOffset = pdf.length;
            pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
            offsets.slice(1).forEach((offset) => {
                pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
            });
            pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

            const blob = new Blob([pdf], { type: "application/pdf" });
            const downloadUrl = URL.createObjectURL(blob);
            const download = document.createElement("a");
            download.href = downloadUrl;
            download.download = "Gudipati-Sai-Kumar-Resume.pdf";
            document.body.appendChild(download);
            download.click();
            download.remove();
            URL.revokeObjectURL(downloadUrl);
        });
    }



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