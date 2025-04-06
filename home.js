let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click' , () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    let spans = hamburger.querySelectorAll('span');
    spans.forEach((span) => {
        span.classList.toggle('active');
    })
})