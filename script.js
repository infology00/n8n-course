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
// =====================================
// AWSZ WEBSITE SCRIPT
// PART 3 / 4
// WORKFLOW BUILDER
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // WORKFLOW DATA
    // =====================================

    const workflowData = {

        "CRM Automation": {

            description: "Leads, pipelines & customers",

            platforms: [
                "GoHighLevel",
                "HubSpot",
                "Zoho CRM",
                "Bitrix24",
                "Brevo"
            ],

            actions: [
                "Create Lead",
                "Update Contact",
                "Move Pipeline Stage",
                "Send Email",
                "Send SMS",
                "Assign Sales Rep",
                "Add Tag"
            ]

        },


        "Data Scraping": {

            description: "Extract & process data",

            platforms: [
                "Apify",
                "Google",
                "LinkedIn",
                "Alibaba",
                "Websites"
            ],

            actions: [
                "Scrape Website",
                "Extract Products",
                "Extract Leads",
                "Collect Emails",
                "Clean Data",
                "Save to Google Sheets",
                "Send Data to CRM"
            ]

        },


        "Lead Generation": {

            description: "Find & qualify prospects",

            platforms: [
                "Apollo",
                "LinkedIn",
                "Google Maps",
                "Facebook",
                "Instagram"
            ],

            actions: [
                "Find Leads",
                "Enrich Lead",
                "Verify Email",
                "Score Lead",
                "Add to CRM",
                "Send Outreach"
            ]

        },


        "Ecommerce Automation": {

            description: "Products, orders & customers",

            platforms: [
                "Shopify",
                "WooCommerce",
                "Amazon",
                "Stripe",
                "Google Sheets"
            ],

            actions: [
                "Create Product",
                "Update Product",
                "Sync Inventory",
                "Process Order",
                "Send Order Email",
                "Update Customer",
                "Create Invoice"
            ]

        }

    };


    // =====================================
    // FIND WORKFLOW CONTAINER
    // =====================================

    const workflowShell =
        document.querySelector(".workflow-shell");

    if (!workflowShell) {

        console.warn(
            "AWSZ: .workflow-shell not found."
        );

        return;

    }


    // =====================================
    // FIND WORKFLOW CARDS
    // =====================================

    let workflowCards =
        workflowShell.querySelectorAll(
            ".workflow-category, .workflow-card, .automation-card"
        );


    // =====================================
    // FALLBACK:
    // FIND CARDS BY TEXT
    // =====================================

    if (!workflowCards.length) {

        const allElements =
            workflowShell.querySelectorAll(
                "div, article, li, button"
            );


        workflowCards =
            Array.from(allElements).filter(
                element => {

                    const text =
                        element.innerText
                            ?.trim();

                    return Object.keys(workflowData)
                        .some(category =>
                            text === category
                        );

                }
            );

    }


    // =====================================
    // WORKFLOW CANVAS
    // =====================================

    const canvas =
        workflowShell.querySelector(
            ".workflow-canvas, .workflow-builder-canvas, .workflow-main"
        );


    // =====================================
    // NODE COUNT
    // =====================================

    const nodeCount =
        workflowShell.querySelector(
            ".node-count, .nodes-count"
        );


    // =====================================
    // CLEAR BUTTON
    // =====================================

    const clearButton =
        workflowShell.querySelector(
            ".workflow-clear, .clear-workflow, button"
        );


    // =====================================
    // SELECTED WORKFLOW
    // =====================================

    let selectedCategory = null;
    let selectedPlatform = null;
    let selectedAction = null;


    // =====================================
    // UPDATE NODE COUNT
    // =====================================

    function updateNodeCount() {

        if (!nodeCount) return;

        let count = 0;

        if (selectedCategory)
            count++;

        if (selectedPlatform)
            count++;

        if (selectedAction)
            count++;


        nodeCount.textContent =
            `${count} node${count === 1 ? "" : "s"}`;

    }


    // =====================================
    // FIND CATEGORY
    // =====================================

    function getCategoryFromElement(element) {

        const text =
            element.innerText
                ?.trim();

        if (!text) return null;


        return Object.keys(workflowData)
            .find(category => {

                return (
                    text === category ||
                    text.startsWith(category)
                );

            }) || null;

    }


    // =====================================
    // CREATE WORKFLOW UI
    // =====================================

    function renderWorkflow() {

        if (!canvas) return;


        canvas.innerHTML = "";


        // =====================================
        // EMPTY STATE
        // =====================================

        if (!selectedCategory) {

            canvas.innerHTML = `

                <div class="workflow-empty-state">

                    <div class="workflow-empty-icon">
                        <span>⚡</span>
                    </div>

                    <h3>Start Building</h3>

                    <p>
                        Select a platform and automation
                        from the panel.
                    </p>

                </div>

            `;

            updateNodeCount();

            return;

        }


        const data =
            workflowData[selectedCategory];


        // =====================================
        // HEADER
        // =====================================

        const header =
            document.createElement("div");

        header.className =
            "workflow-selection-header";


        header.innerHTML = `

            <div>

                <span class="workflow-label">
                    SELECTED AUTOMATION
                </span>

                <h3>
                    ${selectedCategory}
                </h3>

                <p>
                    ${data.description}
                </p>

            </div>

        `;


        canvas.appendChild(header);


        // =====================================
        // PLATFORM SECTION
        // =====================================

        const platformTitle =
            document.createElement("div");

        platformTitle.className =
            "workflow-step-title";

        platformTitle.textContent =
            "01 — Choose Platform";


        canvas.appendChild(platformTitle);


        const platformGrid =
            document.createElement("div");

        platformGrid.className =
            "workflow-options";


        data.platforms.forEach(platform => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "workflow-option";


            if (
                selectedPlatform === platform
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.innerHTML = `

                <span class="workflow-option-icon">
                    ${getPlatformIcon(platform)}
                </span>

                <span>
                    ${platform}
                </span>

            `;


            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();

                    selectedPlatform =
                        platform;

                    selectedAction =
                        null;

                    renderWorkflow();

                }
            );


            platformGrid.appendChild(button);

        });


        canvas.appendChild(platformGrid);


        // =====================================
        // ACTION SECTION
        // =====================================

        if (selectedPlatform) {

            const actionTitle =
                document.createElement("div");

            actionTitle.className =
                "workflow-step-title";

            actionTitle.textContent =
                "02 — Choose Automation";


            canvas.appendChild(
                actionTitle
            );


            const actionGrid =
                document.createElement("div");

            actionGrid.className =
                "workflow-options";


            data.actions.forEach(action => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "workflow-option";


                if (
                    selectedAction === action
                ) {

                    button.classList.add(
                        "selected"
                    );

                }


                button.innerHTML = `

                    <span class="workflow-option-icon">
                        ⚡
                    </span>

                    <span>
                        ${action}
                    </span>

                `;


                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        event.stopPropagation();

                        selectedAction =
                            action;

                        renderWorkflow();

                    }
                );


                actionGrid.appendChild(
                    button
                );

            });


            canvas.appendChild(
                actionGrid
            );

        }


        // =====================================
        // FINAL WORKFLOW
        // =====================================

        if (
            selectedCategory &&
            selectedPlatform &&
            selectedAction
        ) {

            const finalBox =
                document.createElement("div");

            finalBox.className =
                "workflow-final";


            finalBox.innerHTML = `

                <div class="workflow-final-line"></div>

                <span class="workflow-label">
                    WORKFLOW READY
                </span>

                <h3>
                    ${selectedAction}
                </h3>

                <p>
                    ${selectedCategory}
                    →
                    ${selectedPlatform}
                    →
                    ${selectedAction}
                </p>

                <button
                    type="button"
                    class="workflow-build-btn"
                >
                    Add to Workflow
                    <span>→</span>
                </button>

            `;


            canvas.appendChild(
                finalBox
            );


            const buildButton =
                finalBox.querySelector(
                    ".workflow-build-btn"
                );


            buildButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();

                    showWorkflowAdded();

                }
            );

        }


        updateNodeCount();

    }


    // =====================================
    // PLATFORM ICON
    // =====================================

    function getPlatformIcon(platform) {

        const icons = {

            "GoHighLevel": "G",

            "HubSpot": "H",

            "Zoho CRM": "Z",

            "Bitrix24": "B",

            "Brevo": "B",

            "Apify": "A",

            "Google": "G",

            "LinkedIn": "in",

            "Alibaba": "A",

            "Websites": "W",

            "Apollo": "A",

            "Google Maps": "M",

            "Facebook": "f",

            "Instagram": "◎",

            "Shopify": "S",

            "WooCommerce": "W",

            "Amazon": "a",

            "Stripe": "S",

            "Google Sheets": "G"

        };


        return icons[platform] || "•";

    }


    // =====================================
    // SHOW WORKFLOW ADDED
    // =====================================

    function showWorkflowAdded() {

        const notification =
            document.createElement("div");


        notification.className =
            "workflow-notification";


        notification.innerHTML = `

            <strong>
                Workflow Added
            </strong>

            <span>
                ${selectedPlatform}
                →
                ${selectedAction}
            </span>

        `;


        document.body.appendChild(
            notification
        );


        setTimeout(() => {

            notification.classList.add(
                "show"
            );

        }, 20);


        setTimeout(() => {

            notification.classList.remove(
                "show"
            );


            setTimeout(() => {

                notification.remove();

            }, 300);

        }, 2500);

    }


    // =====================================
    // CLICK HANDLER
    // =====================================

    workflowCards.forEach(card => {

        const category =
            getCategoryFromElement(card);


        if (!category) return;


        // Force clickable

        card.style.cursor =
            "pointer";


        card.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                selectedCategory =
                    category;

                selectedPlatform =
                    null;

                selectedAction =
                    null;


                // Remove active

                workflowCards.forEach(
                    item => {

                        item.classList.remove(
                            "active",
                            "selected"
                        );

                    }
                );


                // Add active

                card.classList.add(
                    "active",
                    "selected"
                );


                renderWorkflow();

            }
        );

    });


    // =====================================
    // CAPTURE CLICK FALLBACK
    // =====================================

    document.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "div, article, li, button, a"
                );


            if (!target) return;


            const category =
                getCategoryFromElement(
                    target
                );


            if (!category) return;


            if (
                !workflowShell.contains(
                    target
                )
            ) return;


            selectedCategory =
                category;

            selectedPlatform =
                null;

            selectedAction =
                null;


            workflowCards.forEach(
                item => {

                    item.classList.remove(
                        "active",
                        "selected"
                    );

                }
            );


            target.classList.add(
                "active",
                "selected"
            );


            renderWorkflow();

        },
        true
    );


    // =====================================
    // CLEAR WORKFLOW
    // =====================================

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                selectedCategory = null;

                selectedPlatform = null;

                selectedAction = null;


                workflowCards.forEach(
                    card => {

                        card.classList.remove(
                            "active",
                            "selected"
                        );

                    }
                );


                renderWorkflow();

            }
        );

    }


    // =====================================
    // INITIAL RENDER
    // =====================================

    renderWorkflow();

});
// =====================================
// AWSZ WEBSITE SCRIPT
// PART 4 / 4
// =====================================

document.addEventListener("DOMContentLoaded", () => {


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


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        });


    // =====================================
    // VIDEO IMAGE LOAD
    // =====================================

    document
        .querySelectorAll(".video-card img")
        .forEach(image => {

            image.addEventListener(
                "load",
                () => {

                    if (
                        image.parentElement
                    ) {

                        image.parentElement
                            .classList
                            .add("loaded");

                    }

                }
            );

        });


    // =====================================
    // HERO VIDEO
    // =====================================

    const heroVideo =
        document.querySelector(
            ".hero video"
        );


    if (heroVideo) {

        heroVideo.muted =
            true;

        heroVideo.playsInline =
            true;


        const playVideo = () => {

            const promise =
                heroVideo.play();


            if (
                promise &&
                typeof promise.catch ===
                "function"
            ) {

                promise.catch(
                    () => {}
                );

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
            `
            .showcase-content,
            .video-card,
            .workflow-shell
            `
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("visible");


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    }


    // =====================================
    // WORKFLOW CARD HOVER
    // =====================================

    document
        .querySelectorAll(
            `
            .workflow-category,
            .workflow-card,
            .automation-card
            `
        )
        .forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "hovered"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "hovered"
                    );

                }
            );

        });


    // =====================================
    // PREVENT DEAD BUTTON CLICKS
    // =====================================

    document
        .querySelectorAll(
            `
            .workflow-category,
            .workflow-card,
            .automation-card
            `
        )
        .forEach(card => {

            card.setAttribute(
                "role",
                "button"
            );

            card.setAttribute(
                "tabindex",
                "0"
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        card.click();

                    }

                }
            );

        });


});    
});
