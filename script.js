// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // MEGA MENU
    // =====================================

    const megaParent = document.querySelector(".mega-parent");
    const megaMenu = document.querySelector(".mega-menu");

    if (megaParent && megaMenu) {

        let closeTimer;

        const openMegaMenu = () => {
            clearTimeout(closeTimer);
            megaMenu.classList.add("active");
        };

        const closeMegaMenu = () => {
            clearTimeout(closeTimer);

            closeTimer = setTimeout(() => {
                megaMenu.classList.remove("active");
            }, 200);
        };

        megaParent.addEventListener("mouseenter", openMegaMenu);
        megaParent.addEventListener("mouseleave", closeMegaMenu);

        megaMenu.addEventListener("mouseenter", openMegaMenu);
        megaMenu.addEventListener("mouseleave", closeMegaMenu);
    }


    // =====================================
    // MOBILE MENU
    // =====================================

    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            menuBtn.classList.toggle("active");

        });


        // Close mobile menu when a link is clicked

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");
                menuBtn.classList.remove("active");

            });

        });

    }


    // =====================================
    // NAVBAR SCROLL EFFECT
    // =====================================

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        };

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );

        // Check initial position

        updateNavbar();

    }


    // =====================================
    // HERO CANVAS
    // =====================================

    const heroCanvas =
        document.getElementById("hero-canvas");

    const heroSection =
        document.querySelector(".hero");

    if (heroCanvas && heroSection) {

        const ctx =
            heroCanvas.getContext("2d");

        let width = 0;
        let height = 0;

        let particles = [];

        const particleCount = 70;


        // -------------------------------------
        // RESIZE CANVAS
        // -------------------------------------

        function resizeCanvas() {

            const rect =
                heroSection.getBoundingClientRect();

            const dpr =
                Math.min(window.devicePixelRatio || 1, 2);

            width = rect.width;
            height = rect.height;

            heroCanvas.width =
                width * dpr;

            heroCanvas.height =
                height * dpr;

            heroCanvas.style.width =
                width + "px";

            heroCanvas.style.height =
                height + "px";

            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );

        }


        // -------------------------------------
        // CREATE PARTICLES
        // -------------------------------------

        function createParticles() {

            particles = [];

            for (
                let i = 0;
                i < particleCount;
                i++
            ) {

                particles.push({

                    x: Math.random() * width,

                    y: Math.random() * height,

                    size:
                        Math.random() * 1.8 + 0.5,

                    speedX:
                        (Math.random() - 0.5) * 0.25,

                    speedY:
                        (Math.random() - 0.5) * 0.25,

                    opacity:
                        Math.random() * 0.45 + 0.1

                });

            }

        }


        // -------------------------------------
        // DRAW PARTICLES
        // -------------------------------------

        function drawParticles() {

            ctx.clearRect(
                0,
                0,
                width,
                height
            );


            particles.forEach(particle => {

                particle.x += particle.speedX;
                particle.y += particle.speedY;


                // Wrap around screen

                if (particle.x < 0) {
                    particle.x = width;
                }

                if (particle.x > width) {
                    particle.x = 0;
                }

                if (particle.y < 0) {
                    particle.y = height;
                }

                if (particle.y > height) {
                    particle.y = 0;
                }


                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    `rgba(214,255,0,${particle.opacity})`;

                ctx.fill();

            });


            requestAnimationFrame(
                drawParticles
            );

        }


        // -------------------------------------
        // INITIALIZE
        // -------------------------------------

        resizeCanvas();

        createParticles();

        drawParticles();


        // -------------------------------------
        // WINDOW RESIZE
        // -------------------------------------

        window.addEventListener(
            "resize",
            () => {

                resizeCanvas();

                createParticles();

            }
        );

    }


    // =====================================
    // VIDEO PYRAMID / CARDS
    // =====================================

    const videoCards =
        document.querySelectorAll(".video-card");


    videoCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add("active");

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove("active");

            }
        );


        // -------------------------------------
        // PLAY BUTTON
        // -------------------------------------

        const playButton =
            card.querySelector(".play-btn");


        if (playButton) {

            playButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();

                    card.classList.toggle(
                        "playing"
                    );

                }
            );

        }

    });


    // =====================================
    // SMOOTH SCROLL
    // =====================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        });


    // =====================================
    // VIDEO CARD IMAGE LOAD
    // =====================================

    document
        .querySelectorAll(".video-card img")
        .forEach(image => {

            image.addEventListener(
                "load",
                () => {

                    image.parentElement.classList.add(
                        "loaded"
                    );

                }
            );

        });


    // =====================================
    // HERO VIDEO OPTIMIZATION
    // =====================================

    const heroVideo =
        document.querySelector(".hero video");


    if (heroVideo) {

        heroVideo.muted = true;

        heroVideo.playsInline = true;

        const playVideo = () => {

            const promise =
                heroVideo.play();

            if (
                promise &&
                typeof promise.catch === "function"
            ) {

                promise.catch(() => {});

            }

        };


        playVideo();


        document.addEventListener(
            "visibilitychange",
            () => {

                if (
                    document.visibilityState ===
                    "visible"
                ) {

                    playVideo();

                }

            }
        );

    }


    // =====================================
    // REVEAL ANIMATION
    // =====================================

    const revealElements =
        document.querySelectorAll(
            ".showcase-content, .video-card, .workflow-shell"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }

});
