const contactArea = document.querySelector('.contact');
const contactMeTitle = document.querySelector('.title');
const socialsNav = document.querySelector('#socialsNav');
const navBtn = document.getElementById('mainNav');
const nav = document.getElementById('navbarNavAltMarkup');

contactArea.addEventListener('click', e => {
    const contactButton = e.target.closest('button');
    contactButton.classList.toggle('active');
    contactMeTitle.classList.toggle('active');
    socialsNav.classList.toggle('active');
    }
);

navBtn.addEventListener('click', () => {
  nav.classList.contains('show') ? nav.classList.remove('show') : nav.classList.add('show');
});
