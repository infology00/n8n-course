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

question:"What would you like to automate first?",

options:[

{
text:"Lead generation & follow-ups",
solution:"I can help you capture leads, qualify prospects using AI, automate follow-ups and create a complete sales automation system."
},

{
text:"Customer support",
solution:"I can help build AI chatbots, WhatsApp assistants and support systems that answer customers instantly."
},

{
text:"Repetitive business tasks",
solution:"I can identify manual tasks in your business and create AI workflows to save time and reduce operational costs."
},

{
text:"Data & reporting",
solution:"I can automate data collection, reporting and dashboards so you always have real-time business insights."
},

{
text:"Internal workflows",
solution:"I can connect your tools and automate approvals, notifications and team processes."
}

]

},



marketing: {

question:"What would you like to improve in your marketing?",

options:[

{
text:"Generate more leads",
solution:"I can help create AI-powered lead generation systems that find, qualify and organize potential customers."
},

{
text:"Automate marketing campaigns",
solution:"I can build automated email, CRM and customer journey workflows."
},

{
text:"Improve sales conversion",
solution:"I can connect marketing systems with AI follow-ups and sales automation."
}

]

},



agent: {

question:"What type of AI agent are you looking for?",

options:[

{
text:"Customer Support Agent",
solution:"An AI assistant that answers customer questions, handles FAQs and improves response time."
},

{
text:"Sales Agent",
solution:"An AI sales assistant that qualifies leads, answers questions and books meetings."
},

{
text:"Voice AI Agent",
solution:"An AI calling agent that handles inbound and outbound conversations."
}

]

},



integration: {

question:"What systems do you want to connect?",

options:[

{
text:"CRM systems",
solution:"I can connect platforms like GoHighLevel, HubSpot and other CRM systems."
},

{
text:"Business applications",
solution:"I can connect your existing tools and automate workflows between them."
},

{
text:"Custom API integrations",
solution:"I can build custom integrations using APIs, webhooks and automation platforms."
}

]

},



operations: {

question:"Which area of operations needs improvement?",

options:[

{
text:"Reduce manual work",
solution:"I can analyze your processes and automate repetitive tasks using AI workflows."
},

{
text:"Team workflows",
solution:"I can automate approvals, notifications and internal processes."
},

{
text:"Reports & analytics",
solution:"I can build automated reports and dashboards to improve decision making."
}

]

},



strategy: {

question:"What is your main business goal?",

options:[

{
text:"Save time and reduce costs",
solution:"I can analyze your business and identify the best automation opportunities."
},

{
text:"Scale my business",
solution:"I can create an AI roadmap to help your business grow faster."
},

{
text:"Need expert guidance",
solution:"Let's understand your business challenges and design a custom AI strategy."
}

]

}

};
