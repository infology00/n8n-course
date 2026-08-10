/* =========================================================
   AWSZ HEADER JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const megaParent = document.querySelector(".mega-parent");

    const solutionsTrigger =
        document.querySelector(".solutions-trigger");

    const megaMenu =
        document.querySelector(".mega-menu");

    const categories =
        document.querySelectorAll(".category");

    const contentBoxes =
        document.querySelectorAll(".content-box");


    /* =====================================================
       SAFETY CHECK
       ===================================================== */

    if (!megaParent || !solutionsTrigger || !megaMenu) {
        console.warn("AWSZ Header: Mega menu elements not found.");
        return;
    }


    /* =====================================================
       SOLUTIONS MENU
       CLICK TO OPEN / CLOSE
       ===================================================== */

    solutionsTrigger.addEventListener("click", function (event) {

        event.preventDefault();

        event.stopPropagation();

        megaParent.classList.toggle("menu-open");

    });


    /* =====================================================
       CATEGORY SWITCHING
       ===================================================== */

    categories.forEach(function (category) {

        category.addEventListener("click", function (event) {

            event.preventDefault();

            event.stopPropagation();


            /* ---------------------------------------------
               GET TARGET
            --------------------------------------------- */

            const targetId =
                category.getAttribute("data-content");


            const targetBox =
                document.getElementById(targetId);


            if (!targetBox) {

                console.warn(
                    "AWSZ Header: Content box not found:",
                    targetId
                );

                return;

            }


            /* ---------------------------------------------
               REMOVE ACTIVE FROM CATEGORIES
            --------------------------------------------- */

            categories.forEach(function (item) {

                item.classList.remove("active");

            });


            /* ---------------------------------------------
               ADD ACTIVE TO SELECTED CATEGORY
            --------------------------------------------- */

            category.classList.add("active");


            /* ---------------------------------------------
               REMOVE ACTIVE FROM ALL CONTENT BOXES
            --------------------------------------------- */

            contentBoxes.forEach(function (box) {

                box.classList.remove("active");

            });


            /* ---------------------------------------------
               SHOW SELECTED CONTENT
            --------------------------------------------- */

            targetBox.classList.add("active");


            /* ---------------------------------------------
               RESTART SERVICE ANIMATION
            --------------------------------------------- */

            const serviceLinks =
                targetBox.querySelectorAll(".service-list a");


            serviceLinks.forEach(function (link, index) {

                link.style.animation = "none";

                link.offsetHeight;

                link.style.animation =
                    `awszServiceReveal .35s ease forwards`;

                link.style.animationDelay =
                    `${index * 0.06}s`;

            });

        });

    });


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", function (event) {

        if (!megaParent.contains(event.target)) {

            megaParent.classList.remove("menu-open");

        }

    });


    /* =====================================================
       ESC KEY CLOSE
       ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            megaParent.classList.remove("menu-open");

        }

    });


    /* =====================================================
       KEEP MENU OPEN WHEN INSIDE
       ===================================================== */

    megaMenu.addEventListener("click", function (event) {

        event.stopPropagation();

    });


    /* =====================================================
       INITIAL SERVICE ANIMATION
       ===================================================== */

    const initialBox =
        document.querySelector(".content-box.active");


    if (initialBox) {

        const initialLinks =
            initialBox.querySelectorAll(".service-list a");


        initialLinks.forEach(function (link, index) {

            link.style.animation =
                "awszServiceReveal .35s ease forwards";

            link.style.animationDelay =
                `${index * 0.06}s`;

        });

    }


    /* =====================================================
       HEADER CTA BUTTON ANIMATION
       ===================================================== */

    const headerButton =
        document.querySelector(".header-btn");


    if (headerButton) {

        headerButton.addEventListener(
            "mouseenter",
            function () {

                headerButton.classList.add("button-hover");

            }
        );


        headerButton.addEventListener(
            "mouseleave",
            function () {

                headerButton.classList.remove("button-hover");

            }
        );

    }


    /* =====================================================
       SOLUTIONS TRIGGER ANIMATION STATE
       ===================================================== */

    solutionsTrigger.addEventListener(
        "mouseenter",
        function () {

            solutionsTrigger.classList.add(
                "trigger-hover"
            );

        }
    );


    solutionsTrigger.addEventListener(
        "mouseleave",
        function () {

            solutionsTrigger.classList.remove(
                "trigger-hover"
            );

        }
    );


});
