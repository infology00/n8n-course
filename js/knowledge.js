// =====================================
// TETA AI KNOWLEDGE ENGINE
// PART 1
// =====================================


const tetaKnowledge = {


// =====================================
// GENERAL START
// =====================================

general:{

title:"AI Business Assistant",

questions:[

{
user:[
"help",
"need help",
"support",
"solution"
],

answer:{

message:
"I can help you with AI automation, CRM, marketing, integrations, business systems and growth strategies.",

next:[
"AI Automation",
"CRM Help",
"Marketing",
"AI Agents",
"Business Audit"
]

}

}

]

},




// =====================================
// AI AUTOMATION
// =====================================


automation:{


keywords:[

"automation",
"automate",
"workflow",
"process",
"manual work"

],


solutions:{


default:{

message:

"AI automation can reduce repetitive work and connect your tools together.",


recommendations:[

"n8n Workflow Automation",
"CRM Automation",
"AI Agents",
"API Integrations",
"Business Process Audit"

]


},



n8n:{


keywords:[

"n8n",
"workflow",
"node",
"webhook"

],



message:

"For n8n automation you can connect apps using triggers, actions and APIs.",


solution:[


"1. Create workflow in n8n",

"2. Add trigger (Webhook, Schedule, App Event)",

"3. Connect API credentials",

"4. Process data",

"5. Send output to CRM or customer"


],



examples:[


"WhatsApp automation",

"Lead management",

"CRM updates",

"Email automation",

"AI agents"

]


},




api:{


keywords:[

"api",
"connection",
"integrate",
"integration"

],


message:

"API integration allows different software systems to communicate with each other.",


solution:[


"Check API documentation",

"Generate API credentials",

"Create authentication",

"Send request",

"Process response"


]


}



}



},







// =====================================
// CRM
// =====================================


crm:{


keywords:[

"crm",
"pipeline",
"lead",
"customer management"

],


systems:{


ghl:{


keywords:[

"ghl",
"go high level",
"gohighlevel"

],



message:

"GoHighLevel can manage leads, pipelines, conversations, campaigns and automation.",



solutions:[


"Lead Capture Forms",

"Pipeline Setup",

"Email Follow Ups",

"SMS Automation",

"Appointment Booking",

"AI Conversation Agent"


]

},




hubspot:{


keywords:[

"hubspot"

],


message:

"HubSpot can organize your sales process and automate customer journeys.",


solutions:[


"Lead Tracking",

"Deal Pipeline",

"Email Automation",

"CRM Reports",

"Marketing Automation"


]


}



}



},







// =====================================
// WHATSAPP
// =====================================


whatsapp:{


keywords:[

"whatsapp",
"wa",
"whatsapp api"

],


message:

"WhatsApp automation requires WhatsApp Business API connected with automation tools.",



solutions:[


"Meta Developer Account",

"WhatsApp Business API",

"Phone Number ID",

"Access Token",

"Webhook Connection",

"n8n Integration"


],



example:


{

question:

"How to connect WhatsApp with n8n?",


answer:

`

Steps:

1. Create Meta Developer Account

2. Create WhatsApp Business App

3. Generate Access Token

4. Get Phone Number ID

5. Add Webhook URL in Meta

6. Connect webhook with n8n

7. Send and receive messages automatically


Recommended Setup:

WhatsApp API + n8n + CRM + AI Agent

`

}



},







// =====================================
// AI AGENTS
// =====================================


agents:{


keywords:[

"agent",
"ai agent",
"bot",
"assistant"

],


types:{


sales:{

message:

"AI Sales Agent can qualify leads, answer questions and book appointments.",


features:[

"Lead Qualification",

"Follow Ups",

"CRM Updates",

"Meeting Booking"

]


},



support:{

message:

"AI Support Agent handles customer questions 24/7.",


features:[

"FAQs",

"Knowledge Base",

"Ticket Creation",

"Customer Support"

]


},




voice:{


message:

"AI Voice Agent can handle inbound and outbound calls.",


features:[


"Answer Calls",

"Qualify Customers",

"Book Appointments",

"Update CRM"

]


}



}


}






};
