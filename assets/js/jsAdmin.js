/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== MODAL ===============*/
const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
        showBtn = document.querySelector(".show-modal"),
        closeBtn = document.querySelector(".close-btn");
        delBtn = document.querySelector(".del-btn");

        showBtn.addEventListener("click", () => {
            section.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        overlay.addEventListener("click", () => {
            section.classList.remove("active");
            document.body.style.overflowY = "auto"; // Permite a rolagem novamente
        });
        
        closeBtn.addEventListener("click", () => {
            section.classList.remove("active");
            document.body.style.overflowY = "auto"; // Permite a rolagem novamente
        });

        delBtn.addEventListener("click", () => {
            section.classList.remove("active");
            document.body.style.overflowY = "auto"; // Permite a rolagem novamente
        });
