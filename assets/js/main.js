/* =============== MENU SHOW Y HIDDEN ================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* =============== MENU SHOW  ========================= */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* =============== MENU HIDDEN  ========================= */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =============== REMOVE MOBILE MENU  =================== */
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //when a nav-link is clicked, it is removed
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => addEventListener('click', linkAction));

/* =============== ACCORDION SKILLS  =================== */
const skills_content = document.getElementsByClassName('skills_content'),
      skills_header = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i=0; i < skills_content.length; i++){
        skills_content[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content animate skills_open'
    }
}
skills_header.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/* =============== SERVICES   ========================= */
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', ()=> {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=> {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/* Portfolio Swiper */
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

})

/* =============== CHANGE BACKGROUND HEADER ==================== */
function scrollHeader(params) {
    const nav = document.getElementById('header');
    //when the scroll is > than 200VH, add the scroll header class
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =============== SCROLL   ========================= */
/*
const sections = document.querySelectorAll('section[id]');


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
*/

/* =============== SHOW SCROLL TOP   ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the page is higher than 560 view port height, add the scroll class
    if(this.scrollY >= 560)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* =============== DARK/LIGHT THEME   ====================*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
//validate if user previously chose a theme
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
//  Activate/Deactivate the theme with button click
themeButton.addEventListener('click', ()=> {
    //Add or remove dark/light theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //save the theme and the current icon the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


