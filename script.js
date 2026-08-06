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

        let closeTimer;

        megaParent.addEventListener("mouseenter", () => {
            clearTimeout(closeTimer);
            megaMenu.classList.add("active");
        });

        megaParent.addEventListener("mouseleave", () => {
            closeTimer = setTimeout(() => {
                megaMenu.classList.remove("active");
            }, 250);
        });

        megaMenu.addEventListener("mouseenter", () => {
            clearTimeout(closeTimer);
            megaMenu.classList.add("active");
        });

        megaMenu.addEventListener("mouseleave", () => {
            closeTimer = setTimeout(() => {
                megaMenu.classList.remove("active");
            }, 250);
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
    // VIDEO CARDS
    // =====================================

    const cards = document.querySelectorAll(".video-card");

    cards.forEach(card => {

        const video = card.querySelector("video");

        if (!video) return;

        video.controls = false;

        card.addEventListener("click", () => {

            cards.forEach(other => {

                const otherVideo = other.querySelector("video");

                if (otherVideo !== video) {

                    otherVideo.pause();
                    otherVideo.currentTime = 0;
                    other.classList.remove("playing");

                }

            });

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

    });
    // =====================================
// AI ECOSYSTEM
// =====================================

const ecoData = {

    sales:{
        name:"Sales Department",
        title:"AI Sales Automation",
        description:"Automatically qualify leads, book meetings, send follow-ups, update your CRM and help your sales team close more deals with less manual work.",
        stats:["18 hrs","+32%","Easy"],
        labels:["Saved Weekly","Revenue Growth","Setup"],
        features:[
            "Lead Qualification",
            "Meeting Booking",
            "CRM Updates",
            "Proposal Generation",
            "AI Follow-Ups",
            "Pipeline Tracking"
        ]
    },

    marketing:{
        name:"Marketing Department",
        title:"AI Marketing Automation",
        description:"Generate content, schedule social media, automate email campaigns and analyse performance using AI.",
        stats:["14 hrs","+41%","Easy"],
        labels:["Saved Weekly","More Leads","Setup"],
        features:[
            "AI Content",
            "Email Campaigns",
            "Social Scheduling",
            "SEO Content",
            "Ad Reporting",
            "Analytics"
        ]
    },

    support:{
        name:"Support Department",
        title:"AI Customer Support",
        description:"Deliver instant customer support using AI Chatbots, WhatsApp and automated ticket routing.",
        stats:["24/7","-70%","Easy"],
        labels:["Availability","Support Cost","Setup"],
        features:[
            "Live Chat",
            "WhatsApp",
            "Ticket Routing",
            "Knowledge Base",
            "FAQs",
            "Escalations"
        ]
    },

    operations:{
        name:"Operations",
        title:"AI Operations",
        description:"Automate repetitive internal workflows, approvals, inventory and business operations.",
        stats:["20 hrs","+40%","Medium"],
        labels:["Saved Weekly","Efficiency","Setup"],
        features:[
            "Approvals",
            "Inventory",
            "Internal Tasks",
            "Notifications",
            "Reporting",
            "Automation"
        ]
    },

    finance:{
        name:"Finance",
        title:"AI Finance Automation",
        description:"Automate invoices, reminders, reporting and accounting processes.",
        stats:["15 hrs","100%","Easy"],
        labels:["Saved Weekly","Accuracy","Setup"],
        features:[
            "Invoices",
            "Expenses",
            "Payments",
            "Cashflow",
            "Reports",
            "Accounting"
        ]
    },

    hr:{
        name:"Human Resources",
        title:"AI HR Automation",
        description:"Speed up hiring, onboarding and employee management with AI.",
        stats:["12 hrs","+55%","Easy"],
        labels:["Saved Weekly","Hiring Speed","Setup"],
        features:[
            "Resume Screening",
            "Interview Booking",
            "Onboarding",
            "Leave Requests",
            "Training",
            "HR Assistant"
        ]
    }

};


const ecoNodes=document.querySelectorAll(".eco-node");

const ecoName=document.querySelector(".department-name");
const ecoTitle=document.getElementById("ecoTitle");
const ecoDescription=document.getElementById("ecoDescription");
const ecoFeatures=document.getElementById("ecoFeatures");

const stat1=document.getElementById("stat1");
const stat2=document.getElementById("stat2");
const stat3=document.getElementById("stat3");

const statLabels=document.querySelectorAll(".eco-stats span");

ecoNodes.forEach(node=>{

    node.addEventListener("click",()=>{

        ecoNodes.forEach(btn=>btn.classList.remove("active"));

        node.classList.add("active");

        const data=ecoData[node.dataset.id];

        if(!data) return;

        ecoName.textContent=data.name;
        ecoTitle.textContent=data.title;
        ecoDescription.textContent=data.description;

        stat1.textContent=data.stats[0];
        stat2.textContent=data.stats[1];
        stat3.textContent=data.stats[2];

        statLabels[0].textContent=data.labels[0];
        statLabels[1].textContent=data.labels[1];
        statLabels[2].textContent=data.labels[2];

        ecoFeatures.innerHTML="";

        data.features.forEach(feature=>{

            ecoFeatures.innerHTML+=`
                <div>
                    <i class="fa-solid fa-check"></i>
                    ${feature}
                </div>
            `;

        });

        document.querySelector(".ecosystem-content").animate(
        [
            {opacity:0.5,transform:"translateY(20px)"},
            {opacity:1,transform:"translateY(0)"}
        ],
        {
            duration:350,
            easing:"ease"
        });

    });

});

 
});

const questions = [

{
q:"What type of business do you run?",
options:[
"E-commerce",
"Agency",
"Real Estate",
"Service Business"
]
},

{
q:"What is your biggest challenge?",
options:[
"Too much manual work",
"Losing leads",
"Customer support",
"Managing tools"
]
},

{
q:"Which tools are you using?",
options:[
"GHL",
"Shopify",
"CRM",
"No system"
]
},

{
q:"What result do you want?",
options:[
"Save time",
"More customers",
"Better operations",
"Scale faster"
]
}

];


let current = 0;


const question = document.getElementById("question");
const options = document.getElementById("options");


function loadQuestion(){

question.innerHTML = questions[current].q;


options.innerHTML="";


questions[current].options.forEach(item=>{


let btn=document.createElement("button");

btn.innerHTML=item;


btn.onclick=function(){

current++;


if(current < questions.length){

loadQuestion();

}

else{


question.innerHTML =
"Your AI Automation Assessment is Ready 🚀";


options.innerHTML=`

<p style="color:#aaa">
Teta found multiple opportunities where AI can improve your business.
</p>


<button>
Book Strategy Call
</button>

`;

}


};


options.appendChild(btn);


});


}


loadQuestion();
