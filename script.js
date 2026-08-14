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
       DATA
    ========================================== */

    const workflowData = {

        social: {

            title: "Social Media Automation",

            platforms: [

                {
                    name: "Facebook",
                    icon: "fa-brands fa-facebook-f",
                    description: "Posts, leads & engagement"
                },

                {
                    name: "Instagram",
                    icon: "fa-brands fa-instagram",
                    description: "Content & engagement"
                },

                {
                    name: "LinkedIn",
                    icon: "fa-brands fa-linkedin-in",
                    description: "Posts & lead generation"
                },

                {
                    name: "YouTube",
                    icon: "fa-brands fa-youtube",
                    description: "Videos & channel automation"
                }

            ]
        },


        crm: {

            title: "CRM Automation",

            platforms: [

                {
                    name: "GoHighLevel",
                    icon: "fa-solid fa-g",
                    description: "Funnels, leads & workflows"
                },

                {
                    name: "HubSpot",
                    icon: "fa-brands fa-hubspot",
                    description: "CRM & sales automation"
                },

                {
                    name: "Zoho CRM",
                    icon: "fa-solid fa-cloud",
                    description: "Customer relationship automation"
                },

                {
                    name: "Pipedrive",
                    icon: "fa-solid fa-chart-line",
                    description: "Sales pipeline automation"
                }

            ]
        },


        scraping: {

            title: "Data Scraping",

            platforms: [

                {
                    name: "Google Maps",
                    icon: "fa-solid fa-map-location-dot",
                    description: "Business data extraction"
                },

                {
                    name: "LinkedIn",
                    icon: "fa-brands fa-linkedin-in",
                    description: "Profile & lead extraction"
                },

                {
                    name: "Amazon",
                    icon: "fa-brands fa-amazon",
                    description: "Product data extraction"
                },

                {
                    name: "Websites",
                    icon: "fa-solid fa-globe",
                    description: "Website data extraction"
                }

            ]
        },


        leads: {

            title: "Lead Generation",

            platforms: [

                {
                    name: "LinkedIn",
                    icon: "fa-brands fa-linkedin-in",
                    description: "Find targeted prospects"
                },

                {
                    name: "Apollo",
                    icon: "fa-solid fa-database",
                    description: "B2B prospecting"
                },

                {
                    name: "Google Maps",
                    icon: "fa-solid fa-map-location-dot",
                    description: "Local business leads"
                },

                {
                    name: "Email Finder",
                    icon: "fa-solid fa-envelope",
                    description: "Find verified emails"
                }

            ]
        },


        ecommerce: {

            title: "Ecommerce Automation",

            platforms: [

                {
                    name: "Shopify",
                    icon: "fa-brands fa-shopify",
                    description: "Store automation"
                },

                {
                    name: "WooCommerce",
                    icon: "fa-solid fa-cart-shopping",
                    description: "WordPress ecommerce"
                },

                {
                    name: "Stripe",
                    icon: "fa-brands fa-stripe",
                    description: "Payments & customers"
                },

                {
                    name: "Email",
                    icon: "fa-solid fa-envelope",
                    description: "Retention automation"
                }

            ]
        },


        ai: {

            title: "AI Agents",

            platforms: [

                {
                    name: "AI Chat Agent",
                    icon: "fa-solid fa-comments",
                    description: "24/7 customer conversations"
                },

                {
                    name: "Voice AI",
                    icon: "fa-solid fa-phone",
                    description: "AI phone agents"
                },

                {
                    name: "WhatsApp AI",
                    icon: "fa-brands fa-whatsapp",
                    description: "WhatsApp conversations"
                },

                {
                    name: "Website AI",
                    icon: "fa-solid fa-robot",
                    description: "AI website assistant"
                }

            ]
        }

    };


    /* ==========================================
       AUTOMATIONS
    ========================================== */

    const automations = {

        Facebook: [
            "Auto Publish Posts",
            "Schedule Content",
            "Lead Collection",
            "Messenger Lead Capture",
            "Comment → CRM",
            "Facebook Lead Ads → CRM",
            "Auto Reply to Comments",
            "Content Approval Workflow"
        ],

        Instagram: [
            "Auto Publish Posts",
            "Schedule Reels",
            "Schedule Stories",
            "DM Automation",
            "Comment → DM",
            "Lead Capture",
            "Instagram → CRM",
            "Auto Reply to Comments"
        ],

        LinkedIn: [
            "Auto Publish Posts",
            "Schedule Content",
            "Lead Generation",
            "Profile Data → CRM",
            "Connection Tracking",
            "Lead Enrichment",
            "LinkedIn → Email",
            "LinkedIn → CRM"
        ],

        YouTube: [
            "New Video → Social Post",
            "Video Published → Email",
            "YouTube Lead Capture",
            "Comment Monitoring",
            "New Subscriber Alert",
            "Video Data → Google Sheets",
            "Content Distribution"
        ],

        GoHighLevel: [
            "Lead → Pipeline",
            "Form → CRM",
            "Missed Call → SMS",
            "Appointment Reminder",
            "Lead Follow-up",
            "Pipeline Automation",
            "Review Request",
            "Email Follow-up"
        ],

        HubSpot: [
            "New Lead → CRM",
            "Lead Assignment",
            "Deal Creation",
            "Contact Enrichment",
            "Email Follow-up",
            "Pipeline Update",
            "Lead Scoring",
            "Customer Notification"
        ],

        "Zoho CRM": [
            "Lead Creation",
            "Contact Sync",
            "Deal Automation",
            "Email Follow-up",
            "Lead Assignment",
            "Customer Update"
        ],

        Pipedrive: [
            "New Deal",
            "Lead Assignment",
            "Pipeline Update",
            "Follow-up Email",
            "Deal Notification",
            "Customer Sync"
        ],

        "Google Maps": [
            "Scrape Business Leads",
            "Extract Phone Numbers",
            "Extract Emails",
            "Extract Websites",
            "Save to Google Sheets",
            "Send Leads to CRM",
            "Lead Enrichment"
        ],

        Amazon: [
            "Product Scraping",
            "Price Monitoring",
            "Product Data → Sheets",
            "Competitor Tracking",
            "Stock Monitoring",
            "Product Alerts"
        ],

        Websites: [
            "Extract Website Data",
            "Product Scraping",
            "Contact Extraction",
            "Content Extraction",
            "Save Data to Sheets",
            "Send Data to CRM"
        ],

        Apollo: [
            "Find Prospects",
            "Export Leads",
            "Email Enrichment",
            "CRM Sync",
            "Lead Scoring",
            "Automated Outreach"
        ],

        "Email Finder": [
            "Find Business Emails",
            "Verify Emails",
            "Save to CRM",
            "Email Enrichment",
            "Lead List Creation"
        ],

        Shopify: [
            "New Order → CRM",
            "Abandoned Cart",
            "Order Notifications",
            "Customer Sync",
            "Inventory Alerts",
            "Review Requests",
            "Email Follow-up"
        ],

        WooCommerce: [
            "New Order → CRM",
            "Customer Sync",
            "Order Processing",
            "Abandoned Cart",
            "Inventory Alerts",
            "Email Automation"
        ],

        Stripe: [
            "New Payment → CRM",
            "Payment Confirmation",
            "Failed Payment Alert",
            "Customer Creation",
            "Invoice Automation",
            "Subscription Updates"
        ],

        Email: [
            "Welcome Email",
            "Abandoned Cart Email",
            "Lead Nurturing",
            "Customer Follow-up",
            "Review Request",
            "Re-engagement Campaign"
        ],

        "AI Chat Agent": [
            "Website Chatbot",
            "Lead Qualification",
            "FAQ Automation",
            "Appointment Booking",
            "Customer Support",
            "CRM Lead Creation"
        ],

        "Voice AI": [
            "AI Receptionist",
            "Inbound Call Agent",
            "Outbound Calling",
            "Appointment Booking",
            "Lead Qualification",
            "Call → CRM"
        ],

        "WhatsApp AI": [
            "WhatsApp Chatbot",
            "Lead Qualification",
            "Appointment Booking",
            "Customer Support",
            "Order Updates",
            "CRM Integration"
        ],

        "Website AI": [
            "AI Website Assistant",
            "Lead Qualification",
            "FAQ Agent",
            "Appointment Booking",
            "Product Assistant",
            "CRM Integration"
        ]

    };


    /* ==========================================
       STATE
    ========================================== */

    let selectedCategory = null;
    let selectedPlatform = null;

    let nodes = [];


    /* ==========================================
       ICON HELPER
    ========================================== */

    function getAutomationIcon(name) {

        const text = name.toLowerCase();

        if (
            text.includes("email") ||
            text.includes("mail")
        ) {
            return "fa-solid fa-envelope";
        }

        if (
            text.includes("lead") ||
            text.includes("prospect")
        ) {
            return "fa-solid fa-user-plus";
        }

        if (
            text.includes("crm") ||
            text.includes("pipeline")
        ) {
            return "fa-solid fa-users";
        }

        if (
            text.includes("post") ||
            text.includes("content") ||
            text.includes("publish")
        ) {
            return "fa-solid fa-pen";
        }

        if (
            text.includes("call") ||
            text.includes("phone")
        ) {
            return "fa-solid fa-phone";
        }

        if (
            text.includes("scrap") ||
            text.includes("extract")
        ) {
            return "fa-solid fa-spider";
        }

        if (
            text.includes("payment") ||
            text.includes("invoice")
        ) {
            return "fa-solid fa-credit-card";
        }

        if (
            text.includes("chat") ||
            text.includes("dm")
        ) {
            return "fa-solid fa-comments";
        }

        return "fa-solid fa-bolt";
    }


    /* ==========================================
       SHOW VIEW
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

                selectedCategory =
                    button.dataset.category;

                selectedPlatform = null;

                document
                    .querySelectorAll(".workflow-category")
                    .forEach(item => {
                        item.classList.remove("active");
                    });

                button.classList.add("active");

                loadPlatforms(
                    selectedCategory
                );

            });

        });


    /* ==========================================
       LOAD PLATFORMS
    ========================================== */

    function loadPlatforms(category) {

        const data =
            workflowData[category];

        if (!data) return;

        platformTitle.textContent =
            data.title;

        platformList.innerHTML = "";

        data.platforms.forEach(platform => {

            const button =
                document.createElement("button");

            button.className =
                "workflow-platform";

            button.innerHTML = `

                <div class="platform-icon">

                    <i class="${platform.icon}"></i>

                </div>

                <div>

                    <strong>
                        ${platform.name}
                    </strong>

                    <small>
                        ${platform.description}
                    </small>

                </div>

                <i
                    class="fa-solid fa-chevron-right"
                    style="margin-left:auto;color:#555;font-size:10px;">
                </i>

            `;

            button.addEventListener(
                "click",
                () => {

                    selectedPlatform =
                        platform.name;

                    loadAutomations(
                        platform.name
                    );

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
            automations[platform] || [];

        automationTitle.textContent =
            platform;

        automationList.innerHTML = "";

        list.forEach(automation => {

            const button =
                document.createElement("button");

            button.className =
                "workflow-automation";

            button.innerHTML = `

                <div class="automation-icon">

                    <i class="${getAutomationIcon(
                        automation
                    )}"></i>

                </div>

                <div>

                    <strong>
                        ${automation}
                    </strong>

                    <small>
                        Add to your workflow
                    </small>

                </div>

                <i
                    class="fa-solid fa-plus"
                    style="margin-left:auto;color:#555;font-size:10px;">
                </i>

            `;

            button.addEventListener(
                "click",
                () => {

                    addWorkflowNode(
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
       ADD NODE TO CANVAS
    ========================================== */

    function addWorkflowNode(
        platform,
        automation
    ) {

        const id =
            Date.now() +
            Math.random();

        const index =
            nodes.length;

        const node = {

            id,

            platform,

            automation,

            x: 120 + (index % 3) * 280,

            y: 120 +
                Math.floor(index / 3) * 150

        };

        nodes.push(node);

        renderNodes();

        updateCounter();

    }


    /* ==========================================
       RENDER NODES
    ========================================== */

    function renderNodes() {

        canvasNodes.innerHTML = "";

        workflowSvg.innerHTML = "";

        if (nodes.length === 0) {

            canvasEmpty.classList.remove(
                "hidden"
            );

            return;

        }

        canvasEmpty.classList.add(
            "hidden"
        );


        nodes.forEach((node, index) => {

            const element =
                document.createElement("div");

            element.className =
                "workflow-node";

            element.style.left =
                node.x + "px";

            element.style.top =
                node.y + "px";

            element.innerHTML = `

                <div class="workflow-node-icon">

                    <i class="${getAutomationIcon(
                        node.automation
                    )}"></i>

                </div>

                <div>

                    <small>
                        ${node.platform}
                    </small>

                    <strong>
                        ${node.automation}
                    </strong>

                </div>

            `;

            canvasNodes.appendChild(
                element
            );

        });


        requestAnimationFrame(() => {

            drawConnections();

        });

    }


    /* ==========================================
       DRAW CONNECTIONS
    ========================================== */

    function drawConnections() {

        workflowSvg.innerHTML = "";

        for (
            let i = 0;
            i < nodes.length - 1;
            i++
        ) {

            const current =
                nodes[i];

            const next =
                nodes[i + 1];

            const x1 =
                current.x + 205;

            const y1 =
                current.y + 35;

            const x2 =
                next.x;

            const y2 =
                next.y + 35;


            const distance =
                Math.abs(x2 - x1);


            const curve =
                Math.max(
                    60,
                    distance * .45
                );


            const path =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );


            const d = `
                M ${x1} ${y1}
                C
                ${x1 + curve} ${y1},
                ${x2 - curve} ${y2},
                ${x2} ${y2}
            `;


            path.setAttribute(
                "d",
                d
            );

            path.classList.add(
                "workflow-line"
            );

            workflowSvg.appendChild(
                path
            );

        }

    }


    /* ==========================================
       COUNTER
    ========================================== */

    function updateCounter() {

        nodeCounter.textContent =
            `${nodes.length} ${
                nodes.length === 1
                    ? "node"
                    : "nodes"
            }`;

    }


    /* ==========================================
       BACK TO CATEGORIES
    ========================================== */

    backToCategories
        .addEventListener("click", () => {

            selectedCategory = null;

            selectedPlatform = null;

            showView(categoryView);

        });


    /* ==========================================
       BACK TO PLATFORMS
    ========================================== */

    backToPlatforms
        .addEventListener("click", () => {

            if (selectedCategory) {

                loadPlatforms(
                    selectedCategory
                );

            }

        });


    /* ==========================================
       CLEAR WORKFLOW
    ========================================== */

    clearWorkflow
        .addEventListener("click", () => {

            nodes = [];

            renderNodes();

            updateCounter();

        });


    /* ==========================================
       CANVAS DRAG / PAN
    ========================================== */

    let isDragging = false;

    let startX = 0;
    let startY = 0;

    let scrollLeft = 0;
    let scrollTop = 0;


    canvas.addEventListener(
        "mousedown",
        event => {

            if (
                event.target.closest(
                    ".workflow-node"
                )
            ) {
                return;
            }

            isDragging = true;

            startX =
                event.pageX -
                canvas.offsetLeft;

            startY =
                event.pageY -
                canvas.offsetTop;

            scrollLeft =
                canvas.scrollLeft;

            scrollTop =
                canvas.scrollTop;

        }
    );


    canvas.addEventListener(
        "mouseleave",
        () => {

            isDragging = false;

        }
    );


    canvas.addEventListener(
        "mouseup",
        () => {

            isDragging = false;

        }
    );


    canvas.addEventListener(
        "mousemove",
        event => {

            if (!isDragging) return;

            event.preventDefault();

            const x =
                event.pageX -
                canvas.offsetLeft;

            const y =
                event.pageY -
                canvas.offsetTop;

            const walkX =
                (x - startX) * 1.2;

            const walkY =
                (y - startY) * 1.2;

            canvas.scrollLeft =
                scrollLeft - walkX;

            canvas.scrollTop =
                scrollTop - walkY;

        }
    );


    /* ==========================================
       START
    ========================================== */

    showView(categoryView);

    updateCounter();

});
