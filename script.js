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
// AI ECOSYSTEM
// =====================================

const ecosystemData = {

    sales:{

        badge:"Sales Department",

        title:"AI Sales Automation",

        description:"Automatically qualify leads, respond instantly, schedule meetings, send follow-ups, update your CRM and help your sales team close more deals with less manual work.",

        features:[
            "Lead Qualification",
            "Meeting Booking",
            "CRM Updates",
            "Proposal Generation",
            "AI Follow-Ups",
            "Pipeline Tracking"
        ],

        stat1:"18 hrs",
        stat2:"+32%",
        stat3:"Easy"

    },

    marketing:{

        badge:"Marketing Department",

        title:"AI Marketing Automation",

        description:"Generate content, schedule social media, launch campaigns, qualify marketing leads and optimize your entire customer journey automatically.",

        features:[
            "Social Media",
            "Email Campaigns",
            "Lead Nurturing",
            "Content Creation",
            "AI Copywriting",
            "Campaign Reports"
        ],

        stat1:"25 hrs",
        stat2:"+47%",
        stat3:"Fast"

    },

    support:{

        badge:"Support Department",

        title:"AI Customer Support",

        description:"Provide instant 24/7 customer support using AI chatbots, WhatsApp automation and voice agents while reducing support costs.",

        features:[
            "Live Chat",
            "WhatsApp AI",
            "Ticket Routing",
            "Voice Agent",
            "Knowledge Base",
            "24/7 Support"
        ],

        stat1:"24/7",
        stat2:"-65%",
        stat3:"Instant"

    },

    operations:{

        badge:"Operations",

        title:"AI Operations Automation",

        description:"Remove repetitive manual work by connecting your apps, approvals, notifications and internal workflows together.",

        features:[
            "n8n",
            "Zapier",
            "Make",
            "Internal Workflows",
            "Approvals",
            "Notifications"
        ],

        stat1:"30 hrs",
        stat2:"-70%",
        stat3:"Smart"

    },

    finance:{

        badge:"Finance",

        title:"AI Finance Automation",

        description:"Automate invoices, expense tracking, financial reporting and payment reminders while keeping your data synchronized.",

        features:[
            "Invoices",
            "Expenses",
            "Reports",
            "Payments",
            "Forecasting",
            "Bookkeeping"
        ],

        stat1:"20 hrs",
        stat2:"+99%",
        stat3:"Secure"

    },

    hr:{

        badge:"Human Resources",

        title:"AI HR Automation",

        description:"Automate recruitment, onboarding, leave management and employee communication with intelligent workflows.",

        features:[
            "Recruitment",
            "Onboarding",
            "Employee Portal",
            "Leave Requests",
            "Documents",
            "Training"
        ],

        stat1:"15 hrs",
        stat2:"+55%",
        stat3:"Simple"

    }

};


// Elements

const ecoNodes = document.querySelectorAll(".eco-node");

const ecoTitle = document.getElementById("ecoTitle");

const ecoDescription = document.getElementById("ecoDescription");

const ecoFeatures = document.getElementById("ecoFeatures");

const ecoBadge = document.querySelector(".department-name");

const stat1 = document.getElementById("stat1");

const stat2 = document.getElementById("stat2");

const stat3 = document.getElementById("stat3");


// Change Content

function updateEco(key){

    const item = ecosystemData[key];

    if(!item) return;

    ecoBadge.textContent = item.badge;

    ecoTitle.textContent = item.title;

    ecoDescription.textContent = item.description;

    stat1.textContent = item.stat1;

    stat2.textContent = item.stat2;

    stat3.textContent = item.stat3;

    ecoFeatures.innerHTML = "";

    item.features.forEach(feature=>{

        ecoFeatures.innerHTML += `
        <div>
            <i class="fa-solid fa-check"></i>
            ${feature}
        </div>
        `;

    });

}


// Click Events

ecoNodes.forEach(node=>{

    node.addEventListener("click",()=>{

        ecoNodes.forEach(btn=>btn.classList.remove("active"));

        node.classList.add("active");

        updateEco(node.dataset.id);

    });

});


// Default

updateEco("sales");

    });

});
