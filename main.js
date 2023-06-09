// Menu-icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

}
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// navbar attributes

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// the animation that pops up after you reload

ScrollReveal({
    reset:true,
    distance:'100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .social-media', { origin: 'top'});
ScrollReveal().reveal('.services-container, .work-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content, .problem', { origin: 'right'});


// The typed js function
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Graphic designer','Videographer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

const type = new Typed('.attributes',{
    strings: ['Problem solver', 'Workaholic','Globetrotter', 'Mathematically articulate', 'Responsible'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})