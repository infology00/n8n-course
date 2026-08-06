console.log("knowledge.js loaded");
window.tetaKnowledge = {

start: {

question: "What brings you here today? Let's find the right AI solution for your business.",

options: [

{
text:"Automate my business",
next:"automation"
},

{
text:"Improve sales & marketing",
next:"marketing"
},

{
text:"Build an AI agent",
next:"agent"
},

{
text:"Connect my systems",
next:"integration"
},

{
text:"Optimize operations",
next:"operations"
},

{
text:"I need a custom AI strategy",
next:"strategy"
}

]

},

{
text:"I need n8n help",
next:"n8n"
},

{
text:"I need AI Agent help",
next:"agent"
},

{
text:"I need Marketing help",
next:"marketing"
},

{
text:"I need Ads help",
next:"ads"
}

]

},



automation: {

question:"What type of automation do you need?",

options:[

{
text:"Business workflow automation",
solution:"I can help you automate repetitive tasks, connect your tools and build complete AI workflows."
},

{
text:"Lead automation",
solution:"We can capture leads, qualify them using AI and automatically send follow ups."
},

{
text:"Content automation",
solution:"AI can generate, schedule and distribute your content automatically."
}

]

},



crm: {

question:"Which CRM are you using?",

options:[

{
text:"GoHighLevel",
next:"ghl"
},

{
text:"HubSpot",
solution:"I can help setup pipelines, workflows, lead management and integrations."
},

{
text:"No CRM",
solution:"I recommend setting up a CRM system based on your business process."
}

]

},



ghl: {

question:"What do you need in GoHighLevel?",

options:[

{
text:"Pipeline setup",
solution:"Create sales pipelines, stages, automation and follow-up systems."
},

{
text:"Workflow automation",
solution:"Build triggers, actions, email/SMS automation and CRM updates."
},

{
text:"AI Agent",
solution:"Setup Conversation AI, knowledge base and appointment booking."
}

]

},



n8n: {

question:"What do you want to build with n8n?",

options:[

{
text:"WhatsApp automation",
solution:"Connect Meta WhatsApp API with n8n using webhooks and automate conversations."
},

{
text:"CRM integration",
solution:"Connect n8n with GHL, HubSpot or other CRMs using APIs."
},

{
text:"AI Agent workflow",
solution:"Build AI agents with tools, memory and automation workflows."
}

]

},



agent: {

question:"Which AI Agent do you need?",

options:[

{
text:"Customer Support Agent",
solution:"AI chatbot that answers customers, handles FAQs and escalates conversations."
},

{
text:"Sales Agent",
solution:"AI agent that qualifies leads and books meetings."
},

{
text:"Voice Agent",
solution:"AI calling agent for inbound and outbound calls."
}

]

}

};
