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


