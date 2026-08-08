```javascript
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

    let timer;

    megaParent.addEventListener("mouseenter", () => {

        clearTimeout(timer);

        megaMenu.classList.add("active");

    });


    megaParent.addEventListener("mouseleave", () => {

        timer = setTimeout(() => {

            megaMenu.classList.remove("active");

        }, 250);

    });


    megaMenu.addEventListener("mouseenter", () => {

        clearTimeout(timer);

    });


    megaMenu.addEventListener("mouseleave", () => {

        timer = setTimeout(() => {

            megaMenu.classList.remove("active");

        }, 250);

    });

}


// =====================================
// SOLUTIONS MEGA MENU SWITCH
// =====================================

const categories =
    document.querySelectorAll(".category");

const contentBoxes =
    document.querySelectorAll(".content-box");


categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(item => {

            item.classList.remove("active");

        });


        category.classList.add("active");


        contentBoxes.forEach(box => {

            box.classList.remove("active");

        });


        const target =
            category.dataset.content;


        const selectedContent =
            document.getElementById(target);


        if (selectedContent) {

            selectedContent.classList.add("active");

        }

    });

});


// =====================================
// MOBILE MENU
// =====================================

const menuBtn =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".nav-links");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}


// =====================================
// VIDEO CARDS
// =====================================

const cards =
    document.querySelectorAll(".video-card");


cards.forEach(card => {

    const video =
        card.querySelector("video");


    if (!video) return;


    card.addEventListener("click", () => {

        cards.forEach(otherCard => {

            const otherVideo =
                otherCard.querySelector("video");


            if (
                otherVideo &&
                otherVideo !== video
            ) {

                otherVideo.pause();

                otherVideo.currentTime = 0;

            }

        });


        if (video.paused) {

            video.play().catch(() => {});

        }
        else {

            video.pause();

        }

    });

});


// =====================================
// AI ECOSYSTEM
// =====================================

const ecoNodes =
    document.querySelectorAll(".eco-node");


const ecoData = {

    sales: {

        department: "Sales Department",

        title:
            "Turn Your Sales Process Into an AI-Powered System",

        description:
            "Automatically capture and qualify leads, book meetings, update your CRM, follow up with prospects and keep your sales pipeline moving without the manual work.",

        features: [
            "Lead Qualification",
            "Lead Follow-Ups",
            "Meeting Booking",
            "CRM Automation",
            "Proposal Generation",
            "Pipeline Management"
        ],

        stats: {

            stat1: "18 hrs",
            stat1Label: "Saved Every Week",

            stat2: "+32%",
            stat2Label: "Sales Efficiency",

            stat3: "24/7",
            stat3Label: "Automation"

        },

        button:
            "Explore Sales Automation"

    },


    marketing: {

        department:
            "Marketing Department",

        title:
            "Turn Your Marketing Into an Automated Growth Engine",

        description:
            "Automate content workflows, campaign follow-ups, lead nurturing and reporting so your marketing keeps moving without constant manual work.",

        features: [
            "Content Automation",
            "Lead Nurturing",
            "Email Campaigns",
            "Social Media Workflows",
            "Campaign Reporting",
            "Lead Retargeting"
        ],

        stats: {

            stat1: "12 hrs",
            stat1Label: "Saved Every Week",

            stat2: "+41%",
            stat2Label: "Lead Engagement",

            stat3: "24/7",
            stat3Label: "Campaign Automation"

        },

        button:
            "Explore Marketing Automation"

    },


    support: {

        department:
            "Support Department",

        title:
            "Give Your Customers Instant AI-Powered Support",

        description:
            "Use AI chat, WhatsApp automation and intelligent support workflows to answer customers faster and reduce repetitive support work.",

        features: [
            "AI Chat Support",
            "WhatsApp Automation",
            "Instant Replies",
            "Ticket Management",
            "Knowledge Base",
            "Customer Follow-Ups"
        ],

        stats: {

            stat1: "20 hrs",
            stat1Label: "Saved Every Week",

            stat2: "-45%",
            stat2Label: "Support Workload",

            stat3: "24/7",
            stat3Label: "Customer Support"

        },

        button:
            "Explore Support Automation"

    },


    operations: {

        department:
            "Operations Department",

        title:
            "Automate the Work That Slows Your Business Down",

        description:
            "Connect your tools and automate repetitive operational tasks, data entry, notifications and internal workflows so your team can work more efficiently.",

        features: [
            "Workflow Automation",
            "Data Entry",
            "Task Management",
            "System Integrations",
            "Internal Notifications",
            "Process Automation"
        ],

        stats: {

            stat1: "25 hrs",
            stat1Label: "Saved Every Week",

            stat2: "-38%",
            stat2Label: "Manual Work",

            stat3: "24/7",
            stat3Label: "Workflow Automation"

        },

        button:
            "Explore Operations Automation"

    },


    finance: {

        department:
            "Finance Department",

        title:
            "Make Financial Operations Faster and More Accurate",

        description:
            "Automate repetitive finance workflows, reporting, notifications and data processing while keeping your financial operations organized and efficient.",

        features: [
            "Invoice Automation",
            "Payment Notifications",
            "Financial Reports",
            "Data Processing",
            "Expense Tracking",
            "Client Billing"
        ],

        stats: {

            stat1: "15 hrs",
            stat1Label: "Saved Every Week",

            stat2: "-30%",
            stat2Label: "Manual Processing",

            stat3: "24/7",
            stat3Label: "Financial Workflows"

        },

        button:
            "Explore Finance Automation"

    },


    hr: {

        department:
            "Human Resources",

        title:
            "Automate Repetitive HR Tasks and Employee Workflows",

        description:
            "Streamline recruitment, onboarding, employee communication and repetitive HR processes with intelligent automation.",

        features: [
            "Candidate Screening",
            "Interview Scheduling",
            "Employee Onboarding",
            "HR Notifications",
            "Document Workflows",
            "Employee Follow-Ups"
        ],

        stats: {

            stat1: "14 hrs",
            stat1Label: "Saved Every Week",

            stat2: "+35%",
            stat2Label: "Hiring Efficiency",

            stat3: "24/7",
            stat3Label: "HR Automation"

        },

        button:
            "Explore HR Automation"

    }

};


// =====================================
// AI ECOSYSTEM CLICK
// =====================================

ecoNodes.forEach(node => {

    node.addEventListener("click", () => {

        const data =
            ecoData[node.dataset.id];


        if (!data) return;


        ecoNodes.forEach(item => {

            item.classList.remove("active");

        });


        node.classList.add("active");


        const department =
            document.querySelector(
                ".department-name"
            );


        if (department) {

            department.innerHTML =
                data.department;

        }


        const title =
            document.getElementById("ecoTitle");


        if (title) {

            title.innerHTML =
                data.title;

        }


        const description =
            document.getElementById(
                "ecoDescription"
            );


        if (description) {

            description.innerHTML =
                data.description;

        }


        const featureBox =
            document.getElementById(
                "ecoFeatures"
            );


        if (featureBox) {

            featureBox.innerHTML = "";


            data.features.forEach(feature => {

                const featureItem =
                    document.createElement("div");


                featureItem.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    ${feature}
                `;


                featureBox.appendChild(
                    featureItem
                );

            });

        }


        const stat1 =
            document.getElementById("stat1");


        if (stat1) {

            stat1.innerHTML =
                data.stats.stat1;

        }


        const stat1Label =
            stat1
                ? stat1.parentElement.querySelector("span")
                : null;


        if (stat1Label) {

            stat1Label.innerHTML =
                data.stats.stat1Label;

        }


        const stat2 =
            document.getElementById("stat2");


        if (stat2) {

            stat2.innerHTML =
                data.stats.stat2;

        }


        const stat2Label =
            stat2
                ? stat2.parentElement.querySelector("span")
                : null;


        if (stat2Label) {

            stat2Label.innerHTML =
                data.stats.stat2Label;

        }


        const stat3 =
            document.getElementById("stat3");


        if (stat3) {

            stat3.innerHTML =
                data.stats.stat3;

        }


        const stat3Label =
            stat3
                ? stat3.parentElement.querySelector("span")
                : null;


        if (stat3Label) {

            stat3Label.innerHTML =
                data.stats.stat3Label;

        }


        const button =
            document.querySelector(
                ".ecosystem-btn"
            );


        if (button) {

            button.innerHTML =
                data.button;

        }

    });

});


// =====================================
// TETA AI
// =====================================

const questionEl =
    document.getElementById("question");

const optionsEl =
    document.getElementById("options");


if (
    window.tetaKnowledge &&
    questionEl &&
    optionsEl
) {

    function startTeta() {

        loadNode("start");

    }


    function loadNode(nodeName) {

        const node =
            window.tetaKnowledge[nodeName];


        if (!node) return;


        questionEl.innerHTML =
            node.question;


        optionsEl.innerHTML = "";


        node.options.forEach(item => {

            const btn =
                document.createElement("button");


            btn.type = "button";


            btn.textContent =
                item.text;


            btn.addEventListener(
                "click",
                () => {

                    if (item.next) {

                        loadNode(item.next);

                    }
                    else if (item.solution) {

                        showSolution(
                            item.solution
                        );

                    }

                }
            );


            optionsEl.appendChild(btn);

        });

    }


    function showSolution(text) {

        questionEl.innerHTML =
            "Recommended AI Solution";


        optionsEl.innerHTML = `

            <div class="teta-solution">
                ${text}
            </div>

            <button
                type="button"
                id="restartTeta"
            >
                Explore Another Solution
            </button>

            <button
                type="button"
                id="bookCall"
            >
                Book Free AI Strategy Call
            </button>

        `;


        const restart =
            document.getElementById(
                "restartTeta"
            );


        if (restart) {

            restart.addEventListener(
                "click",
                startTeta
            );

        }


        const book =
            document.getElementById(
                "bookCall"
            );


        if (book) {

            book.addEventListener(
                "click",
                showLeadForm
            );

        }

    }


    function showLeadForm() {

        questionEl.innerHTML =
            "Let's build your AI solution";


        optionsEl.innerHTML = `

            <button
                type="button"
                id="submitTetaRequest"
            >
                Submit Request
            </button>

        `;

    }


    startTeta();

}


// =====================================
// AI WORKFLOW BUILDER
// =====================================

const workflowToolArea =
    document.getElementById(
        "workflowToolArea"
    );


const workflowPathItems =
    document.getElementById(
        "workflowPathItems"
    );


const workflowBack =
    document.getElementById(
        "workflowBack"
    );


const workflowSidebarTitle =
    document.getElementById(
        "workflowSidebarTitle"
    );


const workflowNodes =
    document.getElementById(
        "workflowNodes"
    );


const clearWorkflow =
    document.getElementById(
        "clearWorkflow"
    );


const nodeCount =
    document.getElementById(
        "nodeCount"
    );


const priceEstimate =
    document.getElementById(
        "priceEstimate"
    );


const timelineEstimate =
    document.getElementById(
        "timelineEstimate"
    );


// =====================================
// WORKFLOW SEARCH ELEMENT
// =====================================

const workflowSearch =
    document.getElementById(
        "workflowSearch"
    );


// =====================================
// WORKFLOW STATE
// =====================================

let selectedNodes = [];

let currentLevel = "main";

let currentCategory = null;

let currentPlatform = null;


// =====================================
// WORKFLOW DATA
// =====================================

const workflowData = {

    crm: {

        name: "CRM",

        platforms: [

            {
                id: "hubspot",

                name: "HubSpot",

                options: [
                    "Contacts",
                    "Companies",
                    "Deals",
                    "Pipelines",
                    "Tasks",
                    "Forms",
                    "Workflows",
                    "Emails"
                ]

            },

            {
                id: "gohighlevel",

                name: "GoHighLevel",

                options: [
                    "Contacts",
                    "Opportunities",
                    "Pipelines",
                    "Workflows",
                    "Calendars",
                    "Forms",
                    "Conversations",
                    "Campaigns"
                ]

            },

            {
                id: "zoho",

                name: "Zoho CRM",

                options: [
                    "Leads",
                    "Contacts",
                    "Deals",
                    "Accounts",
                    "Tasks",
                    "Workflows"
                ]

            }

        ]

    },


    social: {

        name: "Social Media",

        platforms: [

            {
                id: "facebook",

                name: "Facebook",

                options: [
                    "Posts",
                    "Comments",
                    "Messages",
                    "Leads",
                    "Pages",
                    "Ads"
                ]

            },

            {
                id: "instagram",

                name: "Instagram",

                options: [
                    "Posts",
                    "Comments",
                    "Messages",
                    "Reels",
                    "Media"
                ]

            },

            {
                id: "linkedin",

                name: "LinkedIn",

                options: [
                    "Posts",
                    "Messages",
                    "Leads",
                    "Company Pages"
                ]

            },

            {
                id: "tiktok",

                name: "TikTok",

                options: [
                    "Videos",
                    "Comments",
                    "Messages",
                    "Leads"
                ]

            },

            {
                id: "youtube",

                name: "YouTube",

                options: [
                    "Videos",
                    "Comments",
                    "Channels",
                    "Subscribers"
                ]

            }

        ]

    },


    website: {

        name: "Website",

        platforms: [

            {
                id: "wordpress",

                name: "WordPress",

                options: [
                    "Posts",
                    "Pages",
                    "Forms",
                    "Users",
                    "Comments",
                    "Media"
                ]

            },

            {
                id: "shopify",

                name: "Shopify",

                options: [
                    "Products",
                    "Orders",
                    "Customers",
                    "Inventory",
                    "Discounts"
                ]

            },

            {
                id: "webflow",

                name: "Webflow",

                options: [
                    "CMS",
                    "Forms",
                    "Collections",
                    "Items"
                ]

            }

        ]

    },


    ecommerce: {

        name: "E-commerce",

        platforms: [

            {
                id: "shopify",

                name: "Shopify",

                options: [
                    "Products",
                    "Orders",
                    "Customers",
                    "Inventory",
                    "Payments",
                    "Discounts"
                ]

            },

            {
                id: "woocommerce",

                name: "WooCommerce",

                options: [
                    "Products",
                    "Orders",
                    "Customers",
                    "Coupons",
                    "Inventory"
                ]

            }

        ]

    },


    communication: {

        name: "Communication",

        platforms: [

            {
                id: "gmail",

                name: "Gmail",

                options: [
                    "Send Email",
                    "Receive Email",
                    "Search Email",
                    "Attachments",
                    "Labels"
                ]

            },

            {
                id: "slack",

                name: "Slack",

                options: [
                    "Send Message",
                    "Channels",
                    "Users",
                    "Files"
                ]

            },

            {
                id: "teams",

                name: "Microsoft Teams",

                options: [
                    "Messages",
                    "Channels",
                    "Users",
                    "Meetings"
                ]

            }

        ]

    },


    ai: {

        name: "AI",

        platforms: [

            {
                id: "openai",

                name: "OpenAI",

                options: [
                    "Chat",
                    "Text Generation",
                    "Image Generation",
                    "Embeddings",
                    "Analysis"
                ]

            },

            {
                id: "claude",

                name: "Claude",

                options: [
                    "Chat",
                    "Text Generation",
                    "Analysis",
                    "Documents"
                ]

            },

            {
                id: "gemini",

                name: "Gemini",

                options: [
                    "Chat",
                    "Text Generation",
                    "Vision",
                    "Analysis"
                ]

            }

        ]

    },


    voice: {

        name: "Voice AI",

        platforms: [

            {
                id: "retell",

                name: "Retell AI",

                options: [
                    "Voice Agent",
                    "Make Call",
                    "Transcript",
                    "Recording",
                    "Analysis"
                ]

            },

            {
                id: "twilio",

                name: "Twilio",

                options: [
                    "Make Call",
                    "Send SMS",
                    "Receive SMS",
                    "Phone Numbers"
                ]

            }

        ]

    },


    automation: {

        name: "Automation",

        platforms: [

            {
                id: "n8n",

                name: "n8n",

                options: [
                    "Workflow",
                    "HTTP Request",
                    "Webhook",
                    "Code",
                    "Google Sheets"
                ]

            },

            {
                id: "zapier",

                name: "Zapier",

                options: [
                    "Trigger",
                    "Action",
                    "Filter",
                    "Formatter"
                ]

            },

            {
                id: "make",

                name: "Make",

                options: [
                    "Scenario",
                    "Webhook",
                    "Router",
                    "HTTP"
                ]

            }

        ]

    },


    marketing: {

        name: "Marketing",

        platforms: [

            {
                id: "meta",

                name: "Meta Ads",

                options: [
                    "Campaigns",
                    "Ad Sets",
                    "Ads",
                    "Leads",
                    "Audiences"
                ]

            },

            {
                id: "google",

                name: "Google Ads",

                options: [
                    "Campaigns",
                    "Ad Groups",
                    "Ads",
                    "Leads",
                    "Conversions"
                ]

            },

            {
                id: "mailchimp",

                name: "Mailchimp",

                options: [
                    "Contacts",
                    "Campaigns",
                    "Lists",
                    "Tags",
                    "Automation"
                ]

            }

        ]

    },


    operations: {

        name: "Operations",

        platforms: [

            {
                id: "google-sheets",

                name: "Google Sheets",

                options: [
                    "Read Row",
                    "Add Row",
                    "Update Row",
                    "Delete Row",
                    "Search Rows"
                ]

            },

            {
                id: "airtable",

                name: "Airtable",

                options: [
                    "Find Record",
                    "Create Record",
                    "Update Record",
                    "Delete Record"
                ]

            }

        ]

    },


    payments: {

        name: "Payments",

        platforms: [

            {
                id: "stripe",

                name: "Stripe",

                options: [
                    "Payment",
                    "Customer",
                    "Invoice",
                    "Subscription",
                    "Refund"
                ]

            },

            {
                id: "paypal",

                name: "PayPal",

                options: [
                    "Payment",
                    "Order",
                    "Refund",
                    "Customer"
                ]

            }

        ]

    },


    data: {

        name: "Data & Productivity",

        platforms: [

            {
                id: "google-sheets",

                name: "Google Sheets",

                options: [
                    "Read Data",
                    "Add Row",
                    "Update Row",
                    "Find Row",
                    "Delete Row"
                ]

            },

            {
                id: "airtable",

                name: "Airtable",

                options: [
                    "Find Record",
                    "Create Record",
                    "Update Record",
                    "Delete Record"
                ]

            }

        ]

    }

};
```
```javascript
// =====================================
// WORKFLOW CATEGORY / PLATFORM / OPTION
// =====================================

if (workflowToolArea) {

    workflowToolArea.addEventListener(
        "click",
        function (event) {


            // =====================================
            // CATEGORY BUTTON
            // =====================================

            const categoryButton =
                event.target.closest(
                    "button[data-category]"
                );


            if (categoryButton) {

                const categoryId =
                    categoryButton.dataset.category;


                const category =
                    workflowData[categoryId];


                if (!category) return;


                currentCategory =
                    categoryId;

                currentPlatform =
                    null;

                currentLevel =
                    "platforms";


                renderPlatforms(category);


                return;

            }


            // =====================================
            // PLATFORM BUTTON
            // =====================================

            const platformButton =
                event.target.closest(
                    "button[data-platform]"
                );


            if (platformButton) {

                const platformId =
                    platformButton.dataset.platform;


                const category =
                    workflowData[currentCategory];


                if (!category) return;


                const platform =
                    category.platforms.find(
                        item =>
                            item.id === platformId
                    );


                if (!platform) return;


                currentPlatform =
                    platformId;

                currentLevel =
                    "options";


                renderPlatformOptions(
                    platform
                );


                return;

            }


            // =====================================
            // OPTION BUTTON
            // =====================================

            const optionButton =
                event.target.closest(
                    "button[data-option]"
                );


            if (optionButton) {

                const option =
                    optionButton.dataset.option;


                const category =
                    workflowData[currentCategory];


                if (!category) return;


                const platform =
                    category.platforms.find(
                        item =>
                            item.id === currentPlatform
                    );


                if (!platform) return;


                optionButton.classList.toggle(
                    "selected"
                );


                addWorkflowNode({

                    categoryId:
                        currentCategory,

                    category:
                        category.name,

                    platformId:
                        currentPlatform,

                    platform:
                        platform.name,

                    option:
                        option

                });

            }

        }
    );

}


// =====================================
// RENDER PLATFORMS
// =====================================

function renderPlatforms(category) {

    if (!workflowToolArea) return;


    // Sidebar title

    if (workflowSidebarTitle) {

        workflowSidebarTitle.textContent =
            category.name;

    }


    // Show back button

    if (workflowBack) {

        workflowBack.style.display =
            "inline-flex";

    }


    // Clear current tools

    workflowToolArea.innerHTML = "";


    // Create category wrapper

    const wrapper =
        document.createElement("div");


    wrapper.className =
        "workflow-category dynamic-category";


    // Create items container

    const items =
        document.createElement("div");


    items.className =
        "workflow-items";


    // Add platforms

    category.platforms.forEach(
        platform => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.dataset.platform =
                platform.id;


            button.textContent =
                platform.name;


            items.appendChild(
                button
            );

        }
    );


    wrapper.appendChild(
        items
    );


    workflowToolArea.appendChild(
        wrapper
    );


    // Update path

    updateWorkflowPath([
        category.name
    ]);

}


// =====================================
// RENDER PLATFORM OPTIONS
// =====================================

function renderPlatformOptions(platform) {

    if (!workflowToolArea) return;


    // Sidebar title

    if (workflowSidebarTitle) {

        workflowSidebarTitle.textContent =
            platform.name;

    }


    // Show back button

    if (workflowBack) {

        workflowBack.style.display =
            "inline-flex";

    }


    // Clear current tools

    workflowToolArea.innerHTML =
        "";


    // Wrapper

    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "workflow-category dynamic-category";


    // Items

    const items =
        document.createElement(
            "div"
        );


    items.className =
        "workflow-items";


    // Create options

    platform.options.forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.dataset.option =
                option;


            button.textContent =
                option;


            items.appendChild(
                button
            );

        }
    );


    wrapper.appendChild(
        items
    );


    workflowToolArea.appendChild(
        wrapper
    );


    // Update path

    updateWorkflowPath([

        workflowData[
            currentCategory
        ].name,

        platform.name

    ]);

}


// =====================================
// WORKFLOW PATH
// =====================================

function updateWorkflowPath(items) {

    if (!workflowPathItems) return;


    workflowPathItems.innerHTML =
        "";


    items.forEach(
        (item, index) => {


            // Path item

            const span =
                document.createElement(
                    "span"
                );


            span.className =
                "workflow-path-item";


            span.textContent =
                item;


            workflowPathItems.appendChild(
                span
            );


            // Arrow

            if (
                index <
                items.length - 1
            ) {

                const separator =
                    document.createElement(
                        "span"
                    );


                separator.className =
                    "workflow-path-separator";


                separator.textContent =
                    " → ";


                workflowPathItems.appendChild(
                    separator
                );

            }

        }
    );

}


// =====================================
// BACK BUTTON
// =====================================

if (workflowBack) {

    workflowBack.addEventListener(
        "click",
        function () {


            // =================================
            // OPTIONS → PLATFORMS
            // =================================

            if (
                currentLevel ===
                "options"
            ) {

                const category =
                    workflowData[
                        currentCategory
                    ];


                if (!category) return;


                currentPlatform =
                    null;


                currentLevel =
                    "platforms";


                renderPlatforms(
                    category
                );


                return;

            }


            // =================================
            // PLATFORMS → MAIN
            // =================================

            if (
                currentLevel ===
                "platforms"
            ) {

                currentCategory =
                    null;


                currentPlatform =
                    null;


                currentLevel =
                    "main";


                restoreMainCategories();

            }

        }
    );

}


// =====================================
// RESTORE MAIN CATEGORIES
// =====================================

function restoreMainCategories() {

    if (!workflowToolArea) return;


    // Sidebar title

    if (workflowSidebarTitle) {

        workflowSidebarTitle.textContent =
            "What do you want to automate?";

    }


    // Hide back button

    if (workflowBack) {

        workflowBack.style.display =
            "none";

    }


    // Restore categories

    workflowToolArea.innerHTML = `

        <div
            class="workflow-category dynamic-category"
            data-level="main"
        >

            <div class="workflow-items">

                <button
                    type="button"
                    data-category="social"
                >
                    Social Media
                </button>


                <button
                    type="button"
                    data-category="crm"
                >
                    CRM
                </button>


                <button
                    type="button"
                    data-category="website"
                >
                    Website
                </button>


                <button
                    type="button"
                    data-category="ecommerce"
                >
                    E-commerce
                </button>


                <button
                    type="button"
                    data-category="communication"
                >
                    Communication
                </button>


                <button
                    type="button"
                    data-category="ai"
                >
                    AI
                </button>


                <button
                    type="button"
                    data-category="voice"
                >
                    Voice AI
                </button>


                <button
                    type="button"
                    data-category="automation"
                >
                    Automation
                </button>


                <button
                    type="button"
                    data-category="marketing"
                >
                    Marketing
                </button>


                <button
                    type="button"
                    data-category="operations"
                >
                    Operations
                </button>


                <button
                    type="button"
                    data-category="payments"
                >
                    Payments
                </button>


                <button
                    type="button"
                    data-category="data"
                >
                    Data & Productivity
                </button>

            </div>

        </div>

    `;


    // Restore path

    if (workflowPathItems) {

        workflowPathItems.textContent =
            "Nothing selected yet";

    }

}


// =====================================
// INITIAL WORKFLOW STATE
// =====================================

if (workflowToolArea) {

    restoreMainCategories();

}
```
```javascript
// =====================================
// ADD WORKFLOW NODE
// =====================================

function addWorkflowNode(data) {

    if (!workflowNodes) return;


    // =====================================
    // CREATE UNIQUE NODE NAME
    // =====================================

    const nodeName =
        data.platform +
        " - " +
        data.option;


    // =====================================
    // PREVENT DUPLICATES
    // =====================================

    if (
        selectedNodes.includes(
            nodeName
        )
    ) {

        return;

    }


    // =====================================
    // SAVE NODE
    // =====================================

    selectedNodes.push(
        nodeName
    );


    // =====================================
    // REMOVE EMPTY MESSAGE
    // =====================================

    const empty =
        workflowNodes.querySelector(
            ".empty-workflow"
        );


    if (empty) {

        empty.remove();

    }


    // =====================================
    // CREATE NODE
    // =====================================

    const node =
        document.createElement(
            "div"
        );


    node.className =
        "workflow-node";


    node.dataset.nodeName =
        nodeName;


    // =====================================
    // NODE HTML
    // =====================================

    node.innerHTML = `

        <div class="workflow-node-icon">
            ⚡
        </div>


        <div class="workflow-node-content">

            <strong>
                ${data.platform}
            </strong>


            <span>
                ${data.option}
            </span>

        </div>

    `;


    // =====================================
    // ADD TO WORKFLOW
    // =====================================

    workflowNodes.appendChild(
        node
    );


    // =====================================
    // DRAGGABLE NODE
    // =====================================

    if (
        typeof makeNodeDraggable ===
        "function"
    ) {

        makeNodeDraggable(
            node
        );

    }


    // =====================================
    // UPDATE ESTIMATE
    // =====================================

    updateWorkflowEstimate();

}


// =====================================
// WORKFLOW PRICING
// =====================================

const workflowPricing = {

    // =================================
    // SOCIAL MEDIA
    // =================================

    "Facebook - Leads":
        300,

    "Instagram - Messages":
        250,

    "LinkedIn - Leads":
        400,

    "YouTube - Videos":
        350,


    // =================================
    // CRM
    // =================================

    "HubSpot - Contacts":
        300,

    "HubSpot - Deals":
        400,

    "HubSpot - Pipelines":
        450,


    // =================================
    // AI
    // =================================

    "OpenAI - Chat":
        300,

    "Claude - Chat":
        300,

    "Gemini - Chat":
        300,


    // =================================
    // VOICE AI
    // =================================

    "Retell AI - Voice Agent":
        600,

    "Twilio - Make Call":
        500,


    // =================================
    // AUTOMATION
    // =================================

    "n8n - Workflow":
        400,

    "Zapier - Trigger":
        350,

    "Make - Scenario":
        400,


    // =================================
    // PAYMENTS
    // =================================

    "Stripe - Payment":
        400,

    "PayPal - Payment":
        400

};


// =====================================
// UPDATE WORKFLOW ESTIMATE
// =====================================

function updateWorkflowEstimate() {


    // =====================================
    // START TOTAL
    // =====================================

    let total = 0;


    // =====================================
    // CALCULATE PRICE
    // =====================================

    selectedNodes.forEach(
        node => {

            total +=
                workflowPricing[node] ||
                250;

        }
    );


    // =====================================
    // NODE COUNT
    // =====================================

    if (nodeCount) {

        nodeCount.innerText =
            selectedNodes.length;

    }


    // =====================================
    // PRICE
    // =====================================

    if (priceEstimate) {

        priceEstimate.innerText =
            "$" + total;

    }


    // =====================================
    // TIMELINE
    // =====================================

    if (!timelineEstimate) {

        return;

    }


    // =====================================
    // ZERO NODES
    // =====================================

    if (
        selectedNodes.length ===
        0
    ) {

        timelineEstimate.innerText =
            "—";

    }


    // =====================================
    // 1–3 NODES
    // =====================================

    else if (
        selectedNodes.length <=
        3
    ) {

        timelineEstimate.innerText =
            "3-5 Days";

    }


    // =====================================
    // 4–6 NODES
    // =====================================

    else if (
        selectedNodes.length <=
        6
    ) {

        timelineEstimate.innerText =
            "1-2 Weeks";

    }


    // =====================================
    // 7+ NODES
    // =====================================

    else {

        timelineEstimate.innerText =
            "2-4 Weeks";

    }

}


// =====================================
// CLEAR WORKFLOW
// =====================================

if (clearWorkflow) {

    clearWorkflow.addEventListener(
        "click",
        function () {


            // =================================
            // CLEAR SELECTED NODES
            // =================================

            selectedNodes = [];


            // =================================
            // CLEAR VISUAL WORKFLOW
            // =================================

            if (workflowNodes) {

                workflowNodes.innerHTML = `

                    <div class="empty-workflow">

                        Select tools from the left
                        to start building your
                        automation workflow.

                    </div>

                `;

            }


            // =================================
            // RESET ESTIMATE
            // =================================

            updateWorkflowEstimate();


            // =================================
            // REMOVE SELECTED BUTTON STATES
            // =================================

            document
                .querySelectorAll(
                    "#workflowToolArea button.selected"
                )
                .forEach(button => {

                    button.classList.remove(
                        "selected"
                    );

                });

        }
    );

}


// =====================================
// INITIAL ESTIMATE
// =====================================

updateWorkflowEstimate();


// =====================================
// HEADER CALL TEXT
// =====================================

const callTexts = [

    "Book Strategy Call",

    "Dialing...",

    "Ringing...",

    "Connected",

    "Let's Talk"

];


let callIndex = 0;


const callText =
    document.getElementById(
        "callText"
    );


if (callText) {

    setInterval(() => {


        // =================================
        // NEXT TEXT
        // =================================

        callIndex++;


        if (
            callIndex >=
            callTexts.length
        ) {

            callIndex = 0;

        }


        // =================================
        // FADE OUT
        // =================================

        callText.style.opacity =
            "0";


        callText.style.transform =
            "translateY(5px)";


        // =================================
        // CHANGE TEXT
        // =================================

        setTimeout(() => {

            callText.innerHTML =
                callTexts[callIndex];


            // =============================
            // FADE IN
            // =============================

            callText.style.opacity =
                "1";


            callText.style.transform =
                "translateY(0)";

        }, 300);


    }, 2000);

}


// =====================================
// WORKFLOW VIDEO POPUP
// =====================================

const videoButton =
    document.querySelector(
        ".new-tutorial-play"
    );


const modal =
    document.getElementById(
        "workflowVideoModal"
    );


const closeButton =
    document.getElementById(
        "workflowVideoClose"
    );


const backdrop =
    document.querySelector(
        ".workflow-video-backdrop"
    );


const tutorialVideo =
    document.getElementById(
        "workflowTutorialVideo"
    );


// =====================================
// OPEN VIDEO
// =====================================

if (
    videoButton &&
    modal
) {

    videoButton.addEventListener(
        "click",
        function () {


            modal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";


            // =============================
            // PLAY VIDEO
            // =============================

            if (tutorialVideo) {

                tutorialVideo.currentTime =
                    0;


                tutorialVideo
                    .play()
                    .catch(
                        () => {}
                    );

            }

        }
    );

}


// =====================================
// CLOSE VIDEO
// =====================================

function closeWorkflowVideo() {

    if (!modal) return;


    // =================================
    // REMOVE ACTIVE
    // =================================

    modal.classList.remove(
        "active"
    );


    // =================================
    // RESTORE SCROLL
    // =================================

    document.body.style.overflow =
        "";


    // =================================
    // STOP VIDEO
    // =================================

    if (tutorialVideo) {

        tutorialVideo.pause();


        tutorialVideo.currentTime =
            0;

    }

}


// =====================================
// CLOSE BUTTON
// =====================================

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeWorkflowVideo
    );

}


// =====================================
// BACKDROP CLOSE
// =====================================

if (backdrop) {

    backdrop.addEventListener(
        "click",
        closeWorkflowVideo
    );

}


// =====================================
// ESCAPE KEY
// =====================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains(
                "active"
            )
        ) {

            closeWorkflowVideo();

        }

    }
);
```
Part 4 — **AI Workflow Builder ka middle section**. Isko exactly previous Part 3 ke baad paste karo:

```javascript
// =====================================
// CATEGORY CLICK
// =====================================

if (workflowToolArea) {

    workflowToolArea.addEventListener("click", function(event) {

        // =====================================
        // CATEGORY BUTTON
        // =====================================

        const categoryButton = event.target.closest(
            "button[data-category]"
        );

        if (categoryButton) {

            const categoryId =
                categoryButton.dataset.category;

            const category =
                workflowData[categoryId];

            if (!category) return;

            currentCategory = categoryId;
            currentPlatform = null;
            currentLevel = "platforms";

            renderPlatforms(category);

            return;
        }


        // =====================================
        // PLATFORM BUTTON
        // =====================================

        const platformButton = event.target.closest(
            "button[data-platform]"
        );

        if (platformButton) {

            const platformId =
                platformButton.dataset.platform;

            const category =
                workflowData[currentCategory];

            if (!category) return;

            const platform =
                category.platforms.find(
                    item => item.id === platformId
                );

            if (!platform) return;

            currentPlatform = platformId;
            currentLevel = "options";

            renderPlatformOptions(platform);

            return;
        }


        // =====================================
        // OPTION BUTTON
        // =====================================

        const optionButton = event.target.closest(
            "button[data-option]"
        );

        if (optionButton) {

            const option =
                optionButton.dataset.option;

            const category =
                workflowData[currentCategory];

            if (!category) return;

            const platform =
                category.platforms.find(
                    item => item.id === currentPlatform
                );

            if (!platform) return;


            // Toggle visual selected state

            optionButton.classList.toggle("selected");


            // Add workflow node

            addWorkflowNode({

                categoryId:
                    currentCategory,

                category:
                    category.name,

                platformId:
                    currentPlatform,

                platform:
                    platform.name,

                option:
                    option

            });

        }

    });

}



// =====================================
// RENDER PLATFORMS
// =====================================

function renderPlatforms(category) {

    if (!workflowToolArea) return;


    // Sidebar title

    if (workflowSidebarTitle) {

        workflowSidebarTitle.textContent =
            category.name;

    }


    // Show back button

    if (workflowBack) {

        workflowBack.style.display =
            "inline-flex";

    }


    // Clear current content

    workflowToolArea.innerHTML = "";


    // Create category wrapper

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "workflow-category dynamic-category";


    // Create items container

    const items =
        document.createElement("div");

    items.className =
        "workflow-items";


    // Create platform buttons

    category.platforms.forEach(platform => {

        const button =
            document.createElement("button");

        button.type =
            "button";

        button.dataset.platform =
            platform.id;

        button.textContent =
            platform.name;

        items.appendChild(button);

    });


    wrapper.appendChild(items);

    workflowToolArea.appendChild(wrapper);


    // Update breadcrumb

    updateWorkflowPath([
        category.name
    ]);

}



// =====================================
// RENDER PLATFORM OPTIONS
// =====================================

function renderPlatformOptions(platform) {

    if (!workflowToolArea) return;


    // Sidebar title

    if (workflowSidebarTitle) {

        workflowSidebarTitle.textContent =
            platform.name;

    }


    // Show back button

    if (workflowBack) {

        workflowBack.style.display =
            "inline-flex";

    }


    // Clear current content

    workflowToolArea.innerHTML = "";


    // Create wrapper

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "workflow-category dynamic-category";


    // Create items container

    const items =
        document.createElement("div");

    items.className =
        "workflow-items";


    // Create option buttons

    platform.options.forEach(option => {

        const button =
            document.createElement("button");

        button.type =
            "button";

        button.dataset.option =
            option;

        button.textContent =
            option;

        items.appendChild(button);

    });


    wrapper.appendChild(items);

    workflowToolArea.appendChild(wrapper);


    // Update breadcrumb

    updateWorkflowPath([

        workflowData[currentCategory].name,

        platform.name

    ]);

}



// =====================================
// UPDATE WORKFLOW PATH
// =====================================

function updateWorkflowPath(items) {

    if (!workflowPathItems) return;


    workflowPathItems.innerHTML = "";


    items.forEach((item, index) => {

        const span =
            document.createElement("span");

        span.className =
            "workflow-path-item";

        span.textContent =
            item;

        workflowPathItems.appendChild(span);


        // Add arrow between items

        if (index < items.length - 1) {

            const separator =
                document.createElement("span");

            separator.className =
                "workflow-path-separator";

            separator.textContent =
                " → ";

            workflowPathItems.appendChild(
                separator
            );

        }

    });

}



// =====================================
// BACK BUTTON
// =====================================

if (workflowBack) {

    workflowBack.addEventListener(
        "click",
        function() {


            // =====================================
            // OPTIONS → PLATFORMS
            // =====================================

            if (currentLevel === "options") {

                const category =
                    workflowData[currentCategory];

                if (!category) return;

                currentPlatform =
                    null;

                currentLevel =
                    "platforms";

                renderPlatforms(category);

                return;
            }


            // =====================================
            // PLATFORMS → MAIN
            // =====================================

            if (currentLevel === "platforms") {

                currentCategory =
                    null;

                currentPlatform =
                    null;

                currentLevel =
                    "main";

                restoreMainCategories();

            }

        }
    );

}



// =====================================
// RESTORE MAIN CATEGORIES
// =====================================

function restoreMainCategories() {

    if (!workflowToolArea) return;


    // Reset sidebar title

    if (workflowSidebarTitle) {

        workflowSidebarTitle.textContent =
            "What do you want to automate?";

    }


    // Hide back button

    if (workflowBack) {

        workflowBack.style.display =
            "none";

    }


    // Restore categories

    workflowToolArea.innerHTML = `

        <div
            class="workflow-category dynamic-category"
            data-level="main"
        >

            <div class="workflow-items">

                <button
                    type="button"
                    data-category="social"
                >
                    Social Media
                </button>


                <button
                    type="button"
                    data-category="crm"
                >
                    CRM
                </button>


                <button
                    type="button"
                    data-category="website"
                >
                    Website
                </button>


                <button
                    type="button"
                    data-category="ecommerce"
                >
                    E-commerce
                </button>


                <button
                    type="button"
                    data-category="communication"
                >
                    Communication
                </button>


                <button
                    type="button"
                    data-category="ai"
                >
                    AI
                </button>


                <button
                    type="button"
                    data-category="voice"
                >
                    Voice AI
                </button>


                <button
                    type="button"
                    data-category="automation"
                >
                    Automation
                </button>


                <button
                    type="button"
                    data-category="marketing"
                >
                    Marketing
                </button>


                <button
                    type="button"
                    data-category="operations"
                >
                    Operations
                </button>


                <button
                    type="button"
                    data-category="payments"
                >
                    Payments
                </button>


                <button
                    type="button"
                    data-category="data"
                >
                    Data & Productivity
                </button>

            </div>

        </div>

    `;


    // Reset breadcrumb

    if (workflowPathItems) {

        workflowPathItems.textContent =
            "Nothing selected yet";

    }

}// =====================================
// ADD WORKFLOW NODE
// =====================================

function addWorkflowNode(data) {

    if (!workflowNodes) return;


    // Create unique node name

    const nodeName =
        data.platform + " - " + data.option;


    // =====================================
    // PREVENT DUPLICATE
    // =====================================

    if (selectedNodes.includes(nodeName)) {

        return;

    }


    // Save selected node

    selectedNodes.push(nodeName);


    // =====================================
    // REMOVE EMPTY MESSAGE
    // =====================================

    const empty =
        workflowNodes.querySelector(
            ".empty-workflow"
        );

    if (empty) {

        empty.remove();

    }


    // =====================================
    // CREATE NODE
    // =====================================

    const node =
        document.createElement("div");

    node.className =
        "workflow-node";

    node.dataset.nodeName =
        nodeName;


    // =====================================
    // NODE HTML
    // =====================================

    node.innerHTML = `

        <div class="workflow-node-icon">
            ⚡
        </div>

        <div class="workflow-node-content">

            <strong>
                ${data.platform}
            </strong>

            <span>
                ${data.option}
            </span>

        </div>

    `;


    // Add node to workflow area

    workflowNodes.appendChild(node);


    // =====================================
    // DRAGGABLE NODE
    // =====================================

    if (
        typeof makeNodeDraggable ===
        "function"
    ) {

        makeNodeDraggable(node);

    }


    // =====================================
    // UPDATE ESTIMATE
    // =====================================

    updateWorkflowEstimate();

}



// =====================================
// WORKFLOW PRICING
// =====================================

const workflowPricing = {

    // =====================================
    // SOCIAL
    // =====================================

    "Facebook - Leads": 300,

    "Facebook - Posts": 250,

    "Facebook - Messages": 300,

    "Instagram - Messages": 250,

    "Instagram - Posts": 250,

    "Instagram - Reels": 300,

    "LinkedIn - Leads": 400,

    "LinkedIn - Messages": 350,

    "LinkedIn - Posts": 300,

    "TikTok - Videos": 350,

    "YouTube - Videos": 350,


    // =====================================
    // CRM
    // =====================================

    "HubSpot - Contacts": 300,

    "HubSpot - Companies": 300,

    "HubSpot - Deals": 400,

    "HubSpot - Pipelines": 450,

    "HubSpot - Tasks": 250,

    "HubSpot - Forms": 300,

    "HubSpot - Workflows": 450,

    "HubSpot - Emails": 300,

    "GoHighLevel - Contacts": 300,

    "GoHighLevel - Opportunities": 400,

    "GoHighLevel - Pipelines": 450,

    "GoHighLevel - Workflows": 450,

    "GoHighLevel - Calendars": 350,

    "Zoho CRM - Leads": 300,

    "Zoho CRM - Contacts": 300,

    "Zoho CRM - Deals": 400,


    // =====================================
    // AI
    // =====================================

    "OpenAI - Chat": 300,

    "OpenAI - Text Generation": 350,

    "OpenAI - Image Generation": 400,

    "OpenAI - Embeddings": 400,

    "OpenAI - Analysis": 350,

    "Claude - Chat": 300,

    "Claude - Text Generation": 350,

    "Claude - Analysis": 350,

    "Claude - Documents": 400,

    "Gemini - Chat": 300,

    "Gemini - Text Generation": 350,

    "Gemini - Vision": 400,

    "Gemini - Analysis": 350,


    // =====================================
    // VOICE AI
    // =====================================

    "Retell AI - Voice Agent": 600,

    "Retell AI - Make Call": 600,

    "Retell AI - Transcript": 400,

    "Retell AI - Recording": 400,

    "Retell AI - Analysis": 450,

    "Twilio - Make Call": 500,

    "Twilio - Send SMS": 350,

    "Twilio - Receive SMS": 350,

    "Twilio - Phone Numbers": 300,


    // =====================================
    // AUTOMATION
    // =====================================

    "n8n - Workflow": 400,

    "n8n - HTTP Request": 300,

    "n8n - Webhook": 350,

    "n8n - Code": 400,

    "n8n - Google Sheets": 350,

    "Zapier - Trigger": 350,

    "Zapier - Action": 300,

    "Zapier - Filter": 250,

    "Zapier - Formatter": 250,

    "Make - Scenario": 400,

    "Make - Webhook": 350,

    "Make - Router": 300,

    "Make - HTTP": 350,


    // =====================================
    // PAYMENTS
    // =====================================

    "Stripe - Payment": 400,

    "Stripe - Customer": 300,

    "Stripe - Invoice": 400,

    "Stripe - Subscription": 500,

    "Stripe - Refund": 300,

    "PayPal - Payment": 400,

    "PayPal - Order": 400,

    "PayPal - Refund": 300,

    "PayPal - Customer": 300

};



// =====================================
// WORKFLOW ESTIMATE
// =====================================

function updateWorkflowEstimate() {

    let total = 0;


    // =====================================
    // CALCULATE TOTAL
    // =====================================

    selectedNodes.forEach(node => {

        total +=
            workflowPricing[node] ||
            250;

    });


    // =====================================
    // NODE COUNT
    // =====================================

    if (nodeCount) {

        nodeCount.innerText =
            selectedNodes.length;

    }


    // =====================================
    // PRICE
    // =====================================

    if (priceEstimate) {

        priceEstimate.innerText =
            "$" + total;

    }


    // =====================================
    // TIMELINE
    // =====================================

    if (!timelineEstimate) return;


    if (selectedNodes.length === 0) {

        timelineEstimate.innerText =
            "—";

    }

    else if (
        selectedNodes.length <= 3
    ) {

        timelineEstimate.innerText =
            "3-5 Days";

    }

    else if (
        selectedNodes.length <= 6
    ) {

        timelineEstimate.innerText =
            "1-2 Weeks";

    }

    else {

        timelineEstimate.innerText =
            "2-4 Weeks";

    }

}



// =====================================
// CLEAR WORKFLOW
// =====================================

if (clearWorkflow) {

    clearWorkflow.addEventListener(
        "click",
        function() {


            // Clear selected nodes

            selectedNodes = [];


            // Restore empty workflow

            if (workflowNodes) {

                workflowNodes.innerHTML = `

                    <div class="empty-workflow">

                        Select tools from the left
                        to start building your
                        automation workflow.

                    </div>

                `;

            }


            // Reset estimate

            updateWorkflowEstimate();

        }
    );

}
// =====================================
// HEADER CALL TEXT
// =====================================

const callTexts = [
    "Book Strategy Call",
    "Dialing...",
    "Ringing...",
    "Connected",
    "Let's Talk"
];

let callIndex = 0;

const callText =
    document.getElementById("callText");

if (callText) {

    setInterval(() => {

        callIndex++;

        if (
            callIndex >=
            callTexts.length
        ) {

            callIndex = 0;

        }

        callText.style.opacity = "0";

        callText.style.transform =
            "translateY(5px)";


        setTimeout(() => {

            callText.innerHTML =
                callTexts[callIndex];

            callText.style.opacity =
                "1";

            callText.style.transform =
                "translateY(0)";

        }, 300);

    }, 2000);

}



// =====================================
// WORKFLOW VIDEO POPUP
// =====================================

const videoButton =
    document.querySelector(
        ".new-tutorial-play"
    );

const modal =
    document.getElementById(
        "workflowVideoModal"
    );

const closeButton =
    document.getElementById(
        "workflowVideoClose"
    );

const backdrop =
    document.querySelector(
        ".workflow-video-backdrop"
    );

const tutorialVideo =
    document.getElementById(
        "workflowTutorialVideo"
    );


// =====================================
// OPEN VIDEO
// =====================================

if (
    videoButton &&
    modal
) {

    videoButton.addEventListener(
        "click",
        function() {

            modal.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";


            if (tutorialVideo) {

                tutorialVideo.currentTime =
                    0;

                tutorialVideo.play().catch(
                    () => {}
                );

            }

        }
    );

}



// =====================================
// CLOSE VIDEO
// =====================================

function closeWorkflowVideo() {

    if (!modal) return;


    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";


    if (tutorialVideo) {

        tutorialVideo.pause();

        tutorialVideo.currentTime =
            0;

    }

}



// =====================================
// CLOSE BUTTON
// =====================================

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeWorkflowVideo
    );

}



// =====================================
// BACKDROP CLOSE
// =====================================

if (backdrop) {

    backdrop.addEventListener(
        "click",
        closeWorkflowVideo
    );

}



// =====================================
// ESC KEY CLOSE
// =====================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains(
                "active"
            )
        ) {

            closeWorkflowVideo();

        }

    }
);



// =====================================
// DIRECT WORKFLOW NODE SEARCH
// =====================================

const workflowSearch =
    document.getElementById(
        "workflowSearch"
    );


// =====================================
// SEARCH INITIALIZATION
// =====================================

if (workflowSearch) {


    // =====================================
    // CREATE RESULTS BOX
    // =====================================

    const searchParent =
        workflowSearch.parentElement;


    if (!searchParent) return;


    let searchResultsBox =
        searchParent.querySelector(
            ".workflow-search-results"
        );


    // Prevent duplicate results box

    if (!searchResultsBox) {

        searchResultsBox =
            document.createElement(
                "div"
            );

        searchResultsBox.className =
            "workflow-search-results";

        searchParent.appendChild(
            searchResultsBox
        );

    }



    // =====================================
    // SEARCH INPUT
    // =====================================

    workflowSearch.addEventListener(
        "input",
        function() {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            // Clear old results

            searchResultsBox.innerHTML =
                "";


            // =====================================
            // EMPTY SEARCH
            // =====================================

            if (!search) {

                searchResultsBox.classList.remove(
                    "active"
                );

                return;

            }


            // =====================================
            // CHECK WORKFLOW DATA
            // =====================================

            if (
                typeof workflowData ===
                "undefined"
            ) {

                console.error(
                    "workflowData is not available."
                );

                return;

            }


            // =====================================
            // SEARCH RESULTS ARRAY
            // =====================================

            const results = [];


            // =====================================
            // SEARCH ALL CATEGORIES
            // =====================================

            Object.keys(
                workflowData
            ).forEach(
                categoryId => {

                    const category =
                        workflowData[
                            categoryId
                        ];


                    if (
                        !category ||
                        !Array.isArray(
                            category.platforms
                        )
                    ) {

                        return;

                    }


                    // =====================================
                    // SEARCH PLATFORMS
                    // =====================================

                    category.platforms.forEach(
                        platform => {


                            if (
                                !platform ||
                                !Array.isArray(
                                    platform.options
                                )
                            ) {

                                return;

                            }


                            // =====================================
                            // SEARCH OPTIONS
                            // =====================================

                            platform.options.forEach(
                                option => {

                                    const fullName =
                                        platform.name +
                                        " - " +
                                        option;


                                    const searchableText =
                                        (
                                            category.name +
                                            " " +
                                            platform.name +
                                            " " +
                                            option +
                                            " " +
                                            fullName
                                        )
                                        .toLowerCase();


                                    // =====================================
                                    // MATCH
                                    // =====================================

                                    if (
                                        searchableText.includes(
                                            search
                                        )
                                    ) {

                                        results.push({

                                            categoryId:
                                                categoryId,

                                            category:
                                                category.name,

                                            platformId:
                                                platform.id,

                                            platform:
                                                platform.name,

                                            option:
                                                option,

                                            fullName:
                                                fullName

                                        });

                                    }

                                }
                            );

                        }
                    );

                }
            );



            // =====================================
            // NO RESULTS
            // =====================================

            if (
                results.length === 0
            ) {

                searchResultsBox.innerHTML = `

                    <div class="workflow-no-results">
                        No workflow found
                    </div>

                `;

                searchResultsBox.classList.add(
                    "active"
                );

                return;

            }



            // =====================================
            // SHOW MAX 10 RESULTS
            // =====================================

            results
                .slice(0, 10)
                .forEach(
                    result => {


                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "workflow-search-result";


                        // =====================================
                        // RESULT HTML
                        // =====================================

                        button.innerHTML = `

                            <span
                                class="search-result-icon"
                            >
                                ⚡
                            </span>

                            <span
                                class="search-result-content"
                            >

                                <strong>
                                    ${result.platform}
                                </strong>

                                <small>
                                    ${result.option}
                                </small>

                            </span>

                        `;



                        // =====================================
                        // RESULT CLICK
                        // =====================================

                        button.addEventListener(
                            "click",
                            function() {


                                // Add directly to workflow

                                addWorkflowNode({

                                    categoryId:
                                        result.categoryId,

                                    category:
                                        result.category,

                                    platformId:
                                        result.platformId,

                                    platform:
                                        result.platform,

                                    option:
                                        result.option

                                });


                                // Clear search

                                workflowSearch.value =
                                    "";


                                // Clear results

                                searchResultsBox.innerHTML =
                                    "";


                                searchResultsBox.classList.remove(
                                    "active"
                                );


                            }
                        );


                        // Add result button

                        searchResultsBox.appendChild(
                            button
                        );

                    }
                );



            // =====================================
            // SHOW RESULTS BOX
            // =====================================

            searchResultsBox.classList.add(
                "active"
            );

        }
    );



    // =====================================
    // CLOSE SEARCH WHEN CLICKING OUTSIDE
    // =====================================

    document.addEventListener(
        "click",
        function(event) {

            if (
                !workflowSearch.contains(
                    event.target
                ) &&
                !searchResultsBox.contains(
                    event.target
                )
            ) {

                searchResultsBox.classList.remove(
                    "active"
                );

            }

        }
    );



    // =====================================
    // ESCAPE SEARCH
    // =====================================

    workflowSearch.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                searchResultsBox.classList.remove(
                    "active"
                );

                workflowSearch.blur();

            }

        }
    );

}



// =====================================
// END OF AWSZ WEBSITE SCRIPT
// =====================================

```
