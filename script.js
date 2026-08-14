// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// Mega Menu

const megaParent = document.querySelector(".mega-parent");
const megaMenu = document.querySelector(".mega-menu");


if(megaParent && megaMenu){


    let closeTimer;


    megaParent.addEventListener("mouseenter",()=>{


        clearTimeout(closeTimer);


        megaMenu.classList.add("active");


    });



    megaParent.addEventListener("mouseleave",()=>{


        closeTimer = setTimeout(()=>{


            megaMenu.classList.remove("active");


        },200);



    });



    megaMenu.addEventListener("mouseenter",()=>{


        clearTimeout(closeTimer);


        megaMenu.classList.add("active");


    });



    megaMenu.addEventListener("mouseleave",()=>{


        closeTimer = setTimeout(()=>{


            megaMenu.classList.remove("active");


        },200);



    });



}





// Mobile Menu Ready

const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){


menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("show");


});


}






// Navbar shadow on scroll


window.addEventListener("scroll",()=>{


    const navbar = document.querySelector(".navbar");


    if(navbar){


        if(window.scrollY > 50){


            navbar.classList.add("scrolled");


        }else{


            navbar.classList.remove("scrolled");


        }
/* ==========================================
   AWSZ WORKFLOW BUILDER
   Category → Platform → Automation → Canvas
========================================== */
document.addEventListener("DOMContentLoaded", () => {

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


    /* ==========================================
       PLATFORM DATA
    ========================================== */

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


    /* ==========================================
       AUTOMATIONS
    ========================================== */

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

        "Google Maps": [
            "Business Lead Scraping",
            "Extract Phone Numbers",
            "Extract Emails",
            "Save → Google Sheets",
            "Send → CRM"
        ],

        Shopify: [
            "New Order → CRM",
            "Abandoned Cart",
            "Customer Sync",
            "Inventory Alert",
            "Review Request"
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
        ]

    };


    /* ==========================================
       REAL WORKFLOW DEFINITIONS
    ========================================== */

    const workflowTemplates = {

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

        ]

    };


    /* ==========================================
       VIEW CONTROL
    ========================================== */

    function showView(view) {

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

            button.addEventListener("click", () => {

                const category =
                    button.dataset.category;

                document
                    .querySelectorAll(".workflow-category")
                    .forEach(item =>
                        item.classList.remove("active")
                    );

                button.classList.add("active");

                loadPlatforms(category);

            });

        });


    /* ==========================================
       LOAD PLATFORMS
    ========================================== */

    function loadPlatforms(category) {

        const data = categories[category];

        if (!data) return;

        platformTitle.textContent =
            data.title;

        platformList.innerHTML = "";

        data.platforms.forEach(
            ([name, icon]) => {

                const button =
                    document.createElement("button");

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

            }
        );

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

        list.forEach(automation => {

            const button =
                document.createElement("button");

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


    /* ==========================================
       BUILD COMPLETE WORKFLOW
    ========================================== */

    function buildWorkflow(
        platform,
        automation
    ) {

        const key =
            `${platform}|${automation}`;

        const template =
            workflowTemplates[key];

        if (!template) {

            showDemoWorkflow(
                platform,
                automation
            );

            return;
        }

        canvasNodes.innerHTML = "";
        workflowSvg.innerHTML = "";

        canvasEmpty.classList.add(
            "hidden"
        );

        nodeCounter.textContent =
            `${template.length} nodes`;

        animateWorkflow(
            template
        );

    }


    /* ==========================================
       FALLBACK WORKFLOW
    ========================================== */

    function showDemoWorkflow(
        platform,
        automation
    ) {

        const template = [

            {
                type: "trigger",
                platform,
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

        canvasEmpty.classList.add(
            "hidden"
        );

        nodeCounter.textContent =
            `${template.length} nodes`;

        canvasNodes.innerHTML = "";
        workflowSvg.innerHTML = "";

        animateWorkflow(template);
    }


    /* ==========================================
       ANIMATE WORKFLOW
    ========================================== */

    function animateWorkflow(template) {

        template.forEach(
            (node, index) => {

                setTimeout(() => {

                    createNode(
                        node,
                        index
                    );

                }, index * 550);

            }
        );

    }


    /* ==========================================
       CREATE NODE
    ========================================== */

    function createNode(
        node,
        index
    ) {

        const element =
            document.createElement("div");

        element.className =
            "workflow-node";

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


        /* Connect previous node */

        if (index > 0) {

            setTimeout(() => {

                drawConnection(
                    index - 1,
                    index
                );

            }, 250);

        }

        /* Auto scroll towards node */

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

        }, 300);

    }


    /* ==========================================
       DRAW CONNECTION
    ========================================== */

    function drawConnection(
        fromIndex,
        toIndex
    ) {

        const nodes =
            document.querySelectorAll(
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
            ) + 35;

        const x2 =
            parseFloat(
                to.style.left
            );

        const y2 =
            parseFloat(
                to.style.top
            ) + 35;


        const path =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );


        const curve =
            Math.max(
                80,
                Math.abs(x2 - x1) * .4
            );


        path.setAttribute(
            "d",
            `
            M ${x1} ${y1}
            C
            ${x1 + curve} ${y1},
            ${x2 - curve} ${y2},
            ${x2} ${y2}
            `
        );

        path.classList.add(
            "workflow-line"
        );


        workflowSvg.appendChild(
            path
        );


        /* Animated drawing */

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

    }


    /* ==========================================
       BACK
    ========================================== */

    backToCategories
        .addEventListener(
            "click",
            () => {

                showView(
                    categoryView
                );

            }
        );


    backToPlatforms
        .addEventListener(
            "click",
            () => {

                showView(
                    platformView
                );

            }
        );


    /* ==========================================
       CLEAR
    ========================================== */

    clearWorkflow
        .addEventListener(
            "click",
            () => {

                canvasNodes.innerHTML = "";

                workflowSvg.innerHTML = "";

                canvasEmpty.classList.remove(
                    "hidden"
                );

                nodeCounter.textContent =
                    "0 nodes";

            }
        );


    /* ==========================================
       INITIAL STATE
    ========================================== */

    showView(
        categoryView
    );

});
