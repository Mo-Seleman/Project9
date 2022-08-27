const contactArea = document.querySelector('.contact');
const contactMeTitle = document.querySelector('.title');
const socialsNav = document.querySelector('#socialsNav');
const mybutton = document.getElementById("myBtn");

contactArea.addEventListener('click', e => {
    const contactButton = e.target.closest('button');
    contactButton.classList.toggle('active');
    contactMeTitle.classList.toggle('active');
    socialsNav.classList.toggle('active');
    }
);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

const navBtn = document.getElementById('mainNav');
const nav = document.getElementById('navbarNavAltMarkup');
navBtn.addEventListener('click', () => {
  nav.classList.contains('show') ? nav.classList.remove('show') : nav.classList.add('show');
});
