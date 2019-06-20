let arrowElement = document.querySelector('i.arrow-return-up');
let menuWrapperElement = document.querySelector('.menu-wrapper');
let searchBlock = document.querySelector('#search-block');
let searchButton = document.querySelector('.search-button');
let menuButton = document.querySelector('.menu-button');
let menuBlock = document.querySelector('.stacked-menu');
let isSearchOpen = false;
let isMenuOpen = false;
let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let animatedElements = document.querySelectorAll('.animated');

const toggleSearchOpenHander = () => {
  if (isSearchOpen) {
    searchBlock.classList.remove('open');
    searchBlock.classList.add('closed');
    isSearchOpen = false;
  } else {
    searchBlock.classList.add('open');
    searchBlock.classList.remove('closed');
    isSearchOpen = true;
  }
}

const toggleMenuOpenHander = () => {
  if (isMenuOpen) {
    menuBlock.classList.remove('open');
    menuBlock.classList.add('closed');
    isMenuOpen = false;
  } else {
    menuBlock.classList.add('open');
    menuBlock.classList.remove('closed');
    isMenuOpen = true;
  }
}

const scrollHandler = () => {
  const currentScrollPos = window.pageYOffset;
  
  //console.log(currentScrollPos + viewportHeight+ 50);

  if (currentScrollPos > 864) {
    arrowElement.classList.add('shown');
  } else {
    arrowElement.classList.remove('shown');
  }

  if (currentScrollPos > 160){
    menuWrapperElement.classList.add('extended');
  } else {
    menuWrapperElement.classList.remove('extended');
  }

  animatedElements.forEach(animatedElement => {
    if(animatedElement.offsetTop < (currentScrollPos + viewportHeight - 70) ){
      animatedElement.style.opacity = 1;
      animatedElement.classList.add('slideInFromBottom');
    }
  });

}

window.onscroll = scrollHandler;
searchButton.addEventListener('click', toggleSearchOpenHander);
menuButton.addEventListener('click', toggleMenuOpenHander);
