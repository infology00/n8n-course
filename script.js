/* ======================================================
   AWSZ — MAIN SCRIPT
====================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       MEGA MENU
    ================================================== */

    const megaParent = document.querySelector(".mega-parent");
    const megaMenu = document.querySelector(".mega-menu");
    const categories = document.querySelectorAll(".mega-category");
    const panels = document.querySelectorAll(".mega-panel");


    if (megaParent && megaMenu) {

        let closeTimer;


        // Open menu

        const openMegaMenu = () => {

            clearTimeout(closeTimer);

            megaMenu.classList.add("active");

        };


        // Close menu with small delay

        const closeMegaMenu = () => {

            closeTimer = setTimeout(() => {

                megaMenu.classList.remove("active");

            }, 180);

        };


        megaParent.addEventListener("mouseenter", openMegaMenu);

        megaParent.addEventListener("mouseleave", closeMegaMenu);


        megaMenu.addEventListener("mouseenter", openMegaMenu);

        megaMenu.addEventListener("mouseleave", closeMegaMenu);


        /*
            Prevent Solutions link from jumping to top
        */

        const solutionsTrigger =
            megaParent.querySelector(".solutions-trigger");


        if (solutionsTrigger) {

            solutionsTrigger.addEventListener("click", (event) => {

                event.preventDefault();

                if (megaMenu.classList.contains("active")) {

                    megaMenu.classList.remove("active");

                } else {

                    openMegaMenu();

                }

            });

        }

    }



    /* ==================================================
       MEGA MENU CATEGORIES
    ================================================== */

    categories.forEach(category => {

        category.addEventListener("mouseenter", () => {

            const target = category.dataset.category;


            // Remove active category

            categories.forEach(item => {

                item.classList.remove("active");

            });


            // Activate current category

            category.classList.add("active");


            // Hide all panels

            panels.forEach(panel => {

                panel.classList.remove("active");

            });


            // Show matching panel

            const targetPanel =
                document.querySelector(
                    `.mega-panel[data-panel="${target}"]`
                );


            if (targetPanel) {

                targetPanel.classList.add("active");

            }

        });


        /*
            Also support click
        */

        category.addEventListener("click", () => {

            const target = category.dataset.category;


            categories.forEach(item => {

                item.classList.remove("active");

            });


            category.classList.add("active");


            panels.forEach(panel => {

                panel.classList.remove("active");

            });


            const targetPanel =
                document.querySelector(
                    `.mega-panel[data-panel="${target}"]`
                );


            if (targetPanel) {

                targetPanel.classList.add("active");

            }

        });

    });



    /* ==================================================
       MOBILE MENU
    ================================================== */

    const mobileToggle =
        document.querySelector(".mobile-menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");


    if (mobileToggle && mobileMenu) {


        mobileToggle.addEventListener("click", () => {


            const isOpen =
                mobileMenu.classList.contains("active");


            if (isOpen) {

                mobileMenu.classList.remove("active");

                document.body.classList.remove("mobile-open");

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                mobileMenu.classList.add("active");

                document.body.classList.add("mobile-open");

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });


        /*
            Close mobile menu when a link is clicked
        */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                document.body.classList.remove("mobile-open");

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* ==================================================
       NAVBAR SCROLL EFFECT
    ================================================== */

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {


        window.addEventListener("scroll", () => {


            if (window.scrollY > 30) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }



    /* ==================================================
       ESCAPE KEY
       Close menus
    ================================================== */

    document.addEventListener("keydown", (event) => {


        if (event.key === "Escape") {


            if (megaMenu) {

                megaMenu.classList.remove("active");

            }


            if (mobileMenu) {

                mobileMenu.classList.remove("active");

                document.body.classList.remove("mobile-open");

            }


            if (mobileToggle) {

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });


});
