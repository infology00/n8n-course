// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// =====================================
// MEGA MENU
// =====================================


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


        },300);


    });







    megaMenu.addEventListener("mouseenter",()=>{


        clearTimeout(closeTimer);


        megaMenu.classList.add("active");


    });







    megaMenu.addEventListener("mouseleave",()=>{


        closeTimer = setTimeout(()=>{


            megaMenu.classList.remove("active");


        },300);


    });



}









// =====================================
// MOBILE MENU
// =====================================


const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if(menuBtn && navLinks){


    menuBtn.addEventListener("click",()=>{


        navLinks.classList.toggle("show");


    });


}









// =====================================
// NAVBAR SHADOW ON SCROLL
// =====================================


window.addEventListener("scroll",()=>{


    const navbar = document.querySelector(".navbar");



    if(navbar){


        if(window.scrollY > 50){


            navbar.classList.add("scrolled");


        }else{


            navbar.classList.remove("scrolled");


        }


    }


});









// =====================================
// VIDEO AUTOMATION SHOWCASE
// =====================================


const videoCards = document.querySelectorAll(".video-card");



videoCards.forEach(card=>{


    const video = card.querySelector("video");



    if(video){



        card.addEventListener("click",()=>{



            // Stop all other videos

            document.querySelectorAll(".video-card video").forEach(otherVideo=>{


                if(otherVideo !== video){


                    otherVideo.pause();


                    otherVideo.currentTime = 0;


                }


            });






            // Play / Pause selected video


            if(video.paused){


                video.play();


                card.classList.add("playing");


            }else{


                video.pause();


                card.classList.remove("playing");


            }



        });



    }



});









// =====================================
// REMOVE PLAY BUTTON WHEN VIDEO PLAYING
// =====================================


document.querySelectorAll(".video-card video").forEach(video=>{


    video.addEventListener("play",()=>{


        video.parentElement.classList.add("playing");


    });




    video.addEventListener("pause",()=>{


        video.parentElement.classList.remove("playing");


    });



});
