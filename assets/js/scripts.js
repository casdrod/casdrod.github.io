const arrow = document.querySelector('.down-arrow');
const aboutTitle = document.querySelector('.about-title');
let aboutText = document.querySelector('.about-text');
const personal = document.querySelector('#personal');
const pro = document.querySelector('#pro');

/*Scroll event for about section and arrow*/
window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    if (scroll >= 180) {
        aboutTitle.classList.add('fade-in');
        aboutText.classList.add('fade-in');
    } if (scroll >= 280 && window.innerWidth <= 899) {
        personal.classList.add('fade-in');
        pro.classList.add('fade-in');
    } if (scroll >= 475) {
        arrow.classList.add('no-opacity');
    } if (scroll >= 400 && window.innerWidth >= 900) {
        personal.classList.add("personal-animation");
        pro.classList.add("pro-animation");
    }
});

/*Work section function*/
(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    elements.forEach(element => {
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in');
            element.classList.remove('hidden');
        }
    });
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();