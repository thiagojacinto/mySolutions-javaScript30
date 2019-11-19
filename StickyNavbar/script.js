const nav = document.querySelector('#main');
const topOfNavbar = nav.offsetTop;

function fixNav() {
  // console.log(topOfNavbar, window.scrollY); //Verify
  if (window.scrollY >= topOfNavbar) {
    // Calculate the height of navbar when fixed
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document
    // add a class to body
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }

}

window.addEventListener('scroll', fixNav);