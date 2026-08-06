// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// ================================
// MEGA MENU
// ================================


const megaParent = document.querySelector(".mega-parent");
const megaMenu = document.querySelector(".mega-menu");


if(megaParent && megaMenu){


    let closeTimer;


    megaParent.addEventListener("mouseenter", function(){


        clearTimeout(closeTimer);


        megaMenu.classList.add("active");


    });



    megaParent.addEventListener("mouseleave", function(){


        closeTimer = setTimeout(function(){


            megaMenu.classList.remove("active");


        },300);


    });



    megaMenu.addEventListener("mouseenter", function(){


        clearTimeout(closeTimer);


        megaMenu.classList.add("active");


    });



    megaMenu.addEventListener("mouseleave", function(){


        closeTimer = setTimeout(function(){


            megaMenu.classList.remove("active");


        },300);


    });


}





// ================================
// MOBILE MENU
// ================================


const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if(menuBtn && navLinks){


    menuBtn.addEventListener("click", function(){


        navLinks.classList.toggle("show");


    });


}





// ================================
// NAVBAR SHADOW ON SCROLL
// ================================


window.addEventListener("scroll", function(){


    const navbar = document.querySelector(".navbar");



    if(navbar){


        if(window.scrollY > 50){


            navbar.classList.add("scrolled");


        }else{


            navbar.classList.remove("scrolled");


        }


    }


});
