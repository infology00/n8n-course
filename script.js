// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// =====================================
// MEGA MENU
// =====================================

const megaParent = document.querySelector(".mega-parent");
const megaMenu = document.querySelector(".mega-menu");

if (megaParent && megaMenu) {

    let closeTimer;

    megaParent.addEventListener("mouseenter", () => {

        clearTimeout(closeTimer);
        megaMenu.classList.add("active");

    });

    megaParent.addEventListener("mouseleave", () => {

        closeTimer = setTimeout(() => {

            megaMenu.classList.remove("active");

        }, 300);

    });

    megaMenu.addEventListener("mouseenter", () => {

        clearTimeout(closeTimer);
        megaMenu.classList.add("active");

    });

    megaMenu.addEventListener("mouseleave", () => {

        closeTimer = setTimeout(() => {

            megaMenu.classList.remove("active");

        }, 300);

    });

}



// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}



// =====================================
// NAVBAR SHADOW
// =====================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



// =====================================
// VIDEO SHOWCASE
// =====================================

const cards = document.querySelectorAll(".video-card");

cards.forEach(card => {

    const video = card.querySelector("video");

    if (!video) return;

    video.controls = false;

    card.addEventListener("click", () => {

        // Stop every other video
        document.querySelectorAll(".video-card").forEach(otherCard => {

            const otherVideo = otherCard.querySelector("video");

            if (otherVideo !== video) {

                otherVideo.pause();
                otherVideo.currentTime = 0;
                otherCard.classList.remove("playing");

            }

        });

        // Toggle current video
        if (video.paused) {

            video.muted = false;
            video.play();
            card.classList.add("playing");

        } else {

            video.pause();
            card.classList.remove("playing");

        }

    });

    video.addEventListener("ended", () => {

        card.classList.remove("playing");

    });

    video.addEventListener("pause", () => {

        if (!video.ended) {

            card.classList.remove("playing");

        }

    });

});
