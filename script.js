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


let video=card.querySelector("video");


if(!video)return;



card.onclick=()=>{


cards.forEach(c=>{


let v=c.querySelector("video");


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


const ecoData={


sales:{

title:"AI Sales Automation",

description:
"AI qualifies leads, books meetings, updates CRM and improves sales pipeline.",

features:[

"Lead Qualification",
"CRM Updates",
"Follow Ups",
"Meeting Booking"

]

},



marketing:{

title:"AI Marketing Automation",

description:
"AI creates content, manages campaigns and improves marketing performance.",

features:[

"Content Creation",
"Email Automation",
"SEO",
"Ad Reports"

]

},



support:{

title:"AI Customer Support",

description:
"AI chatbot, WhatsApp automation and customer service systems.",

features:[

"WhatsApp AI",
"Chatbots",
"Tickets",
"Knowledge Base"

]

},



operations:{

title:"AI Operations",

description:
"Automate daily business processes and repetitive tasks.",

features:[

"Workflow Automation",
"Approvals",
"Notifications",
"Reports"

]

},



finance:{

title:"AI Finance Automation",

description:
"Automate invoices, reports and financial workflows.",

features:[

"Invoices",
"Payments",
"Reports",
"Accounting"

]

},



hr:{

title:"AI HR Automation",

description:
"AI helps recruitment and employee management.",

features:[

"Hiring",
"Interviews",
"Onboarding",
"HR Assistant"

]

}


};





document.querySelectorAll(".eco-node")
.forEach(node=>{


node.onclick=()=>{


let data=ecoData[node.dataset.id];


if(!data)return;



document
.querySelectorAll(".eco-node")
.forEach(n=>n.classList.remove("active"));



node.classList.add("active");



const title=document.getElementById("ecoTitle");
const desc=document.getElementById("ecoDescription");
const box=document.getElementById("ecoFeatures");



if(title)
title.innerHTML=data.title;



if(desc)
desc.innerHTML=data.description;



if(box){


box.innerHTML="";


data.features.forEach(x=>{


box.innerHTML+=`

<div>

<i class="fa-solid fa-check"></i>

${x}

</div>

`;


});


}


};


});







// =====================================
// TETA AI ASSISTANT
// =====================================



if(!window.tetaKnowledge){

console.error("knowledge.js is not loaded");

return;

}




const questionEl=document.getElementById("question");
const optionsEl=document.getElementById("options");




function startTeta(){

loadNode("start");

}




function loadNode(nodeName){


const node=window.tetaKnowledge[nodeName];



if(!node){

questionEl.innerHTML=
"Sorry, I couldn't find that topic.";


return;

}




questionEl.innerHTML=node.question;


optionsEl.innerHTML="";



node.options.forEach(item=>{


const btn=document.createElement("button");


btn.textContent=item.text;



btn.addEventListener("click",()=>{


if(item.next){

loadNode(item.next);


}
else if(item.solution){

showSolution(item.solution);


}


});



optionsEl.appendChild(btn);


});


}






function showSolution(text){


questionEl.innerHTML=
"Recommended AI Solution";



optionsEl.innerHTML=`

<div class="teta-solution">


<p>${text}</p>


<br>


<p>
Want to implement this AI solution for your business?
</p>



<button id="bookCall">

Book Free AI Strategy Call

</button>



<button id="restartTeta">

Explore Another Solution

</button>



</div>

`;



document
.getElementById("restartTeta")
.addEventListener("click",startTeta);



document
.getElementById("bookCall")
.addEventListener("click",showLeadForm);



}





function showLeadForm(){



questionEl.innerHTML=
"Let's build your AI solution";



optionsEl.innerHTML=`

<div class="teta-form">


<input id="tetaName" placeholder="Your Name">


<input id="tetaEmail" placeholder="Business Email">


<input id="tetaCompany" placeholder="Company Name">


<textarea id="tetaChallenge" placeholder="What would you like to automate?"></textarea>


<button id="submitTeta">

Submit Request

</button>


</div>

`;

}




if(questionEl && optionsEl){

startTeta();

}




});

// =====================================
// AI WORKFLOW BUILDER - PHASE 1
// =====================================


const workflowButtons = document.querySelectorAll(
    ".workflow-items button, .workflow-subitems button"
);


const workflowNodes = document.getElementById("workflowNodes");

const clearWorkflow = document.getElementById("clearWorkflow");


const nodeCount = document.getElementById("nodeCount");

const priceEstimate = document.getElementById("priceEstimate");

const timelineEstimate = document.getElementById("timelineEstimate");




// Store selected nodes

let selectedNodes = [];





// Pricing

const nodePricing = {


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
// ADD NODE ON CLICK
// =====================================


workflowButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const nodeName = button.dataset.node;


        if(!nodeName) return;



        // Prevent duplicate nodes

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



    const empty = document.querySelector(".empty-workflow");


    if(empty){

        empty.remove();

    }




    const node = document.createElement("div");


    node.className = "workflow-node";





    node.innerHTML = `


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



}







// =====================================
// UPDATE ESTIMATE
// =====================================


function updateEstimate(){



    let total = 0;



    selectedNodes.forEach(node=>{


        total += nodePricing[node] || 250;


    });




    nodeCount.innerText = selectedNodes.length;



    priceEstimate.innerText = "$" + total;





    if(selectedNodes.length === 0){


        timelineEstimate.innerText = "—";


    }

    else if(selectedNodes.length <=3){


        timelineEstimate.innerText = "3-5 Days";


    }

    else if(selectedNodes.length <=6){


        timelineEstimate.innerText = "1-2 Weeks";


    }

    else{


        timelineEstimate.innerText = "2-4 Weeks";


    }



}







// =====================================
// CLEAR WORKFLOW
// =====================================


if(clearWorkflow){



    clearWorkflow.addEventListener("click",()=>{



        selectedNodes = [];



        workflowNodes.innerHTML = `


        <div class="empty-workflow">


            Select tools from the left to start building your automation workflow.


        </div>


        `;



        updateEstimate();



    });



}

