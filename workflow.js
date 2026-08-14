document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       ELEMENTS
    ========================================== */

    const categoryView =
        document.getElementById("categoryView");

    const platformView =
        document.getElementById("platformView");

    const automationView =
        document.getElementById("automationView");

    const platformList =
        document.getElementById("platformList");

    const automationList =
        document.getElementById("automationList");

    const platformTitle =
        document.getElementById("platformTitle");

    const automationTitle =
        document.getElementById("automationTitle");

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

    const backToCategories =
        document.getElementById("backToCategories");

    const backToPlatforms =
        document.getElementById("backToPlatforms");


    /* ==========================================
       SAFETY CHECK
    ========================================== */

    if (
        !categoryView ||
        !platformView ||
        !automationView ||
        !canvas ||
        !canvasNodes ||
        !workflowSvg
    ) {
        console.warn(
            "Workflow Builder: Required HTML elements not found."
        );

        return;
    }


    /* ==========================================
       DATA
    ========================================== */

    const categories = {

        social: {

            title: "Social Media",

            platforms: [

                ["Facebook", "fa-brands fa-facebook-f"],

                ["Instagram", "fa-brands fa-instagram"],

                ["LinkedIn", "fa-brands fa-linkedin-in"],

                ["YouTube", "fa-brands fa-youtube"]

            ]

        },


        crm: {

            title: "CRM Systems",

            platforms: [

                ["GoHighLevel", "fa-solid fa-layer-group"],

                ["HubSpot", "fa-brands fa-hubspot"],

                ["Zoho CRM", "fa-solid fa-users"],

                ["Salesforce", "fa-brands fa-salesforce"]

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

                ["Apollo", "fa-solid fa-crosshairs"],

                ["LinkedIn", "fa-brands fa-linkedin-in"],

                ["Google Maps", "fa-solid fa-map-location-dot"],

                ["Email Finder", "fa-solid fa-envelope"]

            ]

        },


        ecommerce: {

            title: "Ecommerce",

            platforms: [

                ["Shopify", "fa-brands fa-shopify"],

                ["WooCommerce", "fa-brands fa-wordpress"],

                ["Stripe", "fa-brands fa-stripe"],

                ["Klaviyo", "fa-solid fa-envelope"]

            ]

        },


        ai: {

            title: "AI Agents",

            platforms: [

                ["ChatGPT", "fa-solid fa-robot"],

                ["Claude", "fa-solid fa-brain"],

                ["Retell AI", "fa-solid fa-phone"],

                ["Voice AI", "fa-solid fa-microphone"]

            ]

        }

    };


    /* ==========================================
       AUTOMATIONS
    ========================================== */

    const automationData = {

        Facebook: [

            {

                name: "DM Automation",

                icon: "fa-solid fa-message",

                workflow: [

                    [
                        "trigger",
                        "Facebook",
                        "New DM",
                        "fa-brands fa-facebook-f"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Understand Message",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "action",
                        "AI Agent",
                        "Generate Reply",
                        "fa-solid fa-comment-dots"
                    ],

                    [
                        "action",
                        "Facebook",
                        "Send Reply",
                        "fa-solid fa-paper-plane"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Save Conversation",
                        "fa-solid fa-users"
                    ]

                ]

            },


            {

                name: "Comment → DM",

                icon: "fa-solid fa-comments",

                workflow: [

                    [
                        "trigger",
                        "Facebook",
                        "New Comment",
                        "fa-brands fa-facebook-f"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Analyze Comment",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "action",
                        "Facebook",
                        "Send DM",
                        "fa-solid fa-message"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Save Lead",
                        "fa-solid fa-user-plus"
                    ]

                ]

            },


            {

                name: "Lead Ads → CRM",

                icon: "fa-solid fa-user-plus",

                workflow: [

                    [
                        "trigger",
                        "Facebook",
                        "New Lead Ad",
                        "fa-brands fa-facebook-f"
                    ],

                    [
                        "action",
                        "Facebook",
                        "Capture Lead",
                        "fa-solid fa-user"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Qualify Lead",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Create Lead",
                        "fa-solid fa-users"
                    ],

                    [
                        "action",
                        "Sales Team",
                        "Notify Sales",
                        "fa-solid fa-bell"
                    ]

                ]

            }

        ],


        Instagram: [

            {

                name: "Instagram DM Agent",

                icon: "fa-solid fa-message",

                workflow: [

                    [
                        "trigger",
                        "Instagram",
                        "New DM",
                        "fa-brands fa-instagram"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Understand Intent",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "action",
                        "AI Agent",
                        "Generate Response",
                        "fa-solid fa-comment-dots"
                    ],

                    [
                        "action",
                        "Instagram",
                        "Send DM",
                        "fa-solid fa-paper-plane"
                    ]

                ]

            },


            {

                name: "Comment Automation",

                icon: "fa-solid fa-comments",

                workflow: [

                    [
                        "trigger",
                        "Instagram",
                        "New Comment",
                        "fa-brands fa-instagram"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Analyze Comment",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "action",
                        "Instagram",
                        "Send Reply",
                        "fa-solid fa-reply"
                    ]

                ]

            }

        ],


        LinkedIn: [

            {

                name: "Lead Generation",

                icon: "fa-solid fa-user-plus",

                workflow: [

                    [
                        "trigger",
                        "LinkedIn",
                        "New Prospect",
                        "fa-brands fa-linkedin-in"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Research Prospect",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "action",
                        "LinkedIn",
                        "Send Connection",
                        "fa-solid fa-user-plus"
                    ],

                    [
                        "action",
                        "LinkedIn",
                        "Send Message",
                        "fa-solid fa-message"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Create Lead",
                        "fa-solid fa-users"
                    ]

                ]

            }

        ],


        YouTube: [

            {

                name: "New Video → Social",

                icon: "fa-solid fa-video",

                workflow: [

                    [
                        "trigger",
                        "YouTube",
                        "New Video",
                        "fa-brands fa-youtube"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Create Content",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "action",
                        "Social Media",
                        "Publish Post",
                        "fa-solid fa-share-nodes"
                    ]

                ]

            }

        ],


        GoHighLevel: [

            {

                name: "New Lead → Pipeline",

                icon: "fa-solid fa-user-plus",

                workflow: [

                    [
                        "trigger",
                        "GHL",
                        "New Lead",
                        "fa-solid fa-user-plus"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Qualify Lead",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "crm",
                        "GHL",
                        "Create Opportunity",
                        "fa-solid fa-layer-group"
                    ],

                    [
                        "action",
                        "Sales",
                        "Notify Team",
                        "fa-solid fa-bell"
                    ]

                ]

            }

        ],


        HubSpot: [

            {

                name: "Lead → CRM",

                icon: "fa-solid fa-users",

                workflow: [

                    [
                        "trigger",
                        "HubSpot",
                        "New Lead",
                        "fa-brands fa-hubspot"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Score Lead",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "crm",
                        "HubSpot",
                        "Create Contact",
                        "fa-solid fa-users"
                    ],

                    [
                        "action",
                        "Sales",
                        "Notify Sales",
                        "fa-solid fa-bell"
                    ]

                ]

            }

        ],


        "Google Maps": [

            {

                name: "Scrape Business Leads",

                icon: "fa-solid fa-map-location-dot",

                workflow: [

                    [
                        "trigger",
                        "Google Maps",
                        "Search Businesses",
                        "fa-solid fa-map-location-dot"
                    ],

                    [
                        "action",
                        "Scraper",
                        "Extract Data",
                        "fa-solid fa-spider"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Clean Data",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Save Leads",
                        "fa-solid fa-users"
                    ]

                ]

            }

        ],


        Apollo: [

            {

                name: "Find Prospects",

                icon: "fa-solid fa-crosshairs",

                workflow: [

                    [
                        "trigger",
                        "Apollo",
                        "Find Prospects",
                        "fa-solid fa-crosshairs"
                    ],

                    [
                        "action",
                        "Apollo",
                        "Export Leads",
                        "fa-solid fa-download"
                    ],

                    [
                        "ai",
                        "AI Agent",
                        "Enrich Leads",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Create Leads",
                        "fa-solid fa-users"
                    ]

                ]

            }

        ],


        Shopify: [

            {

                name: "New Order Automation",

                icon: "fa-brands fa-shopify",

                workflow: [

                    [
                        "trigger",
                        "Shopify",
                        "New Order",
                        "fa-brands fa-shopify"
                    ],

                    [
                        "action",
                        "Shopify",
                        "Process Order",
                        "fa-solid fa-cart-shopping"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Update Customer",
                        "fa-solid fa-users"
                    ],

                    [
                        "action",
                        "Email",
                        "Send Confirmation",
                        "fa-solid fa-envelope"
                    ]

                ]

            }

        ],


        ChatGPT: [

            {

                name: "AI Customer Agent",

                icon: "fa-solid fa-robot",

                workflow: [

                    [
                        "trigger",
                        "Website",
                        "New Message",
                        "fa-solid fa-globe"
                    ],

                    [
                        "ai",
                        "ChatGPT",
                        "Understand Request",
                        "fa-solid fa-robot"
                    ],

                    [
                        "ai",
                        "ChatGPT",
                        "Generate Answer",
                        "fa-solid fa-wand-magic-sparkles"
                    ],

                    [
                        "action",
                        "Website",
                        "Send Response",
                        "fa-solid fa-paper-plane"
                    ]

                ]

            }

        ],


        "Retell AI": [

            {

                name: "AI Receptionist",

                icon: "fa-solid fa-phone",

                workflow: [

                    [
                        "trigger",
                        "Phone",
                        "Incoming Call",
                        "fa-solid fa-phone"
                    ],

                    [
                        "ai",
                        "Retell AI",
                        "Understand Caller",
                        "fa-solid fa-brain"
                    ],

                    [
                        "ai",
                        "Retell AI",
                        "Handle Conversation",
                        "fa-solid fa-comments"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Save Call",
                        "fa-solid fa-users"
                    ]

                ]

            }

        ],


        "Voice AI": [

            {

                name: "Inbound Call Agent",

                icon: "fa-solid fa-phone",

                workflow: [

                    [
                        "trigger",
                        "Phone",
                        "Incoming Call",
                        "fa-solid fa-phone"
                    ],

                    [
                        "ai",
                        "Voice AI",
                        "AI Receptionist",
                        "fa-solid fa-microphone"
                    ],

                    [
                        "action",
                        "Calendar",
                        "Book Appointment",
                        "fa-solid fa-calendar"
                    ],

                    [
                        "crm",
                        "CRM",
                        "Save Caller",
                        "fa-solid fa-users"
                    ]

                ]

            }

        ]

    };


    /* ==========================================
       VIEW CONTROL
    ========================================== */

    function showView(view) {

        if (!view) return;

        categoryView.classList.add("hidden");

        platformView.classList.add("hidden");

        automationView.classList.add("hidden");

        view.classList.remove("hidden");

    }


    /* ==========================================
       CATEGORY CLICK
    ========================================== */

    document
        .querySelectorAll(".workflow-category")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const category =
                        this.dataset.category;

                    document
                        .querySelectorAll(".workflow-category")
                        .forEach(item => {

                            item.classList.remove(
                                "active"
                            );

                        });

                    this.classList.add("active");

                    loadPlatforms(category);

                }
            );

        });


    /* ==========================================
       LOAD PLATFORMS
    ========================================== */

    function loadPlatforms(category) {

        const data =
            categories[category];

        if (!data) return;

        platformTitle.textContent =
            data.title;

        platformList.innerHTML = "";

        data.platforms.forEach(item => {

            const name =
                item[0];

            const icon =
                item[1];

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

                    <strong>
                        ${name}
                    </strong>

                    <small>
                        Explore automations
                    </small>

                </div>

                <i
                    class="fa-solid fa-chevron-right"
                    style="
                        margin-left:auto;
                        color:#555;
                    "
                ></i>

            `;

            button.addEventListener(
                "click",
                function () {

                    loadAutomations(name);

                }
            );

            platformList.appendChild(button);

        });

        showView(platformView);

    }


    /* ==========================================
       LOAD AUTOMATIONS
    ========================================== */

    function loadAutomations(platform) {

        const list =
            automationData[platform] || [];

        automationTitle.textContent =
            platform + " Automations";

        automationList.innerHTML = "";


        if (!list.length) {

            automationList.innerHTML = `

                <div
                    style="
                        padding:20px;
                        color:#777;
                        font-size:12px;
                        line-height:1.6;
                    "
                >
                    More automations coming soon.
                </div>

            `;

        }


        list.forEach(automation => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "workflow-automation";

            button.innerHTML = `

                <div class="automation-icon">

                    <i
                        class="${automation.icon}"
                    ></i>

                </div>

                <div>

                    <strong>
                        ${automation.name}
                    </strong>

                    <small>
                        Build this workflow
                    </small>

                </div>

                <i
                    class="fa-solid fa-chevron-right"
                    style="
                        margin-left:auto;
                        color:#555;
                    "
                ></i>

            `;

            button.addEventListener(
                "click",
                function () {

                    buildWorkflow(
                        automation.workflow
                    );

                }
            );

            automationList.appendChild(
                button
            );

        });

        showView(automationView);

    }


    /* ==========================================
       BUILD WORKFLOW
    ========================================== */

    function buildWorkflow(nodes) {

        /* CLEAR OLD WORKFLOW */

        canvasNodes.innerHTML = "";

        workflowSvg.innerHTML = "";

        canvasEmpty.classList.add(
            "hidden"
        );


        /* ======================================
           CANVAS SIZE
        ====================================== */

        const nodeWidth = 420;

        const nodeHeight = 76;

        const gapY = 55;

        const startY = 70;

        const totalHeight =
            startY +
            (nodes.length * nodeHeight) +
            ((nodes.length - 1) * gapY) +
            100;


        canvasNodes.style.width =
            "100%";

        canvasNodes.style.height =
            totalHeight + "px";


        workflowSvg.setAttribute(
            "width",
            "100%"
        );

        workflowSvg.setAttribute(
            "height",
            totalHeight
        );

        workflowSvg.setAttribute(
            "viewBox",
            `0 0 ${canvas.clientWidth} ${totalHeight}`
        );


        /* ======================================
           CREATE NODES
        ====================================== */

        nodes.forEach(
            (node, index) => {

                const type =
                    node[0];

                const platform =
                    node[1];

                const title =
                    node[2];

                const icon =
                    node[3];


                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "workflow-node";


                /*
                    CENTER NODE

                    50% = center
                    translateX(-50%)
                    = actual center
                */

                element.style.left =
                    "50%";

                element.style.top =
                    (
                        startY +
                        index *
                        (
                            nodeHeight +
                            gapY
                        )
                    ) + "px";

                element.style.transform =
                    "translateX(-50%)";


                element.innerHTML = `

                    <div
                        class="workflow-node-icon"
                    >

                        <i
                            class="${icon}"
                        ></i>

                    </div>

                    <div
                        class="workflow-node-content"
                    >

                        <small>
                            ${platform}
                        </small>

                        <strong>
                            ${title}
                        </strong>

                    </div>

                `;


                /*
                    ADD NODE
                */

                canvasNodes.appendChild(
                    element
                );


                /*
                    SMALL ENTRY ANIMATION
                */

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateX(-50%) translateY(12px)";


                setTimeout(
                    () => {

                        element.style.transition =
                            "opacity .45s ease, transform .45s ease";

                        element.style.opacity =
                            "1";

                        element.style.transform =
                            "translateX(-50%) translateY(0)";

                    },
                    index * 120
                );

            }
        );


        /* ======================================
           NODE COUNTER
        ====================================== */

        nodeCounter.textContent =
            nodes.length +
            (
                nodes.length === 1
                    ? " node"
                    : " nodes"
            );


        /* ======================================
           DRAW CONNECTIONS
        ====================================== */

        requestAnimationFrame(
            () => {

                requestAnimationFrame(
                    () => {

                        for (
                            let i = 0;
                            i < nodes.length - 1;
                            i++
                        ) {

                            drawConnection(
                                i,
                                i + 1
                            );

                        }

                    }
                );

            }
        );


        /* ======================================
           RESET SCROLL
        ====================================== */

        setTimeout(
            () => {

                canvas.scrollTo({

                    top: 0,

                    left: 0,

                    behavior: "smooth"

                });

            },
            100
        );

    }


    /* ==========================================
       DRAW STRAIGHT CONNECTION
    ========================================== */

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


        /*
            GET REAL POSITIONS

            This avoids the old problem where
            hard-coded left/top values caused
            incorrect connection positions.
        */

        const canvasRect =
            canvas.getBoundingClientRect();

        const fromRect =
            from.getBoundingClientRect();

        const toRect =
            to.getBoundingClientRect();


        /*
            CENTER X
        */

        const x1 =
            (
                fromRect.left +
                fromRect.width / 2 -
                canvasRect.left
            );


        const x2 =
            (
                toRect.left +
                toRect.width / 2 -
                canvasRect.left
            );


        /*
            BOTTOM OF FIRST NODE
        */

        const y1 =
            (
                fromRect.bottom -
                canvasRect.top +
                canvas.scrollTop
            );


        /*
            TOP OF NEXT NODE
        */

        const y2 =
            (
                toRect.top -
                canvasRect.top +
                canvas.scrollTop
            );


        /*
            STRAIGHT VERTICAL PATH
        */

        const path =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );


        path.setAttribute(
            "d",
            `M ${x1} ${y1} L ${x2} ${y2}`
        );


        path.classList.add(
            "workflow-line"
        );


        /*
            CONNECTION DOT
        */

        const startCircle =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );

        startCircle.setAttribute(
            "cx",
            x1
        );

        startCircle.setAttribute(
            "cy",
            y1
        );

        startCircle.setAttribute(
            "r",
            "3"
        );

        startCircle.classList.add(
            "workflow-connection-dot"
        );


        workflowSvg.appendChild(
            path
        );

        workflowSvg.appendChild(
            startCircle
        );


        /*
            DRAW ANIMATION
        */

        try {

            const length =
                path.getTotalLength();


            path.style.strokeDasharray =
                length;

            path.style.strokeDashoffset =
                length;


            requestAnimationFrame(
                () => {

                    path.style.transition =
                        "stroke-dashoffset .7s ease";

                    path.style.strokeDashoffset =
                        "0";

                }
            );

        } catch (error) {

            console.warn(
                "Connection animation error:",
                error
            );

        }

    }


    /* ==========================================
       BACK TO CATEGORIES
    ========================================== */

    if (backToCategories) {

        backToCategories.addEventListener(
            "click",
            function () {

                showView(
                    categoryView
                );

            }
        );

    }


    /* ==========================================
       BACK TO PLATFORMS
    ========================================== */

    if (backToPlatforms) {

        backToPlatforms.addEventListener(
            "click",
            function () {

                showView(
                    platformView
                );

            }
        );

    }


    /* ==========================================
       CLEAR WORKFLOW
    ========================================== */

    if (clearWorkflow) {

        clearWorkflow.addEventListener(
            "click",
            function () {

                canvasNodes.innerHTML =
                    "";

                workflowSvg.innerHTML =
                    "";

                canvasEmpty.classList.remove(
                    "hidden"
                );

                nodeCounter.textContent =
                    "0 nodes";

            }
        );

    }


    /* ==========================================
       WINDOW RESIZE
       Re-draw connections so they stay
       centered on responsive screens.
    ========================================== */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(
                resizeTimer
            );

            resizeTimer =
                setTimeout(
                    function () {

                        const nodes =
                            canvasNodes.querySelectorAll(
                                ".workflow-node"
                            );


                        if (
                            nodes.length <
                            2
                        ) {
                            return;
                        }


                        /*
                            Remove only paths/dots.
                            Nodes remain.
                        */

                        workflowSvg.innerHTML =
                            "";


                        for (
                            let i = 0;
                            i < nodes.length - 1;
                            i++
                        ) {

                            drawConnection(
                                i,
                                i + 1
                            );

                        }

                    },
                    150
                );

        }
    );


    /* ==========================================
       INITIAL STATE
    ========================================== */

    showView(
        categoryView
    );

});
