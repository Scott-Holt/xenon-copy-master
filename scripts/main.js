//VARIABLES***********************************
// ********************************************
// ********************************************
const hamIcon = document.querySelector('.ham-icon');
const phoneNav = document.querySelector('.phone-nav');
const closeIcon = document.querySelector('.close-icon');
const section2 = document.querySelector('.section2');
const mailList = document.querySelector('.mail-list');
const nameInput = document.querySelector('.name-input')

//Event lISTENERS******************************
// ********************************************
// ********************************************
// ********************************************


hamIcon.addEventListener('click', () => {
  phoneNav.style.left = '0px';
});

closeIcon.addEventListener('click',()=> {
  phoneNav.style.left = '-250px';
})

//closes ham menu when link or close icon is clicked
phoneNav.addEventListener('click',(e)=>{
  if(e.target.tagName == 'A' || e.target == closeIcon){
    phoneNav.style.left='-250px';
  }
})

window.addEventListener('scroll', scrollFunc);




//Functions************************************
// ********************************************
// ********************************************

const imageSliders = document.querySelectorAll('.slide-image')
const icon = document.querySelector('.icon');

function scrollFunc() {

    const slideInAt = (window.scrollY + window.innerHeight) - icon.height / 2;
    const halfwayThrough = slideInAt > icon.offsetTop;
    if(halfwayThrough){
      icon.classList.add('slide-in');
  }
}
















