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


if(menuBtn){

menuBtn.onclick=()=>{

nav.classList.toggle("show");

}

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

}else{

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
description:"AI qualifies leads, books meetings, updates CRM and improves sales pipeline.",
features:[
"Lead Qualification",
"CRM Updates",
"Follow Ups",
"Meeting Booking"
]
},


marketing:{
title:"AI Marketing Automation",
description:"AI creates content, manages campaigns and improves marketing performance.",
features:[
"Content Creation",
"Email Automation",
"SEO",
"Ad Reports"
]
},


support:{
title:"AI Customer Support",
description:"AI chatbot, WhatsApp automation and customer service systems.",
features:[
"WhatsApp AI",
"Chatbots",
"Tickets",
"Knowledge Base"
]
},


operations:{
title:"AI Operations",
description:"Automate daily business processes and repetitive tasks.",
features:[
"Workflow Automation",
"Approvals",
"Notifications",
"Reports"
]
},


finance:{
title:"AI Finance Automation",
description:"Automate invoices, reports and financial workflows.",
features:[
"Invoices",
"Payments",
"Reports",
"Accounting"
]
},


hr:{
title:"AI HR Automation",
description:"AI helps recruitment and employee management.",
features:[
"Hiring",
"Interviews",
"Onboarding",
"HR Assistant"
]
}


};



document.querySelectorAll(".eco-node").forEach(node=>{


node.onclick=()=>{


let data=ecoData[node.dataset.id];


if(!data)return;


document.querySelectorAll(".eco-node")
.forEach(n=>n.classList.remove("active"));


node.classList.add("active");



document.getElementById("ecoTitle").innerHTML=data.title;


document.getElementById("ecoDescription").innerHTML=data.description;



let box=document.getElementById("ecoFeatures");


box.innerHTML="";


data.features.forEach(x=>{


box.innerHTML+=`

<div>

<i class="fa-solid fa-check"></i>

${x}

</div>

`;


});


};


});






// =====================================
// TETA AI ENGINE
// =====================================


const questionBox=document.getElementById("question");
const optionBox=document.getElementById("options");



let tetaMemory=[];



function startTeta(){


askTeta(

"Hi, I am Teta AI Genie. How can I help you?",

[

"I need business help",

"I need automation help",

"I have a technical question",

"I want AI strategy"

]


);


}




function askTeta(question,answers){


questionBox.innerHTML=question;


optionBox.innerHTML="";


answers.forEach(answer=>{


let btn=document.createElement("button");


btn.innerHTML=answer;


btn.onclick=()=>{

tetaAnswer(answer);

};


optionBox.appendChild(btn);


});


}






function tetaAnswer(input){


tetaMemory.push(input);



let text=input.toLowerCase();



let found=null;



Object.keys(tetaKnowledge).forEach(key=>{


let data=tetaKnowledge[key];


if(
text.includes(key.toLowerCase())
){

found=data;

}


});





if(found){


showResult(found);


return;


}





askTeta(

"What do you need help with?",

[

"n8n Automation",

"CRM Setup",

"GHL",

"WhatsApp Integration",

"AI Agents",

"Ads & Marketing"

]


);



}





function showResult(data){


let answer="";


if(data.answer){

answer=data.answer;

}

else if(data.solution){

answer=data.solution;

}

else{

answer="I found a possible solution. Let me guide you step by step.";

}



questionBox.innerHTML=data.title || "Teta Solution";



optionBox.innerHTML=`

<div style="
color:#aaa;
line-height:1.8;
font-size:17px;
">

${answer}

</div>


<button onclick="location.reload()">

Start Again

</button>


`;



}



startTeta();



});
