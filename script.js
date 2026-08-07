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
