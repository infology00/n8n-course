// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded",()=>{


// =====================================
// MEGA MENU
// =====================================

const megaParent=document.querySelector(".mega-parent");
const megaMenu=document.querySelector(".mega-menu");


if(megaParent && megaMenu){

let timer;


megaParent.addEventListener("mouseenter",()=>{

clearTimeout(timer);

megaMenu.classList.add("active");

});


megaParent.addEventListener("mouseleave",()=>{

timer=setTimeout(()=>{

megaMenu.classList.remove("active");

},250);

});


megaMenu.addEventListener("mouseenter",()=>{

clearTimeout(timer);

});


megaMenu.addEventListener("mouseleave",()=>{

timer=setTimeout(()=>{

megaMenu.classList.remove("active");

},250);

});


}

// =====================================
// SOLUTIONS MEGA MENU SWITCH
// =====================================


const categories = document.querySelectorAll(".category");

const contentBoxes = document.querySelectorAll(".content-box");


categories.forEach(category=>{


category.addEventListener("click",()=>{


// remove active from all categories

categories.forEach(item=>{

item.classList.remove("active");

});


// add active clicked category

category.classList.add("active");



// hide all content

contentBoxes.forEach(box=>{

box.classList.remove("active");

});



// show selected content

const target = category.dataset.content;


const selectedContent = document.getElementById(target);


if(selectedContent){

selectedContent.classList.add("active");

}


});


});

// =====================================
// MOBILE MENU
// =====================================


const menuBtn=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");


if(menuBtn && nav){

menuBtn.onclick=()=>{

nav.classList.toggle("show");

};

}




// =====================================
// VIDEO CARDS
// =====================================


const cards=document.querySelectorAll(".video-card");


cards.forEach(card=>{


const video=card.querySelector("video");


if(!video)return;



card.onclick=()=>{


cards.forEach(c=>{


const v=c.querySelector("video");


if(v && v!==video){

v.pause();

v.currentTime=0;

}


});



if(video.paused){

video.play();

}

else{

video.pause();

}


};


});


// =====================================
// AI ECOSYSTEM
// =====================================

const ecoNodes = document.querySelectorAll(".eco-node");

const ecoData = {

    sales: {

        department: "Sales Department",

        title: "Turn Your Sales Process Into an AI-Powered System",

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

        button: "Explore Sales Automation"

    },


    marketing: {

        department: "Marketing Department",

        title: "Turn Your Marketing Into an Automated Growth Engine",

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

        button: "Explore Marketing Automation"

    },


    support: {

        department: "Support Department",

        title: "Give Your Customers Instant AI-Powered Support",

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

        button: "Explore Support Automation"

    },


    operations: {

        department: "Operations Department",

        title: "Automate the Work That Slows Your Business Down",

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

        button: "Explore Operations Automation"

    },


    finance: {

        department: "Finance Department",

        title: "Make Financial Operations Faster and More Accurate",

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

        button: "Explore Finance Automation"

    },


    hr: {

        department: "Human Resources",

        title: "Automate Repetitive HR Tasks and Employee Workflows",

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

        button: "Explore HR Automation"

    }

};



ecoNodes.forEach(node => {

    node.addEventListener("click", () => {

        const data = ecoData[node.dataset.id];

        if (!data) return;


        // Remove active from all nodes

        ecoNodes.forEach(item => {

            item.classList.remove("active");

        });


        // Activate clicked node

        node.classList.add("active");


        // Department name

        const department = document.querySelector(".department-name");

        if (department) {

            department.innerHTML = data.department;

        }


        // Main heading

        const title = document.getElementById("ecoTitle");

        if (title) {

            title.innerHTML = data.title;

        }


        // Description

        const description = document.getElementById("ecoDescription");

        if (description) {

            description.innerHTML = data.description;

        }


        // Features

        const featureBox = document.getElementById("ecoFeatures");

        if (featureBox) {

            featureBox.innerHTML = "";

            data.features.forEach(feature => {

                featureBox.innerHTML += `

                    <div>
                        <i class="fa-solid fa-check"></i>
                        ${feature}
                    </div>

                `;

            });

        }


        // STAT 1

        const stat1 = document.getElementById("stat1");

        if (stat1) {

            stat1.innerHTML = data.stats.stat1;

        }


        // STAT 1 LABEL

        const stat1Label = stat1
            ? stat1.parentElement.querySelector("span")
            : null;

        if (stat1Label) {

            stat1Label.innerHTML = data.stats.stat1Label;

        }


        // STAT 2

        const stat2 = document.getElementById("stat2");

        if (stat2) {

            stat2.innerHTML = data.stats.stat2;

        }


        // STAT 2 LABEL

        const stat2Label = stat2
            ? stat2.parentElement.querySelector("span")
            : null;

        if (stat2Label) {

            stat2Label.innerHTML = data.stats.stat2Label;

        }


        // STAT 3

        const stat3 = document.getElementById("stat3");

        if (stat3) {

            stat3.innerHTML = data.stats.stat3;

        }


        // STAT 3 LABEL

        const stat3Label = stat3
            ? stat3.parentElement.querySelector("span")
            : null;

        if (stat3Label) {

            stat3Label.innerHTML = data.stats.stat3Label;

        }


        // BUTTON

        const button = document.querySelector(".ecosystem-btn");

        if (button) {

            button.innerHTML = data.button;

        }

    });

});



// =====================================
// TETA AI
// =====================================

const questionEl=document.getElementById("question");

const optionsEl=document.getElementById("options");


if(window.tetaKnowledge && questionEl && optionsEl){


function startTeta(){

loadNode("start");

}



function loadNode(nodeName){

const node=window.tetaKnowledge[nodeName];


if(!node)return;


questionEl.innerHTML=node.question;

optionsEl.innerHTML="";



node.options.forEach(item=>{


const btn=document.createElement("button");


btn.textContent=item.text;



btn.onclick=()=>{


if(item.next){

loadNode(item.next);

}

else if(item.solution){

showSolution(item.solution);

}


};



optionsEl.appendChild(btn);



});


}




function showSolution(text){


questionEl.innerHTML="Recommended AI Solution";


optionsEl.innerHTML=`

Explore Another Solution

Book Free AI Strategy Call

`;



const restart=document.getElementById("restartTeta");


if(restart){

restart.onclick=startTeta;

}



const book=document.getElementById("bookCall");


if(book){

book.onclick=showLeadForm;

}



}




function showLeadForm(){


questionEl.innerHTML="Let's build your AI solution";


optionsEl.innerHTML=`

Submit Request

`;



}



startTeta();



}





// =====================================
// AI WORKFLOW BUILDER
// =====================================


const workflowButtons=document.querySelectorAll(
".workflow-items button, .workflow-subitems button"
);


const workflowNodes=document.getElementById("workflowNodes");

const clearWorkflow=document.getElementById("clearWorkflow");


const nodeCount=document.getElementById("nodeCount");

const priceEstimate=document.getElementById("priceEstimate");

const timelineEstimate=document.getElementById("timelineEstimate");





let selectedNodes=[];




// =====================================
// PRICING SYSTEM
// =====================================


const nodePricing={


"Facebook Leads":300,

"Instagram DM":250,

"LinkedIn Automation":400,

"YouTube Automation":350,

"WhatsApp Automation":500,

"Email Automation":300,


"Contact Sync":250,

"Lead Management":400,

"Deals Pipeline":500,

"Ticketing":350,


"Pipeline":400,

"Calendars":250,

"Opportunities":450,

"SMS Automation":350,


"ChatGPT":300,

"Claude":300,

"Gemini":300,

"Perplexity":250


};





// =====================================
// BUTTON CLICK
// =====================================


workflowButtons.forEach(button=>{


button.addEventListener("click",()=>{


const nodeName=button.dataset.node;


if(!nodeName)return;



if(selectedNodes.includes(nodeName)){

return;

}



selectedNodes.push(nodeName);


createWorkflowNode(nodeName);


updateEstimate();



});


});





// =====================================
// CREATE WORKFLOW NODE
// =====================================


function createWorkflowNode(name){


if(!workflowNodes)return;



const empty=document.querySelector(".empty-workflow");


if(empty){

empty.remove();

}



const node=document.createElement("div");


node.className="workflow-node";



node.innerHTML=`

<div class="node-header">


<div class="node-icon">

⚡

</div>


<div class="node-info">


<div class="node-name">

${name}

</div>


<div class="node-type">

Automation Node

</div>


</div>


<div class="node-status"></div>


</div>



<div class="node-handle left"></div>

<div class="node-handle right"></div>


`;



workflowNodes.appendChild(node);



if(typeof makeNodeDraggable==="function"){

makeNodeDraggable(node);

}


}





// =====================================
// UPDATE PRICE + TIMELINE
// =====================================


function updateEstimate(){


let total=0;



selectedNodes.forEach(node=>{


total += nodePricing[node] || 250;


});



if(nodeCount){

nodeCount.innerText=selectedNodes.length;

}



if(priceEstimate){

priceEstimate.innerText="$"+total;

}



if(!timelineEstimate)return;



if(selectedNodes.length===0){

timelineEstimate.innerText="—";

}

else if(selectedNodes.length<=3){

timelineEstimate.innerText="3-5 Days";

}

else if(selectedNodes.length<=6){

timelineEstimate.innerText="1-2 Weeks";

}

else{

timelineEstimate.innerText="2-4 Weeks";

}



}





// =====================================
// CLEAR WORKFLOW
// =====================================


if(clearWorkflow){


clearWorkflow.addEventListener("click",()=>{


selectedNodes=[];


workflowNodes.innerHTML=`

<div class="empty-workflow">

Select tools from the left to start building your automation workflow.

</div>

`;



updateEstimate();



});


}





// =====================================
// HEADER BUTTON TEXT ANIMATION
// =====================================


const callTexts=[

"Book Strategy Call",

"Dialing...",

"Ringing...",

"Connected",

"Let's Talk"

];



let callIndex=0;



const callText=document.getElementById("callText");



if(callText){


setInterval(()=>{


callIndex++;


if(callIndex>=callTexts.length){

callIndex=0;

}



callText.style.opacity="0";

callText.style.transform="translateY(5px)";



setTimeout(()=>{


callText.innerHTML=callTexts[callIndex];


callText.style.opacity="1";

callText.style.transform="translateY(0)";



},300);



},2000);



}


});   

// =========================================
// WORKFLOW VIDEO POPUP
// =========================================

document.addEventListener("DOMContentLoaded", function(){

    const videoButton = document.querySelector(".new-tutorial-play");
    const modal = document.getElementById("workflowVideoModal");
    const closeButton = document.getElementById("workflowVideoClose");
    const backdrop = document.querySelector(".workflow-video-backdrop");
    const video = document.getElementById("workflowTutorialVideo");


    // OPEN VIDEO

    if(videoButton && modal){

        videoButton.addEventListener("click", function(){

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

            if(video){
                video.currentTime = 0;

                video.play().catch(function(){
                    // Browser may require manual play
                });
            }

        });

    }


    // CLOSE FUNCTION

    function closeWorkflowVideo(){

        modal.classList.remove("active");

        document.body.style.overflow = "";

        if(video){
            video.pause();
            video.currentTime = 0;
        }

    }


    // CLOSE BUTTON

    if(closeButton){
        closeButton.addEventListener(
            "click",
            closeWorkflowVideo
        );
    }


    // CLOSE BACKDROP

    if(backdrop){
        backdrop.addEventListener(
            "click",
            closeWorkflowVideo
        );
    }


    // ESC KEY

    document.addEventListener("keydown", function(event){

        if(
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ){
            closeWorkflowVideo();
        }

    });

});

// =========================================
// WORKFLOW STEP 1 — CATEGORY SELECTION
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const toolArea = document.getElementById("workflowToolArea");
    const pathItems = document.getElementById("workflowPathItems");
    const backButton = document.getElementById("workflowBack");
    const sidebarTitle = document.getElementById("workflowSidebarTitle");

    if (!toolArea || !pathItems || !backButton || !sidebarTitle) {
        return;
    }


    // =========================================================
    // WORKFLOW DATA
    // CATEGORY → PLATFORM → OPTIONS
    // =========================================================

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
                },
                {
                    id: "bitrix24",
                    name: "Bitrix24",
                    options: [
                        "Leads",
                        "Contacts",
                        "Deals",
                        "Companies",
                        "Tasks",
                        "Automation"
                    ]
                },
                {
                    id: "brevo",
                    name: "Brevo",
                    options: [
                        "Contacts",
                        "Email Campaigns",
                        "Lists",
                        "Automation",
                        "Transactional Email"
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


    // =========================================================
    // CURRENT NAVIGATION STATE
    // =========================================================

    let currentLevel = "main";
    let currentCategory = null;
    let currentPlatform = null;


    // =========================================================
    // CATEGORY CLICK
    // =========================================================

    toolArea.addEventListener("click", function (event) {

        const categoryButton =
            event.target.closest(
                ".workflow-items button[data-category]"
            );

        if (!categoryButton) {
            return;
        }


        const categoryId =
            categoryButton.dataset.category;

        const category =
            workflowData[categoryId];

        if (!category) {
            return;
        }


        currentCategory =
            categoryId;

        currentPlatform =
            null;

        currentLevel =
            "platforms";


        renderPlatforms(category);

    });


    // =========================================================
    // RENDER PLATFORMS
    // =========================================================

    function renderPlatforms(category) {

        sidebarTitle.textContent =
            category.name;

        backButton.style.display =
            "inline-flex";


        toolArea.innerHTML = "";


        const wrapper =
            document.createElement("div");

        wrapper.className =
            "workflow-category dynamic-category";

        wrapper.dataset.level =
            "platforms";


        const items =
            document.createElement("div");

        items.className =
            "workflow-items";


        category.platforms.forEach(function (platform) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.dataset.platform =
                platform.id;

            button.textContent =
                platform.name;

            items.appendChild(button);

        });


        wrapper.appendChild(items);

        toolArea.appendChild(wrapper);


        updatePath([
            category.name
        ]);

    }


    // =========================================================
    // PLATFORM CLICK
    // =========================================================

    toolArea.addEventListener("click", function (event) {

        const platformButton =
            event.target.closest(
                ".workflow-items button[data-platform]"
            );

        if (!platformButton) {
            return;
        }


        const platformId =
            platformButton.dataset.platform;

        const category =
            workflowData[currentCategory];

        if (!category) {
            return;
        }


        const platform =
            category.platforms.find(function (item) {

                return item.id === platformId;

            });


        if (!platform) {
            return;
        }


        currentPlatform =
            platformId;

        currentLevel =
            "options";


        renderPlatformOptions(
            platform
        );

    });


    // =========================================================
    // RENDER PLATFORM OPTIONS
    // =========================================================

    function renderPlatformOptions(platform) {

        sidebarTitle.textContent =
            platform.name;


        backButton.style.display =
            "inline-flex";


        toolArea.innerHTML = "";


        const wrapper =
            document.createElement("div");

        wrapper.className =
            "workflow-category dynamic-category";

        wrapper.dataset.level =
            "options";


        const items =
            document.createElement("div");

        items.className =
            "workflow-items";


        platform.options.forEach(function (option) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.dataset.option =
                option;

            button.textContent =
                option;


            items.appendChild(button);

        });


        wrapper.appendChild(items);

        toolArea.appendChild(wrapper);


        updatePath([
            workflowData[currentCategory].name,
            platform.name
        ]);

    }


    // =========================================================
    // OPTION CLICK
    // =========================================================

    toolArea.addEventListener("click", function (event) {

        const optionButton =
            event.target.closest(
                ".workflow-items button[data-option]"
            );

        if (!optionButton) {
            return;
        }


        const option =
            optionButton.dataset.option;


        const category =
            workflowData[currentCategory];

        if (!category) {
            return;
        }


        const platform =
            category.platforms.find(function (item) {

                return item.id === currentPlatform;

            });


        if (!platform) {
            return;
        }


        // VISUAL SELECT

        optionButton.classList.add(
            "selected"
        );


        // ADD NODE EVENT

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


        // IMPORTANT:
        // DO NOT NAVIGATE AWAY.
        // USER STAYS INSIDE CURRENT PLATFORM OPTIONS.

    });


    // =========================================================
    // PATH
    // =========================================================

    function updatePath(items) {

        pathItems.innerHTML = "";


        items.forEach(function (item, index) {

            const span =
                document.createElement("span");

            span.className =
                "workflow-path-item";

            span.textContent =
                item;


            pathItems.appendChild(span);


            if (
                index <
                items.length - 1
            ) {

                const separator =
                    document.createElement("span");

                separator.className =
                    "workflow-path-separator";

                separator.textContent =
                    " → ";


                pathItems.appendChild(
                    separator
                );

            }

        });

    }


    // =========================================================
    // BACK BUTTON
    // =========================================================

    backButton.addEventListener(
        "click",
        function () {


            // OPTIONS → PLATFORMS

            if (
                currentLevel ===
                "options"
            ) {

                const category =
                    workflowData[currentCategory];


                currentPlatform =
                    null;


                currentLevel =
                    "platforms";


                renderPlatforms(
                    category
                );


                return;

            }


            // PLATFORMS → MAIN

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


    // =========================================================
    // RESTORE MAIN CATEGORIES
    // =========================================================

    function restoreMainCategories() {

        sidebarTitle.textContent =
            "What do you want to automate?";


        backButton.style.display =
            "none";


        toolArea.innerHTML = `

            <div
                class="workflow-category dynamic-category"
                data-level="main"
            >

                <div class="workflow-items">

                    <button type="button" data-category="social">
                        Social Media
                    </button>

                    <button type="button" data-category="crm">
                        CRM
                    </button>

                    <button type="button" data-category="website">
                        Website
                    </button>

                    <button type="button" data-category="ecommerce">
                        E-commerce
                    </button>

                    <button type="button" data-category="communication">
                        Communication
                    </button>

                    <button type="button" data-category="ai">
                        AI
                    </button>

                    <button type="button" data-category="voice">
                        Voice AI
                    </button>

                    <button type="button" data-category="automation">
                        Automation
                    </button>

                    <button type="button" data-category="marketing">
                        Marketing
                    </button>

                    <button type="button" data-category="operations">
                        Operations
                    </button>

                    <button type="button" data-category="payments">
                        Payments
                    </button>

                    <button type="button" data-category="data">
                        Data & Productivity
                    </button>

                </div>

            </div>

        `;


        pathItems.textContent =
            "Nothing selected yet";

    }


    // =========================================================
    // ADD NODE TO CANVAS
    // =========================================================

    function addWorkflowNode(data) {

        console.log(
            "Workflow node:",
            data
        );


        document.dispatchEvent(
            new CustomEvent(
                "workflowNodeAdded",
                {
                    detail: data
                }
            )
        );

    }

});
