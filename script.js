// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// Mega Menu

const megaParent = document.querySelector(".mega-parent");
const megaMenu = document.querySelector(".mega-menu");


if(megaParent && megaMenu){


    let closeTimer;


    megaParent.addEventListener("mouseenter",()=>{


        clearTimeout(closeTimer);


        megaMenu.classList.add("active");


    });



    megaParent.addEventListener("mouseleave",()=>{


        closeTimer = setTimeout(()=>{


            megaMenu.classList.remove("active");


        },200);



    });



    megaMenu.addEventListener("mouseenter",()=>{


        clearTimeout(closeTimer);


        megaMenu.classList.add("active");


    });



    megaMenu.addEventListener("mouseleave",()=>{


        closeTimer = setTimeout(()=>{


            megaMenu.classList.remove("active");


        },200);



    });



}





// Mobile Menu Ready

const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){


menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("show");


});


}






// Navbar shadow on scroll


window.addEventListener("scroll",()=>{


    const navbar = document.querySelector(".navbar");


    if(navbar){


        if(window.scrollY > 50){


            navbar.classList.add("scrolled");


        }else{


            navbar.classList.remove("scrolled");


        }
/* ==========================================
   AI WORKFLOW BUILDER
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const builder = document.querySelector(".workflow-builder");

    if (!builder) return;


    const buttons = builder.querySelectorAll(
        ".workflow-items button[data-node]"
    );

    const canvas = builder.querySelector("#workflowCanvas");

    const nodesContainer = builder.querySelector("#workflowNodes");

    const emptyState = builder.querySelector("#workflowEmpty");

    const connections = builder.querySelector(
        "#workflowConnections"
    );

    const clearButton = builder.querySelector(
        "#clearWorkflow"
    );


    let selectedNodes = [];


    /* ==========================================
       ICONS
    ========================================== */

    const icons = {

        "Facebook Leads":
            "fa-brands fa-facebook-f",

        "Instagram DM":
            "fa-brands fa-instagram",

        "LinkedIn":
            "fa-brands fa-linkedin-in",

        "WhatsApp":
            "fa-brands fa-whatsapp",

        "Email":
            "fa-solid fa-envelope",

        "HubSpot":
            "fa-brands fa-hubspot",

        "GoHighLevel":
            "fa-solid fa-chart-line",

        "Zoho CRM":
            "fa-solid fa-users",

        "Salesforce":
            "fa-brands fa-salesforce",

        "ChatGPT":
            "fa-solid fa-robot",

        "Claude":
            "fa-solid fa-brain",

        "Gemini":
            "fa-solid fa-sparkles",

        "Shopify":
            "fa-brands fa-shopify",

        "WooCommerce":
            "fa-brands fa-wordpress"

    };


    /* ==========================================
       CREATE NODE
    ========================================== */

    function createNode(name, index) {

        const node = document.createElement("div");

        node.className = "workflow-node";

        node.dataset.node = name;

        const icon = icons[name] || "fa-solid fa-cube";


        node.innerHTML = `

            <div class="workflow-node-icon">

                <i class="${icon}"></i>

            </div>

            <div class="workflow-node-content">

                <small>Workflow Node</small>

                <strong>${name}</strong>

            </div>

        `;


        nodesContainer.appendChild(node);


        /*
         * Position nodes across the canvas.
         * This keeps them visually connected
         * without needing a third-party library.
         */

        const canvasWidth = canvas.clientWidth;

        const canvasHeight = canvas.clientHeight;


        const columns = 3;

        const row = Math.floor(index / columns);

        const column = index % columns;


        const spacingX = Math.max(
            210,
            (canvasWidth - 260) / columns
        );


        const x = 70 + column * spacingX;

        const y = 100 + row * 145;


        node.style.left =
            Math.min(
                x,
                canvasWidth - 220
            ) + "px";


        node.style.top =
            Math.min(
                y,
                canvasHeight - 110
            ) + "px";


        return node;

    }


    /* ==========================================
       DRAW CONNECTIONS
    ========================================== */

    function drawConnections() {

        connections.innerHTML = "";


        const nodes =
            [...nodesContainer.querySelectorAll(
                ".workflow-node"
            )];


        if (nodes.length < 2) return;


        const canvasRect =
            canvas.getBoundingClientRect();


        for (
            let i = 0;
            i < nodes.length - 1;
            i++
        ) {

            const first =
                nodes[i].getBoundingClientRect();

            const second =
                nodes[i + 1].getBoundingClientRect();


            const x1 =
                first.right -
                canvasRect.left;

            const y1 =
                first.top +
                first.height / 2 -
                canvasRect.top;


            const x2 =
                second.left -
                canvasRect.left;

            const y2 =
                second.top +
                second.height / 2 -
                canvasRect.top;


            const curve =
                Math.max(
                    50,
                    Math.abs(x2 - x1) * .45
                );


            const path =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );


            path.classList.add(
                "workflow-line"
            );


            path.setAttribute(
                "d",
                `
                M ${x1} ${y1}
                C ${x1 + curve} ${y1},
                  ${x2 - curve} ${y2},
                  ${x2} ${y2}
                `
            );


            connections.appendChild(path);

        }

    }


    /* ==========================================
       ADD NODE
    ========================================== */

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const nodeName =
                    button.dataset.node;


                /*
                 * Prevent duplicates
                 */

                if (
                    selectedNodes.includes(nodeName)
                ) {

                    button.classList.remove(
                        "selected"
                    );

                    selectedNodes =
                        selectedNodes.filter(
                            node =>
                                node !== nodeName
                        );


                    const existing =
                        nodesContainer.querySelector(
                            `[data-node="${CSS.escape(nodeName)}"]`
                        );


                    if (existing) {

                        existing.remove();

                    }

                } else {

                    button.classList.add(
                        "selected"
                    );

                    selectedNodes.push(
                        nodeName
                    );

                }


                renderWorkflow();

            }
        );

    });


    /* ==========================================
       RENDER
    ========================================== */

    function renderWorkflow() {

        /*
         * Rebuild nodes in selected order
         */

        nodesContainer.innerHTML = "";


        selectedNodes.forEach(
            function (name, index) {

                createNode(
                    name,
                    index
                );

            }
        );


        if (selectedNodes.length === 0) {

            emptyState.classList.remove(
                "hidden"
            );

        } else {

            emptyState.classList.add(
                "hidden"
            );

        }


        requestAnimationFrame(
            drawConnections
        );

    }


    /* ==========================================
       CLEAR
    ========================================== */

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                selectedNodes = [];


                buttons.forEach(
                    button =>
                        button.classList.remove(
                            "selected"
                        )
                );


                nodesContainer.innerHTML = "";

                connections.innerHTML = "";


                emptyState.classList.remove(
                    "hidden"
                );

            }
        );

    }


    /* ==========================================
       REDRAW ON RESIZE
    ========================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                selectedNodes.length
            ) {

                renderWorkflow();

            }

        }
    );


});

    }


});
