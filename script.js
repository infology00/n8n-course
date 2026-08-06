// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// =====================================
// MEGA MENU
// =====================================

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

        }, 300);

    });

    megaMenu.addEventListener("mouseenter", () => {

        clearTimeout(closeTimer);
        megaMenu.classList.add("active");

    });

    megaMenu.addEventListener("mouseleave", () => {

        closeTimer = setTimeout(() => {

            megaMenu.classList.remove("active");

        }, 300);

    });

}



// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}



// =====================================
// NAVBAR SHADOW
// =====================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



// =====================================
// VIDEO SHOWCASE
// =====================================

const cards = document.querySelectorAll(".video-card");

cards.forEach(card => {

    const video = card.querySelector("video");

    if (!video) return;

    video.controls = false;

    card.addEventListener("click", () => {

        // Stop every other video
        document.querySelectorAll(".video-card").forEach(otherCard => {

            const otherVideo = otherCard.querySelector("video");

            if (otherVideo !== video) {

                otherVideo.pause();
                otherVideo.currentTime = 0;
                otherCard.classList.remove("playing");

            }

        });

        // Toggle current video
        if (video.paused) {

            video.muted = false;
            video.play();
            card.classList.add("playing");

        } else {

            video.pause();
            card.classList.remove("playing");

        }

    });

    video.addEventListener("ended", () => {

        card.classList.remove("playing");

    });

    video.addEventListener("pause", () => {

        if (!video.ended) {

            card.classList.remove("playing");

        }

    });

});
// =====================================
// HOW AI FITS YOUR BUSINESS
// =====================================

const departmentData = {

    sales:{

        badge:"Sales Department",

        title:"AI Sales Assistant",

        description:"Automate lead qualification, follow-ups, CRM updates and appointment booking so your sales team focuses only on closing deals.",

        button:"Explore Sales Automation",

        stats:["18 hrs","+32%","Easy"],

        labels:["Saved Weekly","Revenue Growth","Implementation"],

        features:[
            "Lead Qualification",
            "Meeting Booking",
            "CRM Updates",
            "Proposal Generation",
            "Follow-Up Automation",
            "Pipeline Tracking"
        ]
    },



    marketing:{

        badge:"Marketing Department",

        title:"AI Marketing Engine",

        description:"Create content, schedule posts, generate campaigns and analyze performance automatically using AI.",

        button:"Explore Marketing Automation",

        stats:["14 hrs","+28%","Easy"],

        labels:["Saved Weekly","More Leads","Implementation"],

        features:[
            "AI Content",
            "Social Scheduling",
            "Email Campaigns",
            "Ad Reporting",
            "Lead Magnets",
            "Analytics"
        ]
    },



    support:{

        badge:"Support Department",

        title:"AI Customer Support",

        description:"Deliver instant support 24/7 using AI chatbots, WhatsApp automation and smart ticket routing.",

        button:"Explore Support Automation",

        stats:["24/7","-70%","Easy"],

        labels:["Availability","Support Cost","Implementation"],

        features:[
            "Live Chat",
            "WhatsApp Replies",
            "Ticket Routing",
            "Knowledge Base",
            "Escalation",
            "Customer FAQs"
        ]
    },



    operations:{

        badge:"Operations",

        title:"AI Operations Manager",

        description:"Automate internal workflows, approvals, inventory and repetitive operational tasks.",

        button:"Explore Operations",

        stats:["20 hrs","+40%","Medium"],

        labels:["Saved Weekly","Efficiency","Implementation"],

        features:[
            "Approval Flows",
            "Inventory",
            "Notifications",
            "Reports",
            "Task Automation",
            "Internal Requests"
        ]
    },



    finance:{

        badge:"Finance Department",

        title:"AI Finance Assistant",

        description:"Automate invoicing, payment reminders, expense tracking and financial reporting.",

        button:"Explore Finance Automation",

        stats:["15 hrs","100%","Easy"],

        labels:["Saved Weekly","Accuracy","Implementation"],

        features:[
            "Invoices",
            "Expense Reports",
            "Payment Reminders",
            "Profit Dashboard",
            "Cashflow Reports",
            "Accounting Sync"
        ]
    },



    hr:{

        badge:"Human Resources",

        title:"AI HR Assistant",

        description:"Speed up hiring, onboarding and employee management using intelligent workflows.",

        button:"Explore HR Automation",

        stats:["12 hrs","+55%","Easy"],

        labels:["Saved Weekly","Hiring Speed","Implementation"],

        features:[
            "Resume Screening",
            "Interview Booking",
            "Employee Onboarding",
            "Leave Requests",
            "HR Chatbot",
            "Training"
        ]
    }

};





const nodes = document.querySelectorAll(".ai-node");

const badge = document.querySelector(".department-badge");

const title = document.getElementById("departmentTitle");

const description = document.getElementById("departmentDescription");

const featureList = document.querySelector(".feature-list");

const button = document.querySelector(".department-btn");

const statNumbers = document.querySelectorAll(".department-stats h4");

const statLabels = document.querySelectorAll(".department-stats span");



nodes.forEach(node=>{

    node.addEventListener("click",()=>{

        nodes.forEach(n=>n.classList.remove("active"));

        node.classList.add("active");

        const data = departmentData[node.dataset.department];

        if(!data) return;

        badge.textContent = data.badge;

        title.textContent = data.title;

        description.textContent = data.description;

        button.textContent = data.button;



        featureList.innerHTML = "";



        data.features.forEach(item=>{

            featureList.innerHTML += `

                <div class="feature">

                    <i class="fa-solid fa-check"></i>

                    ${item}

                </div>

            `;

        });



        statNumbers.forEach((stat,index)=>{

            stat.textContent = data.stats[index];

        });



        statLabels.forEach((label,index)=>{

            label.textContent = data.labels[index];

        });



        document.querySelector(".department-info").animate(

        [

            {opacity:.5,transform:"translateY(20px)"},

            {opacity:1,transform:"translateY(0)"}

        ],

        {

            duration:400,

            easing:"ease"

        });

    });

});
