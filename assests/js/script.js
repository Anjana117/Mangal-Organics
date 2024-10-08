// Header Section


const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.classList.add('header-scroll')
  }
  else if (window.scrollY < 100) {
    header.classList.remove('header-scroll')
  }
});





const accordion = document.getElementsByClassName('contentBx');
for(i=0; i<accordion.length;i++){
  accordion[i].addEventListener('click',function()
  {
    this.classList.toggle('active')
  })
}
