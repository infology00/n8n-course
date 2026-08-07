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


const ecoNodes=document.querySelectorAll(".eco-node");



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

}


};





ecoNodes.forEach(node=>{


node.onclick=()=>{


const data=ecoData[node.dataset.id];


if(!data)return;



document.querySelectorAll(".eco-node")
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


data.features.forEach(item=>{


box.innerHTML+=`

<div>

<i class="fa-solid fa-check"></i>

${item}

</div>


`;


});


}



};


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


<div class="teta-solution">


<p>${text}</p>


<button id="restartTeta">

Explore Another Solution

</button>


<button id="bookCall">

Book Free AI Strategy Call

</button>


</div>


`;



document.getElementById("restartTeta")
.onclick=startTeta;



document.getElementById("bookCall")
.onclick=showLeadForm;



}




function showLeadForm(){


questionEl.innerHTML="Let's build your AI solution";


optionsEl.innerHTML=`


<div class="teta-form">


<input placeholder="Your Name">

<input placeholder="Business Email">

<textarea placeholder="What would you like to automate?"></textarea>


<button>

Submit Request

</button>


</div>


`;



}



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






// Pricing System

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
// BUTTON CLICK
// =====================================


workflowButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const nodeName = button.dataset.node;



        if(!nodeName)return;




        // Stop duplicate nodes

        if(selectedNodes.includes(nodeName)){

            return;

        }





        selectedNodes.push(nodeName);



        createWorkflowNode(nodeName);



        updateEstimate();



    });


});







// =====================================
// CREATE N8N STYLE NODE
// =====================================


function createWorkflowNode(name){



    if(!workflowNodes)return;




    const empty = document.querySelector(".empty-workflow");



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
    makeNodeDraggable(node);


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
function makeNodeDraggable(node){

    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;

    node.addEventListener("mousedown", (e) => {

        dragging = true;

        const nodeRect = node.getBoundingClientRect();

        offsetX = e.clientX - nodeRect.left;
        offsetY = e.clientY - nodeRect.top;

        node.style.cursor = "grabbing";

        e.preventDefault();

    });


    document.addEventListener("mousemove", (e) => {

        if(!dragging) return;

        const canvasRect = workflowNodes.getBoundingClientRect();

        let x = e.clientX - canvasRect.left - offsetX;
        let y = e.clientY - canvasRect.top - offsetY;


        // Keep node inside canvas

        const maxX = canvasRect.width - node.offsetWidth;
        const maxY = canvasRect.height - node.offsetHeight;


        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));


        node.style.left = x + "px";
        node.style.top = y + "px";

    });


    document.addEventListener("mouseup", () => {

        if(!dragging) return;

        dragging = false;

        node.style.cursor = "grab";

    });

}
