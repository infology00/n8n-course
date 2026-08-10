/* =========================================================
   AWSZ HEADER CONTROLLER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const header =
        document.querySelector("#awsHeader");

    const megaParent =
        document.querySelector(".aws-mega-parent");

    const solutionsButton =
        document.querySelector(".aws-solutions-trigger");

    const categories =
        document.querySelectorAll(".aws-category");

    const panels =
        document.querySelectorAll(".aws-content-panel");

    const mobileToggle =
        document.querySelector(".aws-mobile-toggle");

    const mobileMenu =
        document.querySelector(".aws-mobile-menu");

    const mobileSolutions =
        document.querySelector(".aws-mobile-solutions");

    const mobileSolutionsList =
        document.querySelector(".aws-mobile-solutions-list");


    /* =====================================================
       SAFETY
       ===================================================== */

    if (!header) {

        console.warn(
            "AWSZ Header: #awsHeader not found."
        );

        return;

    }


    /* =====================================================
       SOLUTIONS DESKTOP
       ===================================================== */

    if (megaParent && solutionsButton) {

        solutionsButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    megaParent.classList.contains("is-open");


                megaParent.classList.toggle(
                    "is-open"
                );


                solutionsButton.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

            }
        );

    }


    /* =====================================================
       CATEGORY SWITCH
       ===================================================== */

    categories.forEach((category) => {

        category.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                const targetId =
                    category.dataset.content;


                if (!targetId) {
                    return;
                }


                const targetPanel =
                    document.getElementById(targetId);


                if (!targetPanel) {

                    console.warn(
                        "AWSZ Header: Panel not found:",
                        targetId
                    );

                    return;

                }


                /* REMOVE ACTIVE */

                categories.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });


                panels.forEach((panel) => {

                    panel.classList.remove(
                        "active"
                    );

                });


                /* ADD ACTIVE */

                category.classList.add(
                    "active"
                );


                targetPanel.classList.add(
                    "active"
                );


                /* RESTART SERVICE ANIMATION */

                const links =
                    targetPanel.querySelectorAll(
                        ".aws-service-grid a"
                    );


                links.forEach((link) => {

                    link.style.animation = "none";

                    void link.offsetWidth;

                    link.style.animation = "";

                });

            }
        );

    });


    /* =====================================================
       OUTSIDE CLICK
       ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                megaParent &&
                !megaParent.contains(event.target)
            ) {

                megaParent.classList.remove(
                    "is-open"
                );


                if (solutionsButton) {

                    solutionsButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }


            if (megaParent) {

                megaParent.classList.remove(
                    "is-open"
                );

            }


            if (solutionsButton) {

                solutionsButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            if (header) {

                header.classList.remove(
                    "mobile-open"
                );

            }


            if (mobileToggle) {

                mobileToggle.classList.remove(
                    "is-active"
                );

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (mobileToggle && mobileMenu) {

        mobileToggle.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    header.classList.contains(
                        "mobile-open"
                    );


                header.classList.toggle(
                    "mobile-open"
                );


                mobileToggle.classList.toggle(
                    "is-active"
                );


                mobileToggle.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

            }
        );

    }


    /* =====================================================
       MOBILE SOLUTIONS
       ===================================================== */

    if (
        mobileSolutions &&
        mobileSolutionsList
    ) {

        mobileSolutions.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                mobileSolutionsList.classList.toggle(
                    "is-open"
                );


                const icon =
                    mobileSolutions.querySelector(
                        "i"
                    );


                if (icon) {

                    icon.style.transform =
                        mobileSolutionsList.classList.contains(
                            "is-open"
                        )
                        ? "rotate(180deg)"
                        : "rotate(0deg)";

                }

            }
        );

    }


    /* =====================================================
       MOBILE LINK CLICK
       ===================================================== */

    if (mobileMenu) {

        mobileMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        header.classList.remove(
                            "mobile-open"
                        );

                        if (mobileToggle) {

                            mobileToggle.classList.remove(
                                "is-active"
                            );

                            mobileToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }
                );

            });

    }


    /* =====================================================
       SCROLL EFFECT
       ===================================================== */

    const handleScroll = () => {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    };


    window.addEventListener(
        "scroll",
        handleScroll,
        { passive:true }
    );


    handleScroll();


    /* =====================================================
       HEADER CTA MICRO ANIMATION
       ===================================================== */

    const headerCTA =
        document.querySelector(
            ".aws-header-btn"
        );


    if (headerCTA) {

        headerCTA.addEventListener(
            "mouseenter",
            () => {

                headerCTA
                    .querySelector("i")
                    ?.classList.add("fa-bounce");

            }
        );


        headerCTA.addEventListener(
            "mouseleave",
            () => {

                headerCTA
                    .querySelector("i")
                    ?.classList.remove("fa-bounce");

            }
        );

    }


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    const firstCategory =
        document.querySelector(
            ".aws-category.active"
        );


    if (firstCategory) {

        const firstPanel =
            document.getElementById(
                firstCategory.dataset.content
            );


        if (firstPanel) {

            firstPanel.classList.add(
                "active"
            );

        }

    }


    console.log(
        "AWSZ Header loaded successfully."
    );

});
