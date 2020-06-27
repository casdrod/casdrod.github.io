const personal = document.querySelector('#personal');
const pro = document.querySelector('#pro');
const aboutTitle = document.querySelector('.about-title');
const aboutText = document.querySelector('.about-text');
const arrow = document.querySelector('.down-arrow');
const hiddenElements = document.querySelectorAll('.hidden');
const workCards = document.querySelectorAll('.work-card');
const workTitle = document.querySelector('.work-title');
const workText = document.querySelector('.work-text');

window.addEventListener('load', () => {
    hiddenElements.forEach(hiddenEl => {
        hiddenEl.classList.add('no-opacity');
    });
});


window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
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
    } if (scroll >= 550) {
        workTitle.classList.add('fade-in');
        workText.classList.add('fade-in');
    }
});


/*Observer for Work Cards*/
let options = {
    root: null,
    threshold: 0.5
};

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade-in');
        }
    });
}, options);

workCards.forEach(card => {observer.observe(card)});

/***************************************************************************/
/*** ADD OBSERVER FOR ABOUT SECTION, ADJUST WORK TITLE AND TEXT OBSERVER ***/
/***************************************************************************/