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



automation: {

question:"What would you like to automate?",

options:[

{
text:"Business workflows",
solution:"I can help automate repetitive tasks, connect your tools and build AI-powered workflows that save time."
},

{
text:"Lead generation & follow-ups",
solution:"I can help capture leads, qualify prospects and automate follow-up systems."
},

{
text:"Content creation",
solution:"I can help build AI content systems for generating, managing and distributing content."
}

]

},



marketing: {

question:"What area of marketing do you want to improve?",

options:[

{
text:"Generate more leads",
solution:"I can help build AI-powered lead generation and qualification systems."
},

{
text:"Automate campaigns",
solution:"I can help automate email campaigns, customer journeys and marketing workflows."
},

{
text:"Improve sales process",
solution:"I can help connect marketing with CRM automation and sales follow-ups."
}

]

},



agent: {

question:"What type of AI agent are you looking for?",

options:[

{
text:"Customer Support Agent",
solution:"An AI assistant that answers customer questions, handles FAQs and improves support response time."
},

{
text:"Sales Agent",
solution:"An AI sales assistant that qualifies leads, answers questions and books meetings."
},

{
text:"Voice AI Agent",
solution:"An AI calling assistant for inbound and outbound customer conversations."
}

]

},



integration: {

question:"Which systems do you want to connect?",

options:[

{
text:"CRM systems",
solution:"I can connect CRM platforms like GoHighLevel, HubSpot and other business tools."
},

{
text:"Business apps",
solution:"I can connect your tools and create automated workflows between platforms."
},

{
text:"Custom API integration",
solution:"I can build custom integrations using APIs, webhooks and automation platforms."
}

]

},



operations: {

question:"Which part of your operations needs improvement?",

options:[

{
text:"Reduce manual tasks",
solution:"I can identify repetitive processes and automate them using AI workflows."
},

{
text:"Internal processes",
solution:"I can help optimize approvals, notifications and team workflows."
},

{
text:"Reporting & data",
solution:"I can build automated reports and dashboards for better decisions."
}

]

},



strategy: {

question:"Tell me about your business goal.",

options:[

{
text:"Save time & reduce costs",
solution:"I can analyze your workflow and identify the best automation opportunities."
},

{
text:"Scale my business",
solution:"I can design an AI roadmap to help your business grow faster."
},

{
text:"I need expert guidance",
solution:"Let's understand your business and create a custom AI strategy."
}

]

}

};
