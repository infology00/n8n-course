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
/* =========================================================
   AUTOMATION ECOSYSTEM NETWORK
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const canvas =
        document.getElementById("automation-network");

    const section =
        document.querySelector(".automation-ecosystem");

    if (!canvas || !section) return;


    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;

    let nodes = [];

    const mouse = {
        x: -1000,
        y: -1000
    };


    /* =====================================================
       SETTINGS
    ===================================================== */

    const NODE_COUNT =
        window.innerWidth < 700 ? 38 : 75;

    const CONNECTION_DISTANCE = 145;

    const MOUSE_DISTANCE = 190;


    /* =====================================================
       RESIZE
    ===================================================== */

    function resizeCanvas() {

        const rect =
            section.getBoundingClientRect();

        const dpr =
            Math.min(window.devicePixelRatio || 1, 2);

        width = rect.width;
        height = rect.height;

        canvas.width =
            width * dpr;

        canvas.height =
            height * dpr;

        canvas.style.width =
            width + "px";

        canvas.style.height =
            height + "px";

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        createNodes();
    }


    /* =====================================================
       CREATE NODES
    ===================================================== */

    function createNodes() {

        nodes = [];

        for (let i = 0; i < NODE_COUNT; i++) {

            nodes.push({

                x: Math.random() * width,

                y: Math.random() * height,

                radius:
                    Math.random() * 2.4 + 1.2,

                vx:
                    (Math.random() - .5) * .28,

                vy:
                    (Math.random() - .5) * .28,

                pulse:
                    Math.random() * Math.PI * 2

            });

        }

    }


    /* =====================================================
       MOUSE
    ===================================================== */

    section.addEventListener(
        "mousemove",
        event => {

            const rect =
                section.getBoundingClientRect();

            mouse.x =
                event.clientX - rect.left;

            mouse.y =
                event.clientY - rect.top;

        },
        { passive: true }
    );


    section.addEventListener(
        "mouseleave",
        () => {

            mouse.x = -1000;
            mouse.y = -1000;

        }
    );


    /* =====================================================
       DRAW
    ===================================================== */

    function draw() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /* MOVE */

        nodes.forEach(node => {

            node.x += node.vx;
            node.y += node.vy;

            node.pulse += .025;


            if (node.x < -20)
                node.x = width + 20;

            if (node.x > width + 20)
                node.x = -20;

            if (node.y < -20)
                node.y = height + 20;

            if (node.y > height + 20)
                node.y = -20;


            /* MOUSE REPULSION */

            const dx =
                node.x - mouse.x;

            const dy =
                node.y - mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );

            if (
                distance < MOUSE_DISTANCE &&
                distance > 0
            ) {

                const force =
                    (MOUSE_DISTANCE - distance)
                    / MOUSE_DISTANCE;

                node.x +=
                    (dx / distance) *
                    force *
                    1.5;

                node.y +=
                    (dy / distance) *
                    force *
                    1.5;

            }

        });


        /* CONNECTIONS */

        for (
            let i = 0;
            i < nodes.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < nodes.length;
                j++
            ) {

                const a = nodes[i];
                const b = nodes[j];

                const dx =
                    a.x - b.x;

                const dy =
                    a.y - b.y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (
                    distance <
                    CONNECTION_DISTANCE
                ) {

                    const opacity =
                        1 -
                        distance /
                        CONNECTION_DISTANCE;


                    ctx.beginPath();

                    ctx.moveTo(
                        a.x,
                        a.y
                    );

                    ctx.lineTo(
                        b.x,
                        b.y
                    );

                    ctx.strokeStyle =
                        `rgba(8,8,8,${opacity * .13})`;

                    ctx.lineWidth = .7;

                    ctx.stroke();

                }

            }

        }


        /* NODES */

        nodes.forEach(node => {

            const pulse =
                Math.sin(node.pulse) * .7;


            ctx.beginPath();

            ctx.arc(
                node.x,
                node.y,
                node.radius + pulse,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(8,8,8,.42)";

            ctx.fill();


            /* NODE GLOW */

            ctx.beginPath();

            ctx.arc(
                node.x,
                node.y,
                node.radius * 4,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(8,8,8,.035)";

            ctx.fill();

        });


        /* MOUSE NETWORK */

        if (mouse.x > -500) {

            nodes.forEach(node => {

                const dx =
                    node.x - mouse.x;

                const dy =
                    node.y - mouse.y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (
                    distance <
                    MOUSE_DISTANCE
                ) {

                    const opacity =
                        1 -
                        distance /
                        MOUSE_DISTANCE;


                    ctx.beginPath();

                    ctx.moveTo(
                        node.x,
                        node.y
                    );

                    ctx.lineTo(
                        mouse.x,
                        mouse.y
                    );

                    ctx.strokeStyle =
                        `rgba(8,8,8,${opacity * .22})`;

                    ctx.lineWidth = 1;

                    ctx.stroke();

                }

            });


            /* MOUSE NODE */

            ctx.beginPath();

            ctx.arc(
                mouse.x,
                mouse.y,
                4,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(8,8,8,.8)";

            ctx.fill();

        }


        requestAnimationFrame(draw);

    }


    /* =====================================================
       START
    ===================================================== */

    resizeCanvas();

    draw();


    window.addEventListener(
        "resize",
        resizeCanvas,
        { passive: true }
    );

});
