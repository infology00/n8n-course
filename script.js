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
