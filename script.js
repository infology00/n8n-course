// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// ======================================================
// DOM READY
// ======================================================

document.addEventListener("DOMContentLoaded", () => {


    // ==================================================
    // MEGA MENU
    // ==================================================

    const megaParent = document.querySelector(".mega-parent");
    const megaMenu = document.querySelector(".mega-menu");

    if (megaParent && megaMenu) {

        let closeTimer;

        megaParent.addEventListener("mouseenter", () => {

            clearTimeout(closeTimer);

            megaMenu.classList.add("active");

        });

        megaParent.addEventListener("mouseleave", () => {

            closeTimer = setTimeout(() => {

                megaMenu.classList.remove("active");

            }, 200);

        });

        megaMenu.addEventListener("mouseenter", () => {

            clearTimeout(closeTimer);

            megaMenu.classList.add("active");

        });

        megaMenu.addEventListener("mouseleave", () => {

            closeTimer = setTimeout(() => {

                megaMenu.classList.remove("active");

            }, 200);

        });

    }


    // ==================================================
    // MOBILE MENU
    // ==================================================

    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }


    // ==================================================
    // NAVBAR SCROLL
    // ==================================================

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        };

        window.addEventListener("scroll", updateNavbar);

        updateNavbar();

    }


    // ======================================================
    // WORKFLOW BUILDER
    // Category → Platform → Automation → Canvas
    // ======================================================

    const categoryView = document.getElementById("categoryView");
    const platformView = document.getElementById("platformView");
    const automationView = document.getElementById("automationView");

    const platformList = document.getElementById("platformList");
    const automationList = document.getElementById("automationList");

    const platformTitle = document.getElementById("platformTitle");
    const automationTitle = document.getElementById("automationTitle");

    const backToCategories =
        document.getElementById("backToCategories");

    const backToPlatforms =
        document.getElementById("backToPlatforms");

    const canvas =
        document.getElementById("workflowCanvas");

    const canvasNodes =
        document.getElementById("canvasNodes");

    const workflowSvg =
        document.getElementById("workflowSvg");

    const canvasEmpty =
        document.getElementById("canvasEmpty");

    const nodeCounter =
        document.getElementById("nodeCounter");

    const clearWorkflow =
        document.getElementById("clearWorkflow");


    // ======================================================
    // CHECK WORKFLOW ELEMENTS
    // ======================================================

    if (
        !categoryView ||
        !platformView ||
        !automationView ||
        !platformList ||
        !automationList ||
        !platformTitle ||
        !automationTitle ||
        !canvas ||
        !canvasNodes ||
        !workflowSvg ||
        !canvasEmpty ||
        !nodeCounter
    ) {

        console.warn(
            "AWSZ Workflow Builder: Required HTML elements are missing."
        );

        return;

    }


    // ======================================================
    // CATEGORY DATA
    // ======================================================

    const categories = {

        social: {

            title: "Social Media Automation",

            platforms: [

                ["Facebook", "fa-brands fa-facebook-f"],

                ["Instagram", "fa-brands fa-instagram"],

                ["LinkedIn", "fa-brands fa-linkedin-in"],

                ["YouTube", "fa-brands fa-youtube"]

            ]

        },


        crm: {

            title: "CRM Automation",

            platforms: [

                ["GoHighLevel", "fa-solid fa-g"],

                ["HubSpot", "fa-brands fa-hubspot"],

                ["Zoho CRM", "fa-solid fa-cloud"],

                ["Pipedrive", "fa-solid fa-chart-line"]

            ]

        },


        scraping: {

            title: "Data Scraping",

            platforms: [

                ["Google Maps", "fa-solid fa-map-location-dot"],

                ["LinkedIn", "fa-brands fa-linkedin-in"],

                ["Amazon", "fa-brands fa-amazon"],

                ["Websites", "fa-solid fa-globe"]

            ]

        },


        leads: {

            title: "Lead Generation",

            platforms: [

                ["LinkedIn", "fa-brands fa-linkedin-in"],

                ["Apollo", "fa-solid fa-database"],

                ["Google Maps", "fa-solid fa-map-location-dot"],

                ["Email Finder", "fa-solid fa-envelope"]

            ]

        },


        ecommerce: {

            title: "Ecommerce Automation",

            platforms: [

                ["Shopify", "fa-brands fa-shopify"],

                ["WooCommerce", "fa-solid fa-cart-shopping"],

                ["Stripe", "fa-brands fa-stripe"],

                ["Email", "fa-solid fa-envelope"]

            ]

        },


        ai: {

            title: "AI Agents",

            platforms: [

                ["AI Chat Agent", "fa-solid fa-comments"],

                ["Voice AI", "fa-solid fa-phone"],

                ["WhatsApp AI", "fa-brands fa-whatsapp"],

                ["Website AI", "fa-solid fa-robot"]

            ]

        }

    };


    // ======================================================
    // AUTOMATION DATA
    // ======================================================

    const automationData = {


        Facebook: [

            "DM Automation",

            "Lead Ads → CRM",

            "Comment → DM",

            "Auto Reply",

            "Lead Qualification",

            "Content Publishing"

        ],


        Instagram: [

            "DM Automation",

            "Comment → DM",

            "Lead Capture",

            "Schedule Reels",

            "Auto Reply",

            "Instagram → CRM"

        ],


        LinkedIn: [

            "Lead Generation",

            "Connection Tracking",

            "Profile → CRM",

            "Lead Enrichment",

            "Automated Outreach"

        ],


        YouTube: [

            "New Video → Social Post",

            "Video → Email",

            "Subscriber Alert",

            "Comment Monitoring",

            "Lead Capture"

        ],


        GoHighLevel: [

            "Lead → Pipeline",

            "Form → CRM",

            "Missed Call → SMS",

            "Appointment Reminder",

            "Lead Follow-up"

        ],


        HubSpot: [

            "New Lead → CRM",

            "Lead Assignment",

            "Deal Creation",

            "Lead Scoring",

            "Email Follow-up"

        ],


        "Zoho CRM": [

            "New Lead → CRM",

            "Contact Creation",

            "Deal Creation",

            "Lead Assignment",

            "Email Follow-up"

        ],


        Pipedrive: [

            "New Lead → Deal",

            "Deal Assignment",

            "Pipeline Update",

            "Follow-up Reminder",

            "Sales Notification"

        ],


        "Google Maps": [

            "Business Lead Scraping",

            "Extract Phone Numbers",

            "Extract Emails",

            "Save → Google Sheets",

            "Send → CRM"

        ],


        Amazon: [

            "Product Scraping",

            "Price Monitoring",

            "Product Data → Sheets",

            "Review Extraction",

            "Inventory Monitoring"

        ],


        Websites: [

            "Website Scraping",

            "Extract Contact Data",

            "Extract Products",

            "Save → Database",

            "Send → CRM"

        ],


        Apollo: [

            "Lead Search",

            "Lead Enrichment",

            "Email Extraction",

            "Save → CRM",

            "Outreach"

        ],


        "Email Finder": [

            "Find Business Emails",

            "Verify Email",

            "Save → Sheets",

            "Send → CRM",

            "Email Outreach"

        ],


        Shopify: [

            "New Order → CRM",

            "Abandoned Cart",

            "Customer Sync",

            "Inventory Alert",

            "Review Request"

        ],


        WooCommerce: [

            "New Order → CRM",

            "Customer Sync",

            "Abandoned Cart",

            "Inventory Alert",

            "Review Request"

        ],


        Stripe: [

            "New Payment",

            "Payment → CRM",

            "Failed Payment Alert",

            "Subscription Update",

            "Revenue Notification"

        ],


        Email: [

            "New Email → CRM",

            "Email Auto Reply",

            "Lead Email Notification",

            "Email Classification",

            "Follow-up Email"

        ],


        "AI Chat Agent": [

            "Website Chatbot",

            "Lead Qualification",

            "Appointment Booking",

            "Customer Support",

            "CRM Integration"

        ],


        "Voice AI": [

            "AI Receptionist",

            "Inbound Calls",

            "Outbound Calls",

            "Appointment Booking",

            "Call → CRM"

        ],


        "WhatsApp AI": [

            "WhatsApp Chatbot",

            "Lead Qualification",

            "Appointment Booking",

            "Customer Support",

            "CRM Integration"

        ],


        "Website AI": [

            "Website Assistant",

            "Lead Capture",

            "FAQ Automation",

            "Appointment Booking",

            "CRM Integration"

        ]

    };


    // ======================================================
    // REAL WORKFLOW TEMPLATES
    // ======================================================

    const workflowTemplates = {


        // -----------------------------------------------
        // FACEBOOK DM
        // -----------------------------------------------

        "Facebook|DM Automation": [

            {

                type: "trigger",

                platform: "Facebook",

                title: "New DM Received",

                icon: "fa-brands fa-facebook-f"

            },

            {

                type: "action",

                platform: "Facebook",

                title: "Read Message",

                icon: "fa-solid fa-message"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Understand Intent",

                icon: "fa-solid fa-brain"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Qualify Lead",

                icon: "fa-solid fa-filter"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Create Lead",

                icon: "fa-solid fa-user-plus"

            },

            {

                type: "action",

                platform: "Sales Team",

                title: "Notify Sales",

                icon: "fa-solid fa-bell"

            },

            {

                type: "action",

                platform: "Facebook",

                title: "Send Follow-up",

                icon: "fa-solid fa-paper-plane"

            }

        ],


        // -----------------------------------------------
        // FACEBOOK COMMENT → DM
        // -----------------------------------------------

        "Facebook|Comment → DM": [

            {

                type: "trigger",

                platform: "Facebook",

                title: "New Comment",

                icon: "fa-brands fa-facebook-f"

            },

            {

                type: "action",

                platform: "Facebook",

                title: "Detect Keyword",

                icon: "fa-solid fa-magnifying-glass"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Understand Comment",

                icon: "fa-solid fa-brain"

            },

            {

                type: "action",

                platform: "Facebook",

                title: "Send DM",

                icon: "fa-solid fa-message"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Create Lead",

                icon: "fa-solid fa-user-plus"

            }

        ],


        // -----------------------------------------------
        // FACEBOOK LEAD ADS
        // -----------------------------------------------

        "Facebook|Lead Ads → CRM": [

            {

                type: "trigger",

                platform: "Facebook",

                title: "New Lead Ad",

                icon: "fa-brands fa-facebook-f"

            },

            {

                type: "action",

                platform: "Facebook",

                title: "Capture Lead",

                icon: "fa-solid fa-user"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Enrich Lead",

                icon: "fa-solid fa-wand-magic-sparkles"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Create CRM Lead",

                icon: "fa-solid fa-users"

            },

            {

                type: "action",

                platform: "Sales Team",

                title: "Notify Sales",

                icon: "fa-solid fa-bell"

            }

        ],


        // -----------------------------------------------
        // INSTAGRAM DM
        // -----------------------------------------------

        "Instagram|DM Automation": [

            {

                type: "trigger",

                platform: "Instagram",

                title: "New DM Received",

                icon: "fa-brands fa-instagram"

            },

            {

                type: "action",

                platform: "Instagram",

                title: "Read Message",

                icon: "fa-solid fa-message"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Understand Intent",

                icon: "fa-solid fa-brain"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Qualify Lead",

                icon: "fa-solid fa-filter"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Create Lead",

                icon: "fa-solid fa-user-plus"

            },

            {

                type: "action",

                platform: "Instagram",

                title: "Send Follow-up",

                icon: "fa-paper-plane"

            }

        ],


        // -----------------------------------------------
        // LINKEDIN LEAD GENERATION
        // -----------------------------------------------

        "LinkedIn|Lead Generation": [

            {

                type: "trigger",

                platform: "LinkedIn",

                title: "Find Target Lead",

                icon: "fa-brands fa-linkedin-in"

            },

            {

                type: "action",

                platform: "LinkedIn",

                title: "Collect Profile",

                icon: "fa-solid fa-user"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Enrich Lead",

                icon: "fa-solid fa-brain"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Save Lead",

                icon: "fa-solid fa-user-plus"

            },

            {

                type: "action",

                platform: "Sales",

                title: "Start Outreach",

                icon: "fa-solid fa-paper-plane"

            }

        ],


        // -----------------------------------------------
        // GOOGLE MAPS SCRAPING
        // -----------------------------------------------

        "Google Maps|Business Lead Scraping": [

            {

                type: "trigger",

                platform: "Google Maps",

                title: "Search Businesses",

                icon: "fa-solid fa-map-location-dot"

            },

            {

                type: "action",

                platform: "Scraper",

                title: "Extract Business Data",

                icon: "fa-solid fa-database"

            },

            {

                type: "action",

                platform: "Scraper",

                title: "Extract Phone & Email",

                icon: "fa-solid fa-phone"

            },

            {

                type: "action",

                platform: "Google Sheets",

                title: "Save Leads",

                icon: "fa-solid fa-table"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Send Leads to CRM",

                icon: "fa-solid fa-user-plus"

            }

        ],


        // -----------------------------------------------
        // SHOPIFY ORDER
        // -----------------------------------------------

        "Shopify|New Order → CRM": [

            {

                type: "trigger",

                platform: "Shopify",

                title: "New Order",

                icon: "fa-brands fa-shopify"

            },

            {

                type: "action",

                platform: "Shopify",

                title: "Read Customer Data",

                icon: "fa-solid fa-user"

            },

            {

                type: "action",

                platform: "Automation",

                title: "Process Order",

                icon: "fa-solid fa-gears"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Create Customer",

                icon: "fa-solid fa-user-plus"

            },

            {

                type: "action",

                platform: "Email",

                title: "Send Confirmation",

                icon: "fa-solid fa-envelope"

            }

        ],


        // -----------------------------------------------
        // AI CHAT AGENT
        // -----------------------------------------------

        "AI Chat Agent|Website Chatbot": [

            {

                type: "trigger",

                platform: "Website",

                title: "Visitor Starts Chat",

                icon: "fa-solid fa-comments"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Understand Question",

                icon: "fa-solid fa-brain"

            },

            {

                type: "ai",

                platform: "AI Agent",

                title: "Generate Response",

                icon: "fa-solid fa-wand-magic-sparkles"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Save Conversation",

                icon: "fa-solid fa-user-plus"

            },

            {

                type: "action",

                platform: "Website",

                title: "Reply to Visitor",

                icon: "fa-solid fa-message"

            }

        ],


        // -----------------------------------------------
        // VOICE AI
        // -----------------------------------------------

        "Voice AI|AI Receptionist": [

            {

                type: "trigger",

                platform: "Phone",

                title: "Incoming Call",

                icon: "fa-solid fa-phone"

            },

            {

                type: "ai",

                platform: "Voice AI",

                title: "Understand Caller",

                icon: "fa-solid fa-brain"

            },

            {

                type: "ai",

                platform: "Voice AI",

                title: "Handle Conversation",

                icon: "fa-solid fa-microphone"

            },

            {

                type: "crm",

                platform: "CRM",

                title: "Create / Update Lead",

                icon: "fa-solid fa-user-plus"

            },

            {

                type: "action",

                platform: "Calendar",

                title: "Book Appointment",

                icon: "fa-solid fa-calendar"

            }

        ]

    };


    // ======================================================
    // SHOW VIEW
    // ======================================================

    function showView(view) {

        categoryView.classList.add("hidden");

        platformView.classList.add("hidden");

        automationView.classList.add("hidden");

        if (view) {

            view.classList.remove("hidden");

        }

    }


    // ======================================================
    // CATEGORY CLICK
    // ======================================================

    document
        .querySelectorAll(".workflow-category")
        .forEach(button => {

            button.addEventListener("click", () => {

                const category =
                    button.dataset.category;

                document
                    .querySelectorAll(".workflow-category")
                    .forEach(item => {

                        item.classList.remove("active");

                    });

                button.classList.add("active");

                loadPlatforms(category);

            });

        });


    // ======================================================
    // LOAD PLATFORMS
    // ======================================================

    function loadPlatforms(category) {

        const data = categories[category];

        if (!data) return;

        platformTitle.textContent =
            data.title;

        platformList.innerHTML = "";

        data.platforms.forEach(([name, icon]) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "workflow-platform";

            button.innerHTML = `

                <div class="platform-icon">

                    <i class="${icon}"></i>

                </div>

                <div>

                    <strong>${name}</strong>

                    <small>
                        Explore automations
                    </small>

                </div>

                <i
                    class="fa-solid fa-chevron-right"
                    style="margin-left:auto;color:#555;">
                </i>

            `;

            button.addEventListener(
                "click",
                () => loadAutomations(name)
            );

            platformList.appendChild(button);

        });

        showView(platformView);

    }


    // ======================================================
    // LOAD AUTOMATIONS
    // ======================================================

    function loadAutomations(platform) {

        const list =
            automationData[platform] || [];

        automationTitle.textContent =
            platform + " Automations";

        automationList.innerHTML = "";

        if (!list.length) {

            const empty =
                document.createElement("div");

            empty.style.color = "#777";

            empty.style.fontSize = "12px";

            empty.textContent =
                "No automations available yet.";

            automationList.appendChild(empty);

            showView(automationView);

            return;

        }


        list.forEach(automation => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "workflow-automation";

            button.innerHTML = `

                <div class="automation-icon">

                    <i class="fa-solid fa-bolt"></i>

                </div>

                <div>

                    <strong>
                        ${automation}
                    </strong>

                    <small>
                        Build workflow
                    </small>

                </div>

                <i
                    class="fa-solid fa-plus"
                    style="margin-left:auto;color:#555;">
                </i>

            `;

            button.addEventListener(
                "click",
                () => {

                    buildWorkflow(
                        platform,
                        automation
                    );

                }
            );

            automationList.appendChild(button);

        });

        showView(automationView);

    }


    // ======================================================
    // BUILD WORKFLOW
    // ======================================================

    function buildWorkflow(
        platform,
        automation
    ) {

        const key =
            `${platform}|${automation}`;

        const template =
            workflowTemplates[key];

        clearCanvas(false);

        if (template) {

            nodeCounter.textContent =
                `${template.length} nodes`;

            animateWorkflow(template);

        } else {

            showDemoWorkflow(
                platform,
                automation
            );

        }

    }


    // ======================================================
    // DEMO WORKFLOW
    // ======================================================

    function showDemoWorkflow(
        platform,
        automation
    ) {

        const template = [

            {

                type: "trigger",

                platform: platform,

                title: automation,

                icon: "fa-solid fa-bolt"

            },

            {

                type: "action",

                platform: "Automation",

                title: "Process Data",

                icon: "fa-solid fa-gears"

            },

            {

                type: "ai",

                platform: "AI",

                title: "AI Processing",

                icon: "fa-solid fa-brain"

            },

            {

                type: "action",

                platform: "System",

                title: "Complete Action",

                icon: "fa-solid fa-check"

            }

        ];

        canvasEmpty.classList.add("hidden");

        nodeCounter.textContent =
            `${template.length} nodes`;

        animateWorkflow(template);

    }


    // ======================================================
    // ANIMATE WORKFLOW
    // ======================================================

    function animateWorkflow(template) {

        template.forEach((node, index) => {

            setTimeout(() => {

                createNode(
                    node,
                    index
                );

            }, index * 550);

        });

    }


    // ======================================================
    // CREATE NODE
    // ======================================================

    function createNode(
        node,
        index
    ) {

        const element =
            document.createElement("div");

        element.className =
            "workflow-node";


        // -----------------------------------------------
        // NODE POSITION
        // -----------------------------------------------

        const x =
            100 +
            (index % 2) * 350;

        const y =
            90 +
            Math.floor(index / 2) * 150;


        element.style.left =
            `${x}px`;

        element.style.top =
            `${y}px`;


        // -----------------------------------------------
        // NODE CONTENT
        // -----------------------------------------------

        element.innerHTML = `

            <div class="workflow-node-icon">

                <i class="${node.icon}"></i>

            </div>

            <div>

                <small>
                    ${node.platform}
                </small>

                <strong>
                    ${node.title}
                </strong>

            </div>

        `;


        canvasNodes.appendChild(
            element
        );


        // -----------------------------------------------
        // CONNECT PREVIOUS NODE
        // -----------------------------------------------

        if (index > 0) {

            setTimeout(() => {

                drawConnection(
                    index - 1,
                    index
                );

            }, 250);

        }


        // -----------------------------------------------
        // AUTO SCROLL
        // -----------------------------------------------

        setTimeout(() => {

            const targetY =
                Math.max(
                    0,
                    y - 180
                );

            canvas.scrollTo({

                top: targetY,

                behavior: "smooth"

            });

        }, 350);

    }


    // ======================================================
    // DRAW CONNECTION
    // ======================================================

    function drawConnection(
        fromIndex,
        toIndex
    ) {

        const nodes =
            canvasNodes.querySelectorAll(
                ".workflow-node"
            );

        const from =
            nodes[fromIndex];

        const to =
            nodes[toIndex];

        if (!from || !to) return;


        const x1 =
            parseFloat(
                from.style.left
            ) + 205;

        const y1 =
            parseFloat(
                from.style.top
            ) +
            (from.offsetHeight / 2);


        const x2 =
            parseFloat(
                to.style.left
            );

        const y2 =
            parseFloat(
                to.style.top
            ) +
            (to.offsetHeight / 2);


        // -----------------------------------------------
        // CREATE SVG PATH
        // -----------------------------------------------

        const path =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );


        const curve =
            Math.max(
                80,
                Math.abs(x2 - x1) * 0.4
            );


        const pathData = `

            M ${x1} ${y1}

            C
            ${x1 + curve} ${y1},
            ${x2 - curve} ${y2},
            ${x2} ${y2}

        `;


        path.setAttribute(
            "d",
            pathData
        );


        path.classList.add(
            "workflow-line"
        );


        workflowSvg.appendChild(
            path
        );


        // -----------------------------------------------
        // ANIMATE LINE
        // -----------------------------------------------

        try {

            const length =
                path.getTotalLength();

            path.style.strokeDasharray =
                length;

            path.style.strokeDashoffset =
                length;

            requestAnimationFrame(() => {

                path.style.transition =
                    "stroke-dashoffset .7s ease";

                path.style.strokeDashoffset =
                    "0";

            });

        } catch (error) {

            console.warn(
                "Workflow connection animation error:",
                error
            );

        }

    }


    // ======================================================
    // BACK TO CATEGORIES
    // ======================================================

    if (backToCategories) {

        backToCategories.addEventListener(
            "click",
            () => {

                showView(
                    categoryView
                );

            }
        );

    }


    // ======================================================
    // BACK TO PLATFORMS
    // ======================================================

    if (backToPlatforms) {

        backToPlatforms.addEventListener(
            "click",
            () => {

                showView(
                    platformView
                );

            }
        );

    }


    // ======================================================
    // CLEAR CANVAS
    // ======================================================

    function clearCanvas(
        resetView = true
    ) {

        canvasNodes.innerHTML = "";

        workflowSvg.innerHTML = "";

        canvasEmpty.classList.remove(
            "hidden"
        );

        nodeCounter.textContent =
            "0 nodes";


        if (canvas) {

            canvas.scrollTo({

                top: 0,

                left: 0,

                behavior: "smooth"

            });

        }


        if (resetView) {

            showView(
                categoryView
            );

            document
                .querySelectorAll(
                    ".workflow-category"
                )
                .forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

        }

    }


    // ======================================================
    // CLEAR BUTTON
    // ======================================================

    if (clearWorkflow) {

        clearWorkflow.addEventListener(
            "click",
            () => {

                clearCanvas(true);

            }
        );

    }


    // ======================================================
    // INITIAL STATE
    // ======================================================

    showView(
        categoryView
    );


    // ======================================================
    // INITIAL CANVAS STATE
    // ======================================================

    canvasEmpty.classList.remove(
        "hidden"
    );

    nodeCounter.textContent =
        "0 nodes";


});
