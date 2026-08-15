document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       ELEMENTS
    ========================================================= */

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


    /* =========================================================
       CTA / FORM ELEMENTS
    ========================================================= */

    const quoteButton =
        document.getElementById("workflowQuoteButton");

    const quoteModal =
        document.getElementById("workflowQuoteModal");

    const quoteClose =
        document.getElementById("workflowQuoteClose");

    const quoteForm =
        document.getElementById("workflowQuoteForm");

    const selectedWorkflowInput =
        document.getElementById("selectedWorkflow");

    const selectedPlatformInput =
        document.getElementById("selectedPlatform");


    /* =========================================================
       REQUIRED ELEMENT CHECK
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
        console.warn(
            "Workflow Builder: Required elements missing."
        );

        return;
    }


    /* =========================================================
       CURRENT WORKFLOW STATE
    ========================================================= */

    let currentWorkflow = null;
    let currentPlatform = null;
    let currentWorkflowNodes = [];


    /* =========================================================
       DATA
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
       AUTOMATIONS
    ========================================================= */

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
       CATEGORY → PLATFORM
    ========================================================= */

    document
        .querySelectorAll(".workflow-category")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    document
                        .querySelectorAll(
                            ".workflow-category"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    loadPlatforms(
                        button.dataset.category
                    );

                }
            );

        });


    /* =========================================================
       LOAD PLATFORMS
    ========================================================= */

    function loadPlatforms(category) {

        const data =
            categories[category];


        if (!data) return;


        platformTitle.textContent =
            data.title;


        platformList.innerHTML = "";


        data.platforms.forEach(
            ([name, icon]) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type = "button";

                button.className =
                    "workflow-platform";


                button.innerHTML = `

                    <div class="platform-icon">
                        <i class="${icon}"></i>
                    </div>

                    <div class="platform-text">

                        <strong>
                            ${name}
                        </strong>

                        <small>
                            Explore automations
                        </small>

                    </div>

                    <i
                        class="
                            fa-solid
                            fa-chevron-right
                            platform-arrow
                        "
                    ></i>

                `;


                button.addEventListener(
                    "click",
                    () => {

                        loadAutomations(
                            name
                        );

                    }
                );


                platformList.appendChild(
                    button
                );

            }
        );


        showView(
            platformView
        );

    }


    /* =========================================================
       PLATFORM → AUTOMATION
    ========================================================= */

    function loadAutomations(platform) {

        const list =
            automationData[platform] || [];


        currentPlatform =
            platform;


        automationTitle.textContent =
            `${platform} Automations`;


        automationList.innerHTML = "";


        if (!list.length) {

            automationList.innerHTML = `

                <div class="workflow-no-results">

                    <i
                        class="
                            fa-solid
                            fa-clock
                        "
                    ></i>

                    <strong>
                        More automations coming soon
                    </strong>

                    <small>
                        We are adding more workflows
                        for ${platform}.
                    </small>

                </div>

            `;


            showView(
                automationView
            );


            return;

        }


        list.forEach(
            automation => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type = "button";

                button.className =
                    "workflow-automation";


                button.innerHTML = `

                    <div class="automation-icon">

                        <i
                            class="${automation.icon}"
                        ></i>

                    </div>

                    <div class="automation-text">

                        <strong>
                            ${automation.name}
                        </strong>

                        <small>
                            Build this workflow
                        </small>

                    </div>

                    <i
                        class="
                            fa-solid
                            fa-chevron-right
                            automation-arrow
                        "
                    ></i>

                `;


                button.addEventListener(
                    "click",
                    () => {

                        buildWorkflow(
                            automation.workflow,
                            automation.name,
                            platform
                        );

                    }
                );


                automationList.appendChild(
                    button
                );

            }
        );


        showView(
            automationView
        );

    }


    /* =========================================================
       BUILD WORKFLOW
    ========================================================= */

    function buildWorkflow(
        nodes,
        workflowName,
        platform
    ) {

        if (
            !nodes ||
            !nodes.length
        ) {
            return;
        }


        /* ================================
           SAVE CURRENT WORKFLOW
        ================================= */

        currentWorkflow =
            workflowName;

        currentPlatform =
            platform;

        currentWorkflowNodes =
            nodes;


        /* ================================
           CLEAR
        ================================= */

        canvasNodes.innerHTML = "";

        workflowSvg.innerHTML = "";


        canvasEmpty?.classList.add(
            "hidden"
        );


        /* ================================
           CANVAS SIZE
        ================================= */

        const canvasWidth =
            canvas.clientWidth;


        const nodeHeight =
            78;


        const nodeWidth =
            Math.min(
                395,
                Math.max(
                    280,
                    canvasWidth - 80
                )
            );


        const verticalGap =
            54;


        const paddingTop =
            110;


        const paddingBottom =
            80;


        const requiredHeight =
            paddingTop +
            (
                nodes.length *
                nodeHeight
            ) +
            (
                (nodes.length - 1) *
                verticalGap
            ) +
            paddingBottom;


        /* ================================
           NODE LAYER
        ================================= */

        canvasNodes.style.position =
            "absolute";

        canvasNodes.style.left =
            "0";

        canvasNodes.style.top =
            "0";

        canvasNodes.style.width =
            "100%";

        canvasNodes.style.height =
            `${requiredHeight}px`;


        /* ================================
           SVG
        ================================= */

        workflowSvg.setAttribute(
            "viewBox",
            `
            0 0
            ${canvasWidth}
            ${requiredHeight}
            `
        );


        workflowSvg.setAttribute(
            "width",
            canvasWidth
        );


        workflowSvg.setAttribute(
            "height",
            requiredHeight
        );


        workflowSvg.style.position =
            "absolute";

        workflowSvg.style.left =
            "0";

        workflowSvg.style.top =
            "0";

        workflowSvg.style.width =
            "100%";

        workflowSvg.style.height =
            `${requiredHeight}px`;

        workflowSvg.style.pointerEvents =
            "none";


        /* ================================
           CREATE NODES
        ================================= */

        const nodeElements = [];


        nodes.forEach(
            (node, index) => {

                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "workflow-node";


                const x =
                    (
                        canvasWidth -
                        nodeWidth
                    ) / 2;


                const y =
                    paddingTop +
                    (
                        index *
                        (
                            nodeHeight +
                            verticalGap
                        )
                    );


                element.style.position =
                    "absolute";


                element.style.width =
                    `${nodeWidth}px`;


                element.style.height =
                    `${nodeHeight}px`;


                element.style.left =
                    `${x}px`;


                element.style.top =
                    `${y}px`;


                element.style.transform =
                    "none";


                element.innerHTML = `

                    <div
                        class="
                            workflow-node-icon
                        "
                    >
                        <i
                            class="${node[3]}"
                        ></i>
                    </div>

                    <div
                        class="
                            workflow-node-content
                        "
                    >

                        <small>
                            ${node[1]}
                        </small>

                        <strong>
                            ${node[2]}
                        </strong>

                    </div>

                `;


                canvasNodes.appendChild(
                    element
                );


                nodeElements.push(
                    element
                );

            }
        );


        /* ================================
           DRAW CONNECTIONS
        ================================= */

        requestAnimationFrame(
            () => {

                nodeElements.forEach(
                    (node, index) => {

                        if (
                            index === 0
                        ) {
                            return;
                        }


                        drawConnection(
                            nodeElements[
                                index - 1
                            ],
                            node
                        );

                    }
                );

            }
        );


        /* ================================
           COUNTER
        ================================= */

        nodeCounter.textContent =
            `${nodes.length} ${
                nodes.length === 1
                    ? "node"
                    : "nodes"
            }`;


        /* ================================
           ACTIVATE CTA
        ================================= */

        activateQuoteCTA(
            workflowName,
            platform
        );


        /* ================================
           RESET SCROLL
        ================================= */

        canvas.scrollLeft =
            0;

        canvas.scrollTop =
            0;


        setTimeout(
            () => {

                canvas.scrollTop =
                    0;

                canvas.scrollLeft =
                    0;

            },
            30
        );

    }


    /* =========================================================
       DRAW CONNECTION
    ========================================================= */

    function drawConnection(
        from,
        to
    ) {

        if (
            !from ||
            !to
        ) {
            return;
        }


        const x =
            from.offsetLeft +
            (
                from.offsetWidth /
                2
            );


        const y1 =
            from.offsetTop +
            from.offsetHeight;


        const y2 =
            to.offsetTop;


        const distance =
            y2 - y1;


        const curve =
            Math.max(
                20,
                Math.min(
                    45,
                    distance / 2
                )
            );


        const path =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );


        path.setAttribute(
            "d",
            `
                M ${x} ${y1}

                C
                ${x} ${y1 + curve},
                ${x} ${y2 - curve},
                ${x} ${y2}
            `
        );


        path.classList.add(
            "workflow-line"
        );


        workflowSvg.appendChild(
            path
        );


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


    /* =========================================================
       CTA ACTIVATION
    ========================================================= */

    function activateQuoteCTA(
        workflowName,
        platform
    ) {

        if (!quoteButton) {
            return;
        }


        quoteButton.classList.add(
            "is-active"
        );


        quoteButton.disabled =
            false;


        quoteButton.innerHTML = `

            <span>
                Get a Quote
            </span>

            <i
                class="
                    fa-solid
                    fa-arrow-right
                "
            ></i>

        `;


        quoteButton.setAttribute(
            "aria-label",
            `Get a quote for ${workflowName}`
        );


        if (
            selectedWorkflowInput
        ) {

            selectedWorkflowInput.value =
                workflowName;

        }


        if (
            selectedPlatformInput
        ) {

            selectedPlatformInput.value =
                platform;

        }

    }


    /* =========================================================
       OPEN QUOTE MODAL
    ========================================================= */

    function openQuoteModal() {

        if (!quoteModal) {
            return;
        }


        if (
            selectedWorkflowInput
        ) {

            selectedWorkflowInput.value =
                currentWorkflow || "";

        }


        if (
            selectedPlatformInput
        ) {

            selectedPlatformInput.value =
                currentPlatform || "";

        }


        quoteModal.classList.add(
            "is-open"
        );


        document.body.classList.add(
            "workflow-modal-open"
        );


        setTimeout(
            () => {

                const firstInput =
                    quoteForm?.querySelector(
                        "input:not([type='hidden'])"
                    );


                firstInput?.focus();

            },
            200
        );

    }


    /* =========================================================
       CLOSE QUOTE MODAL
    ========================================================= */

    function closeQuoteModal() {

        if (!quoteModal) {
            return;
        }


        quoteModal.classList.remove(
            "is-open"
        );


        document.body.classList.remove(
            "workflow-modal-open"
        );

    }


    /* =========================================================
       CTA CLICK
    ========================================================= */

    quoteButton?.addEventListener(
        "click",
        event => {

            event.preventDefault();


            if (!currentWorkflow) {

                return;

            }


            openQuoteModal();

        }
    );


    /* =========================================================
       CLOSE BUTTON
    ========================================================= */

    quoteClose?.addEventListener(
        "click",
        event => {

            event.preventDefault();

            closeQuoteModal();

        }
    );


    /* =========================================================
       CLOSE WHEN CLICKING BACKDROP
    ========================================================= */

    quoteModal?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                quoteModal
            ) {

                closeQuoteModal();

            }

        }
    );


    /* =========================================================
       ESC CLOSE
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeQuoteModal();

            }

        }
    );


    /* =========================================================
       FORM SUBMIT
    ========================================================= */

    quoteForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            /*
               IMPORTANT:
               Yahan aap baad mein
               Elementor / webhook / n8n /
               GHL integration laga sakte ho.
            */


            const formData =
                new FormData(
                    quoteForm
                );


            const name =
                formData.get("name");


            const whatsapp =
                formData.get("whatsapp");


            const email =
                formData.get("email");


            const comments =
                formData.get("comments");


            const workflow =
                formData.get(
                    "selectedWorkflow"
                );


            const platform =
                formData.get(
                    "selectedPlatform"
                );


            console.log(
                "Workflow Quote Request:",
                {
                    name,
                    whatsapp,
                    email,
                    comments,
                    workflow,
                    platform
                }
            );


            /*
               TEMPORARY SUCCESS STATE
            */

            quoteForm.innerHTML = `

                <div
                    class="
                        workflow-form-success
                    "
                >

                    <div
                        class="
                            workflow-success-icon
                        "
                    >
                        <i
                            class="
                                fa-solid
                                fa-check
                            "
                        ></i>
                    </div>

                    <h3>
                        Request Received
                    </h3>

                    <p>
                        We'll review your
                        workflow requirements
                        and get back to you shortly.
                    </p>

                    <button
                        type="button"
                        id="workflowSuccessClose"
                    >
                        Done
                    </button>

                </div>

            `;


            document
                .getElementById(
                    "workflowSuccessClose"
                )
                ?.addEventListener(
                    "click",
                    closeQuoteModal
                );

        }
    );


    /* =========================================================
       BACK → CATEGORIES
    ========================================================= */

    backToCategories?.addEventListener(
        "click",
        event => {

            event.preventDefault();


            showView(
                categoryView
            );

        }
    );


    /* =========================================================
       BACK → PLATFORMS
    ========================================================= */

    backToPlatforms?.addEventListener(
        "click",
        event => {

            event.preventDefault();


            showView(
                platformView
            );

        }
    );


    /* =========================================================
       CLEAR WORKFLOW
    ========================================================= */

    clearWorkflow?.addEventListener(
        "click",
        event => {

            event.preventDefault();


            canvasNodes.innerHTML =
                "";


            workflowSvg.innerHTML =
                "";


            canvasEmpty?.classList.remove(
                "hidden"
            );


            nodeCounter.textContent =
                "0 nodes";


            currentWorkflow =
                null;


            currentPlatform =
                null;


            currentWorkflowNodes =
                [];


            if (quoteButton) {

                quoteButton.classList.remove(
                    "is-active"
                );


                quoteButton.disabled =
                    true;


                quoteButton.innerHTML = `

                    <span>
                        Select a workflow
                    </span>

                `;

            }


            if (
                selectedWorkflowInput
            ) {

                selectedWorkflowInput.value =
                    "";

            }


            if (
                selectedPlatformInput
            ) {

                selectedPlatformInput.value =
                    "";

            }


            canvas.scrollTop =
                0;

            canvas.scrollLeft =
                0;

        }
    );


    /* =========================================================
       RESPONSIVE WORKFLOW REBUILD
    ========================================================= */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        if (
                            !currentWorkflowNodes.length
                        ) {
                            return;
                        }


                        buildWorkflow(
                            currentWorkflowNodes,
                            currentWorkflow,
                            currentPlatform
                        );

                    },
                    150
                );

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


    canvasEmpty?.classList.remove(
        "hidden"
    );


    nodeCounter.textContent =
        "0 nodes";


    if (quoteButton) {

        quoteButton.disabled =
            true;

        quoteButton.classList.remove(
            "is-active"
        );

    }

});
