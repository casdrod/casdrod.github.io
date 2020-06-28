const personal = document.querySelector('#personal');
const pro = document.querySelector('#pro');
const aboutTitle = document.querySelector('.about-title');
let aboutText = document.querySelector('.about-text');
const arrow = document.querySelector('.down-arrow');
const workTitle = document.querySelector('.work-title');
const workText = document.querySelector('.work-text');
const workCards = document.querySelectorAll('.work-card');


/*Scroll event for about section and arrow*/
window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    console.log(scroll);
    if (scroll >= 180) {
        aboutTitle.classList.add('fade-in');
    } if (scroll >= 180 && window.innerWidth <= 899) {
        personal.classList.add('fade-in');
        pro.classList.add('fade-in');
    } if (scroll >= 475) {
        arrow.classList.add('no-opacity');
        aboutText.classList.add('fade-in');
    } if (scroll >= 450 && window.innerWidth >= 900) {
        personal.classList.add("personal-animation");
        pro.classList.add("pro-animation");
    }
});


/*Observer for work section*/
let options = {
    root: null,
    rootMargin: "-200px 0px -200px 0px"
};

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade-in');
        }
    });
}, options);

observer.observe(workTitle);
observer.observe(workText);

workCards.forEach(card => {observer.observe(card)});