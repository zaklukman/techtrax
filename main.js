//menu show
const showMenu = (toggleId, navId)=> {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> { //javascript css to display nav menu
            nav.classList.toggle('show'); 
        })
    }
};
showMenu('nav-toggle', 'nav-menu');

//Active and Remove menu Mobile
const navLink = document.querySelectorAll('nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach((n) =>n.addEventListener('click', linkAction));

//fixed header
function scrollheader(){
    if(window.scrollY > 100){
        document.querySelector('.header').classList.add('fixed');
    } else {
        document.querySelector('header').classList.remove('fixed')
    }
}
window.addEventListener('scroll', scrollheader);