document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       ELEMENTS
    ========================================================= */

    const categoryView = document.getElementById("categoryView");
    const platformView = document.getElementById("platformView");
    const automationView = document.getElementById("automationView");

    const platformList = document.getElementById("platformList");
    const automationList = document.getElementById("automationList");

    const platformTitle = document.getElementById("platformTitle");
    const automationTitle = document.getElementById("automationTitle");

    const canvas = document.getElementById("workflowCanvas");
    const canvasNodes = document.getElementById("canvasNodes");
    const workflowSvg = document.getElementById("workflowSvg");
    const canvasEmpty = document.getElementById("canvasEmpty");

    const nodeCounter = document.getElementById("nodeCounter");
    const clearWorkflow = document.getElementById("clearWorkflow");

    const backToCategories = document.getElementById("backToCategories");
    const backToPlatforms = document.getElementById("backToPlatforms");


    /* =========================================================
       SAFETY CHECK
    ========================================================= */

    if (
        !categoryView ||
        !platformView ||
        !automationView ||
        !platformList ||
        !automationList ||
        !canvas ||
        !canvasNodes ||
        !workflowSvg
    ) {
        console.warn("Workflow Builder: Required elements missing.");
        return;
    }


    /* =========================================================
       CATEGORY DATA
    ========================================================= */

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


    /* =========================================================
       AUTOMATION DATA
       FORMAT:
       [type, platform, title, icon]
    ========================================================= */

    const automationData = {

        Facebook: [

            {
                name: "DM Automation",
                icon: "fa-solid fa-message",

                workflow: [
                    ["trigger", "Facebook", "New DM", "fa-brands fa-facebook-f"],
                    ["ai", "AI Agent", "Understand Message", "fa-solid fa-wand-magic-sparkles"],
                    ["action", "AI Agent", "Generate Reply", "fa-solid fa-comment-dots"],
                    ["action", "Facebook", "Send Reply", "fa-solid fa-paper-plane"],
                    ["crm", "CRM", "Save Conversation", "fa-solid fa-users"]
                ]
            },

            {
                name: "Comment → DM",
                icon: "fa-solid fa-comments",

                workflow: [
                    ["trigger", "Facebook", "New Comment", "fa-brands fa-facebook-f"],
                    ["ai", "AI Agent", "Analyze Comment", "fa-solid fa-wand-magic-sparkles"],
                    ["action", "Facebook", "Send DM", "fa-solid fa-message"],
                    ["crm", "CRM", "Save Lead", "fa-solid fa-user-plus"]
                ]
            },

            {
                name: "Lead Ads → CRM",
                icon: "fa-solid fa-user-plus",

                workflow: [
                    ["trigger", "Facebook", "New Lead Ad", "fa-brands fa-facebook-f"],
                    ["action", "Facebook", "Capture Lead", "fa-solid fa-user"],
                    ["ai", "AI Agent", "Qualify Lead", "fa-solid fa-wand-magic-sparkles"],
                    ["crm", "CRM", "Create Lead", "fa-solid fa-users"],
                    ["action", "Sales Team", "Notify Sales", "fa-solid fa-bell"]
                ]
            }

        ],


        Instagram: [

            {
                name: "Instagram DM Agent",
                icon: "fa-solid fa-message",

                workflow: [
                    ["trigger", "Instagram", "New DM", "fa-brands fa-instagram"],
                    ["ai", "AI Agent", "Understand Intent", "fa-solid fa-wand-magic-sparkles"],
                    ["action", "AI Agent", "Generate Response", "fa-solid fa-comment-dots"],
                    ["action", "Instagram", "Send DM", "fa-solid fa-paper-plane"]
                ]
            },

            {
                name: "Comment Automation",
                icon: "fa-solid fa-comments",

                workflow: [
                    ["trigger", "Instagram", "New Comment", "fa-brands fa-instagram"],
                    ["ai", "AI Agent", "Analyze Comment", "fa-solid fa-wand-magic-sparkles"],
                    ["action", "Instagram", "Send Reply", "fa-solid fa-reply"]
                ]
            }

        ],


        LinkedIn: [

            {
                name: "Lead Generation",
                icon: "fa-solid fa-user-plus",

                workflow: [
                    ["trigger", "LinkedIn", "New Prospect", "fa-brands fa-linkedin-in"],
                    ["ai", "AI Agent", "Research Prospect", "fa-solid fa-wand-magic-sparkles"],
                    ["action", "LinkedIn", "Send Connection", "fa-solid fa-user-plus"],
                    ["action", "LinkedIn", "Send Message", "fa-solid fa-message"],
                    ["crm", "CRM", "Create Lead", "fa-solid fa-users"]
                ]
            }

        ],


        YouTube: [

            {
                name: "New Video → Social",
                icon: "fa-solid fa-video",

                workflow: [
                    ["trigger", "YouTube", "New Video", "fa-brands fa-youtube"],
                    ["ai", "AI Agent", "Create Content", "fa-solid fa-wand-magic-sparkles"],
                    ["action", "Social Media", "Publish Post", "fa-solid fa-share-nodes"]
                ]
            }

        ],


        GoHighLevel: [

            {
                name: "New Lead → Pipeline",
                icon: "fa-solid fa-user-plus",

                workflow: [
                    ["trigger", "GHL", "New Lead", "fa-solid fa-user-plus"],
                    ["ai", "AI Agent", "Qualify Lead", "fa-solid fa-wand-magic-sparkles"],
                    ["crm", "GHL", "Create Opportunity", "fa-solid fa-layer-group"],
                    ["action", "Sales", "Notify Team", "fa-solid fa-bell"]
                ]
            }

        ],


        HubSpot: [

            {
                name: "Lead → CRM",
                icon: "fa-solid fa-users",

                workflow: [
                    ["trigger", "HubSpot", "New Lead", "fa-brands fa-hubspot"],
                    ["ai", "AI Agent", "Score Lead", "fa-solid fa-wand-magic-sparkles"],
                    ["crm", "HubSpot", "Create Contact", "fa-solid fa-users"],
                    ["action", "Sales", "Notify Sales", "fa-solid fa-bell"]
                ]
            }

        ],


        "Google Maps": [

            {
                name: "Scrape Business Leads",
                icon: "fa-solid fa-map-location-dot",

                workflow: [
                    ["trigger", "Google Maps", "Search Businesses", "fa-solid fa-map-location-dot"],
                    ["action", "Scraper", "Extract Data", "fa-solid fa-spider"],
                    ["ai", "AI Agent", "Clean Data", "fa-solid fa-wand-magic-sparkles"],
                    ["crm", "CRM", "Save Leads", "fa-solid fa-users"]
                ]
            }

        ],


        Apollo: [

            {
                name: "Find Prospects",
                icon: "fa-solid fa-crosshairs",

                workflow: [
                    ["trigger", "Apollo", "Find Prospects", "fa-solid fa-crosshairs"],
                    ["action", "Apollo", "Export Leads", "fa-solid fa-download"],
                    ["ai", "AI Agent", "Enrich Leads", "fa-solid fa-wand-magic-sparkles"],
                    ["crm", "CRM", "Create Leads", "fa-solid fa-users"]
                ]
            }

        ],


        Shopify: [

            {
                name: "New Order Automation",
                icon: "fa-brands fa-shopify",

                workflow: [
                    ["trigger", "Shopify", "New Order", "fa-brands fa-shopify"],
                    ["action", "Shopify", "Process Order", "fa-solid fa-cart-shopping"],
                    ["crm", "CRM", "Update Customer", "fa-solid fa-users"],
                    ["action", "Email", "Send Confirmation", "fa-solid fa-envelope"]
                ]
            }

        ],


        ChatGPT: [

            {
                name: "AI Customer Agent",
                icon: "fa-solid fa-robot",

                workflow: [
                    ["trigger", "Website", "New Message", "fa-solid fa-globe"],
                    ["ai", "ChatGPT", "Understand Request", "fa-solid fa-robot"],
                    ["ai", "ChatGPT", "Generate Answer", "fa-solid fa-wand-magic-sparkles"],
                    ["action", "Website", "Send Response", "fa-solid fa-paper-plane"]
                ]
            }

        ],


        "Retell AI": [

            {
                name: "AI Receptionist",
                icon: "fa-solid fa-phone",

                workflow: [
                    ["trigger", "Phone", "Incoming Call", "fa-solid fa-phone"],
                    ["ai", "Retell AI", "Understand Caller", "fa-solid fa-brain"],
                    ["ai", "Retell AI", "Handle Conversation", "fa-solid fa-comments"],
                    ["crm", "CRM", "Save Call", "fa-solid fa-users"]
                ]
            }

        ],


        "Voice AI": [

            {
                name: "Inbound Call Agent",
                icon: "fa-solid fa-phone",

                workflow: [
                    ["trigger", "Phone", "Incoming Call", "fa-solid fa-phone"],
                    ["ai", "Voice AI", "AI Receptionist", "fa-solid fa-microphone"],
                    ["action", "Calendar", "Book Appointment", "fa-solid fa-calendar"],
                    ["crm", "CRM", "Save Caller", "fa-solid fa-users"]
                ]
            }

        ]

    };


    /* =========================================================
       VIEW SYSTEM
    ========================================================= */

    function showView(view) {

        categoryView.classList.add("hidden");
        platformView.classList.add("hidden");
        automationView.classList.add("hidden");

        if (view) {
            view.classList.remove("hidden");
        }
    }


    /* =========================================================
       CATEGORY BUTTONS
    ========================================================= */

    const categoryButtons =
        document.querySelectorAll(".workflow-category");

    categoryButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const category =
                button.dataset.category;

            categoryButtons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            loadPlatforms(category);

        });

    });


    /* =========================================================
       LOAD PLATFORMS
    ========================================================= */

    function loadPlatforms(category) {

        const data =
            categories[category];

        if (!data) {
            console.warn("Category not found:", category);
            return;
        }

        platformTitle.textContent =
            data.title;

        platformList.innerHTML = "";

        data.platforms.forEach(platform => {

            const name = platform[0];
            const icon = platform[1];

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "workflow-platform";

            button.innerHTML = `
                <div class="platform-icon">
                    <i class="${icon}"></i>
                </div>

                <div class="platform-text">
                    <strong>${name}</strong>
                    <small>Explore automations</small>
                </div>

                <i class="fa-solid fa-chevron-right platform-arrow"></i>
            `;

            button.addEventListener("click", event => {

                event.preventDefault();

                loadAutomations(name);

            });

            platformList.appendChild(button);

        });

        showView(platformView);
    }


    /* =========================================================
       LOAD AUTOMATIONS
    ========================================================= */

    function loadAutomations(platform) {

        const list =
            automationData[platform] || [];

        automationTitle.textContent =
            `${platform} Automations`;

        automationList.innerHTML = "";

        if (!list.length) {

            automationList.innerHTML = `
                <div class="workflow-no-results">

                    <i class="fa-solid fa-clock"></i>

                    <strong>
                        More automations coming soon
                    </strong>

                    <small>
                        We are adding more workflows for ${platform}.
                    </small>

                </div>
            `;

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
                    <i class="${automation.icon}"></i>
                </div>

                <div class="automation-text">
                    <strong>${automation.name}</strong>
                    <small>Build this workflow</small>
                </div>

                <i class="fa-solid fa-chevron-right automation-arrow"></i>
            `;

            button.addEventListener("click", event => {

                event.preventDefault();

                buildWorkflow(
                    automation.workflow
                );

            });

            automationList.appendChild(button);

        });

        showView(automationView);
    }


    /* =========================================================
       BUILD WORKFLOW
    ========================================================= */

    function buildWorkflow(nodes) {

        if (!nodes || !nodes.length) {
            console.warn("No workflow nodes.");
            return;
        }


        /* -----------------------------------------
           CLEAR OLD
        ----------------------------------------- */

        canvasNodes.innerHTML = "";
        workflowSvg.innerHTML = "";


        /* -----------------------------------------
           HIDE EMPTY
        ----------------------------------------- */

        if (canvasEmpty) {
            canvasEmpty.classList.add("hidden");
        }


        /* -----------------------------------------
           CANVAS DIMENSIONS
        ----------------------------------------- */

        const nodeWidth = 390;
        const nodeHeight = 92;

        const gap = 55;

        const startY = 45;

        const totalHeight =
            startY +
            (nodes.length * nodeHeight) +
            ((nodes.length - 1) * gap) +
            80;


        /* -----------------------------------------
           NODE CONTAINER
        ----------------------------------------- */

        canvasNodes.style.position = "absolute";
        canvasNodes.style.left = "0";
        canvasNodes.style.top = "0";
        canvasNodes.style.width = "100%";
        canvasNodes.style.height = `${totalHeight}px`;


        /* -----------------------------------------
           SVG
        ----------------------------------------- */

        const canvasWidth =
            canvas.clientWidth || 800;

        workflowSvg.setAttribute(
            "width",
            canvasWidth
        );

        workflowSvg.setAttribute(
            "height",
            totalHeight
        );

        workflowSvg.setAttribute(
            "viewBox",
            `0 0 ${canvasWidth} ${totalHeight}`
        );

        workflowSvg.style.width =
            `${canvasWidth}px`;

        workflowSvg.style.height =
            `${totalHeight}px`;


        /* -----------------------------------------
           CREATE NODES
        ----------------------------------------- */

        nodes.forEach((node, index) => {

            createNode(
                node,
                index,
                nodeWidth,
                nodeHeight,
                gap,
                startY
            );

        });


        /* -----------------------------------------
           COUNTER
        ----------------------------------------- */

        nodeCounter.textContent =
            `${nodes.length} ${
                nodes.length === 1
                    ? "node"
                    : "nodes"
            }`;


        /* -----------------------------------------
           DRAW CONNECTIONS AFTER RENDER
        ----------------------------------------- */

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

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

            });

        });


        /* -----------------------------------------
           RESET SCROLL
        ----------------------------------------- */

        canvas.scrollTop = 0;


        /* -----------------------------------------
           AUTO SCROLL IF LONG
        ----------------------------------------- */

        if (
            totalHeight >
            canvas.clientHeight
        ) {

            canvas.classList.add(
                "workflow-scrollable"
            );

        } else {

            canvas.classList.remove(
                "workflow-scrollable"
            );

        }

    }


    /* =========================================================
       CREATE NODE
    ========================================================= */

    function createNode(
        node,
        index,
        nodeWidth,
        nodeHeight,
        gap,
        startY
    ) {

        /*
         * IMPORTANT:
         *
         * node[0] = type
         * node[1] = platform
         * node[2] = title
         * node[3] = icon
         */

        const type =
            node[0];

        const platform =
            node[1];

        const title =
            node[2];

        const icon =
            node[3];


        const element =
            document.createElement("div");

        element.className =
            "workflow-node";


        /* -----------------------------------------
           POSITION
        ----------------------------------------- */

        const canvasWidth =
            canvas.clientWidth || 800;

        const x =
            Math.max(
                15,
                (canvasWidth - nodeWidth) / 2
            );

        const y =
            startY +
            index * (nodeHeight + gap);


        element.style.left =
            `${x}px`;

        element.style.top =
            `${y}px`;

        element.style.width =
            `${nodeWidth}px`;

        element.style.minHeight =
            `${nodeHeight}px`;


        /* -----------------------------------------
           NODE TYPE CLASS
        ----------------------------------------- */

        element.dataset.type =
            type;


        /* -----------------------------------------
           NODE HTML
        ----------------------------------------- */

        element.innerHTML = `

            <div class="workflow-node-icon">

                <i class="${icon}"></i>

            </div>

            <div class="workflow-node-content">

                <small>
                    ${platform}
                </small>

                <strong>
                    ${title}
                </strong>

            </div>

        `;


        /* -----------------------------------------
           ADD NODE
        ----------------------------------------- */

        canvasNodes.appendChild(
            element
        );

    }


    /* =========================================================
       DRAW CONNECTION
    ========================================================= */

    function drawConnection(
        fromIndex,
        toIndex
    ) {

        const nodeElements =
            canvasNodes.querySelectorAll(
                ".workflow-node"
            );

        const from =
            nodeElements[fromIndex];

        const to =
            nodeElements[toIndex];

        if (!from || !to) {
            return;
        }


        /* -----------------------------------------
           NODE POSITIONS
        ----------------------------------------- */

        const x1 =
            from.offsetLeft +
            (from.offsetWidth / 2);

        const y1 =
            from.offsetTop +
            from.offsetHeight;

        const x2 =
            to.offsetLeft +
            (to.offsetWidth / 2);

        const y2 =
            to.offsetTop;


        /* -----------------------------------------
           CREATE PATH
        ----------------------------------------- */

        const path =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );


        const curve =
            Math.min(
                70,
                Math.max(
                    35,
                    (y2 - y1) / 2
                )
            );


        const pathData = `
            M ${x1} ${y1}

            C
            ${x1} ${y1 + curve},
            ${x2} ${y2 - curve},
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


        /* -----------------------------------------
           ANIMATE
        ----------------------------------------- */

        try {

            const length =
                path.getTotalLength();

            path.style.strokeDasharray =
                `${length}`;

            path.style.strokeDashoffset =
                `${length}`;


            requestAnimationFrame(() => {

                path.style.transition =
                    "stroke-dashoffset .7s ease";

                path.style.strokeDashoffset =
                    "0";

            });

        } catch (error) {

            console.warn(
                "Connection animation error:",
                error
            );

        }

    }


    /* =========================================================
       BACK TO CATEGORIES
    ========================================================= */

    if (backToCategories) {

        backToCategories.addEventListener(
            "click",
            event => {

                event.preventDefault();

                showView(
                    categoryView
                );

            }
        );

    }


    /* =========================================================
       BACK TO PLATFORMS
    ========================================================= */

    if (backToPlatforms) {

        backToPlatforms.addEventListener(
            "click",
            event => {

                event.preventDefault();

                showView(
                    platformView
                );

            }
        );

    }


    /* =========================================================
       CLEAR WORKFLOW
    ========================================================= */

    if (clearWorkflow) {

        clearWorkflow.addEventListener(
            "click",
            event => {

                event.preventDefault();

                canvasNodes.innerHTML =
                    "";

                workflowSvg.innerHTML =
                    "";


                if (canvasEmpty) {

                    canvasEmpty.classList.remove(
                        "hidden"
                    );

                }


                nodeCounter.textContent =
                    "0 nodes";


                canvas.scrollTop =
                    0;


                canvas.classList.remove(
                    "workflow-scrollable"
                );

            }
        );

    }


    /* =========================================================
       RESIZE
    ========================================================= */

    let resizeTimer;

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );

            resizeTimer =
                setTimeout(() => {

                    const nodes =
                        canvasNodes.querySelectorAll(
                            ".workflow-node"
                        );

                    if (!nodes.length) {
                        return;
                    }


                    const canvasWidth =
                        canvas.clientWidth || 800;


                    /*
                     * Re-center nodes
                     */

                    nodes.forEach(node => {

                        const width =
                            node.offsetWidth;

                        const x =
                            Math.max(
                                15,
                                (canvasWidth - width) / 2
                            );

                        node.style.left =
                            `${x}px`;

                    });


                    /*
                     * Update SVG
                     */

                    const height =
                        canvasNodes.offsetHeight;


                    workflowSvg.setAttribute(
                        "width",
                        canvasWidth
                    );

                    workflowSvg.setAttribute(
                        "height",
                        height
                    );

                    workflowSvg.setAttribute(
                        "viewBox",
                        `0 0 ${canvasWidth} ${height}`
                    );


                    workflowSvg.style.width =
                        `${canvasWidth}px`;

                    workflowSvg.style.height =
                        `${height}px`;


                    /*
                     * Redraw connections
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

                }, 150);

        }
    );


    /* =========================================================
       INITIAL STATE
    ========================================================= */

    showView(
        categoryView
    );


    canvasNodes.innerHTML =
        "";

    workflowSvg.innerHTML =
        "";


    if (canvasEmpty) {

        canvasEmpty.classList.remove(
            "hidden"
        );

    }


    nodeCounter.textContent =
        "0 nodes";

});
