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
