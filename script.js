// =====================================
// AWSZ WEBSITE SCRIPT
// =====================================


// Mega Menu

const megaParent = document.querySelector(".mega-parent");
const megaMenu = document.querySelector(".mega-menu");


if(megaParent && megaMenu){


    megaParent.addEventListener("mouseenter", function(){

        megaMenu.classList.add("active");

    });



    megaParent.addEventListener("mouseleave", function(){

        megaMenu.classList.remove("active");

    });



    megaMenu.addEventListener("mouseenter", function(){

        megaMenu.classList.add("active");

    });



    megaMenu.addEventListener("mouseleave", function(){

        megaMenu.classList.remove("active");

    });


}





// Mobile Menu

const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){


    menuBtn.addEventListener("click", function(){

        navLinks.classList.toggle("show");

    });


}





// Navbar shadow on scroll


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
