/* =========================================================
   AWSZ CAPABILITY INTERACTION
========================================================= */

document.querySelectorAll(".cap-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        document.querySelectorAll(".cap-card").forEach(other => {
            if (other !== card) {
                other.style.opacity = "0.45";
            }
        });

        card.style.opacity = "1";
    });


    card.addEventListener("mouseleave", () => {

        document.querySelectorAll(".cap-card").forEach(other => {
            other.style.opacity = "1";
        });

    });

});
/* =========================================================
   AWSZ — PROBLEM SECTION INTERACTION
========================================================= */

document.querySelectorAll(".problem-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.querySelectorAll(".flow-step:not(.muted)").forEach((step) => {
            step.style.borderColor = "rgba(168,212,16,.25)";
            step.style.color = "#A8D410";
        });

    });


    card.addEventListener("mouseleave", () => {

        card.querySelectorAll(".flow-step:not(.muted)").forEach((step) => {
            step.style.borderColor = "";
            step.style.color = "";
        });

    });

});
/* =========================================================
   AWSZ — WORK SECTION INTERACTION
========================================================= */

document.querySelectorAll(".work-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.querySelectorAll(".workflow-node").forEach((node, index) => {

            setTimeout(() => {
                node.style.transform = "translateY(-5px)";
            }, index * 60);

        });

    });


    card.addEventListener("mouseleave", () => {

        card.querySelectorAll(".workflow-node").forEach((node) => {
            node.style.transform = "";
        });

    });

});
/* =========================================================
   AWSZ — PROCESS INTERACTION
========================================================= */

document.querySelectorAll(".process-step").forEach((step) => {

  step.addEventListener("mouseenter", () => {

    const line = step.querySelector(".process-line span");

    if (line) {
      line.style.width = "100%";
    }

  });


  step.addEventListener("mouseleave", () => {

    const line = step.querySelector(".process-line span");

    if (line) {
      line.style.width = "";
    }

  });

});
/* =========================================================
   AWSZ — SYSTEM MAP INTERACTION
========================================================= */

const systemMap = document.querySelector(".system-map");

if (systemMap) {

    const nodes = systemMap.querySelectorAll(".system-node");

    systemMap.addEventListener("mousemove", (e) => {

        const rect = systemMap.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width - 0.5;

        const y =
            (e.clientY - rect.top) / rect.height - 0.5;


        nodes.forEach((node, index) => {

            const strength = 5 + index * 1.5;

            node.style.transform =
                `translate(${x * strength}px, ${y * strength}px)`;

        });

    });


    systemMap.addEventListener("mouseleave", () => {

        nodes.forEach((node) => {

            node.style.transform = "";

        });

    });

}
/* =========================================================
   AWSZ — POSSIBILITIES INTERACTION
========================================================= */

document.querySelectorAll(".problem-item").forEach((item) => {

    item.addEventListener("mouseenter", () => {

        const icon = item.querySelector(".problem-icon");

        if (icon) {
            icon.style.transform = "rotate(8deg) scale(1.08)";
        }

    });


    item.addEventListener("mouseleave", () => {

        const icon = item.querySelector(".problem-icon");

        if (icon) {
            icon.style.transform = "";
        }

    });

});
/* =========================================================
   AWSZ — FAQ ACCORDION
========================================================= */

document.querySelectorAll(".faq-question").forEach((button) => {

    button.addEventListener("click", () => {

        const currentItem = button.closest(".faq-item");

        document.querySelectorAll(".faq-item").forEach((item) => {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        currentItem.classList.toggle("active");

    });

});
/* =========================================================
   AWSZ — FINAL CTA PARALLAX
========================================================= */

const finalCTA = document.querySelector(".awsz-final-cta");

if (finalCTA) {

    finalCTA.addEventListener("mousemove", (e) => {

        const rect = finalCTA.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width - 0.5;

        const y =
            (e.clientY - rect.top) / rect.height - 0.5;


        const glow =
            finalCTA.querySelector(".final-glow");

        if (glow) {

            glow.style.transform =
                `translate(
                    calc(-50% + ${x * 25}px),
                    calc(-50% + ${y * 25}px)
                )`;

        }

    });


    finalCTA.addEventListener("mouseleave", () => {

        const glow =
            finalCTA.querySelector(".final-glow");

        if (glow) {

            glow.style.transform =
                "translate(-50%, -50%)";

        }

    });

}
