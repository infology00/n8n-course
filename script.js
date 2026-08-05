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


    }


});
