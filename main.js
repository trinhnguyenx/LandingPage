const navItems = document.querySelectorAll('.items-link');
const sections = document.querySelectorAll('section');
const html = document.documentElement;
const height = 100;

const header = document.querySelector('.navbar-container');
const home = document.querySelector('.section-1-container');

window.addEventListener('scroll', function(){
  sections.forEach((section) => {
    const top = section.offsetTop - 100;

    navItems.forEach((navItem) => {
      const hrefNav = navItem.href.match(/#[a-zA-Z]+/)[0];
      const idSection = '#' + section.id;


      if (html.scrollTop >= top && top + height >= html.scrollTop) {
        if(hrefNav === idSection){
          let idActive = document.querySelector('.items-link.active');
          if(idActive != null) idActive.classList.remove('active');
          navItem.classList.add('active')
        } 
      } else {
        hrefNav === idSection &&
          navItem.parentElement.classList.remove('active');
      }
    });
  })

  if (html.scrollTop >= home.clientHeight/2){
    header.style.position = "fixed";
  }else {
    header.style.position = "relative";
  }

},{ passive: true }
);


