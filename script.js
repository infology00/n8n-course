// =====================================
// AWSZ WEBSITE SCRIPT
// PART 1 / 4
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

        updateNavbar();

    }


    // =====================================
    // BASIC CLICK SAFETY
    // =====================================

    document.querySelectorAll("button").forEach(button => {

        button.style.cursor = "pointer";

    });
// =====================================
// AWSZ WEBSITE SCRIPT
// PART 2 / 4
// =====================================


// =====================================
// HERO CANVAS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

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


        // =====================================
        // RESIZE
        // =====================================

        function resizeCanvas() {

            const rect =
                heroSection.getBoundingClientRect();

            const dpr =
                Math.min(
                    window.devicePixelRatio || 1,
                    2
                );

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


        // =====================================
        // CREATE PARTICLES
        // =====================================

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


        // =====================================
        // DRAW
        // =====================================

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


                if (particle.x < 0)
                    particle.x = width;

                if (particle.x > width)
                    particle.x = 0;

                if (particle.y < 0)
                    particle.y = height;

                if (particle.y > height)
                    particle.y = 0;


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


        resizeCanvas();

        createParticles();

        drawParticles();


        window.addEventListener(
            "resize",
            () => {

                resizeCanvas();

                createParticles();

            }
        );

    }


    // =====================================
    // VIDEO CARDS
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

});
