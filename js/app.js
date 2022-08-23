const contactArea = document.querySelector('.contact');
const contactMeTitle = document.querySelector('.title');
const socialsNav = document.querySelector('#socialsNav');

contactArea.addEventListener('click', e => {
    const contactButton = e.target.closest('button');
    contactButton.classList.toggle('active');
    contactMeTitle.classList.toggle('active');
    socialsNav.classList.toggle('active');
    }
)