const navItems = document.querySelectorAll('.items-link');
const sections = document.querySelectorAll('section');
const html = document.documentElement;
const height = 100;

const header = document.querySelector('.navbar-container');
const home = document.querySelector('#home');

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


// section-7
// const cards = document.querySelectorAll('.people');
// const cardTexts = document.querySelectorAll('.say-text');

// cards.forEach((card, index) => {

//   const cardText = cardTexts[index];

//     card.onclick = function () {
//       cardText.classList.toggle('hide');
//     }
// });

// change img section-5
const strengths = document.querySelectorAll('.button-left');
const strengthImgs = document.querySelectorAll('.img-right');


strengths.forEach((strength, index) => {
  strength.addEventListener('click', () => {
    strengthImgs[index].classList.remove('hide')
    strength.classList.add('bg-white')
    strengths.forEach((item, indexItem) => {
      if(indexItem !== index) {
        strengthImgs[indexItem].classList.add('hide')
        item.classList.remove('bg-white')
      }
    })
  }) 
})
const cards = document.querySelectorAll('.people');
const cardTexts = document.querySelectorAll('.say-text');

if(window.innerWidth > 768 && window.innerWidth < 1024) {
  cardTexts[0].style.height = '200px'
}
else cardTexts[0].style.height = '100px'

cards.forEach((card, index) => {

  const cardText = cardTexts[index];

    card.onclick = function () {
      if (cardText.style.height){
        cardText.style.height = null;
      } else {
        if(window.innerWidth > 768 && window.innerWidth < 1024) {
          cardText.style.height = '200px';
        }
        else cardText.style.height = '100px';
      }   
      cardTexts.forEach((item, indexItem) => {
          if(indexItem !== index) {
            item.style.height = null;
          }
      })
    }
});


// toggle video 
// const btn = document.querySelector('.play-btn');
// const modalVideo = document.querySelector('.video__modal');
// const close = document.querySelector('.close');
// const body = document.querySelector('body');

// btn.addEventListener('click', () => {
//   modalVideo.classList.add('show');
//   body.style.overflowY = 'hidden';
// });

// modalVideo.addEventListener('click', () => {
//   modalVideo.classList.remove('show');
//   body.style.overflowY = 'visible ';
// });

// close.addEventListener('click', () => {
//   modalVideo.classList.remove('show');
//   body.style.overflowY = 'visible ';
// });


// preview img section 8
const previewImg = document.querySelector('.preview')
const galleryImg = document.querySelector('.preview-gallery-img')
const gallerys = document.querySelector('.preview-gallery')
const previewBtn = document.querySelector('.preview-btn')
const modalImg = document.querySelector('.preview-img img')
const modalcounter = document.querySelector('.preview-counter')
const prevbtn = document.querySelector('.prev')
const nextbtn = document.querySelector('.next')
let currentImg = 0;

gallerys.forEach((gallery, index) => {
  gallery.addEventListener('click', (event) => {
      event.preventDefault();
      modalImg.src = galleryImg[index].src;
      modalcounter.innerText = index+1;
      currentImg = index;
      previewImg.classList.add('apperance-flex')
      body.style.overflowY = 'hidden';
    })
})

modalClosebtn.addEventListener('click', () => {
    previewImg.classList.add('hide')
    previewImg.classList.remove('apperance-flex')
    body.style.overflowY = 'visible ';
})

previewImg.addEventListener('click', (e) => {
  e.stopPropagation()
  previewImg.classList.add('hide')
  previewImg.classList.remove('apperance-flex');
  body.style.overflowY = 'visible';
})


prevbtn.addEventListener('click', (e) => {
  e.stopPropagation()
    if(currentImg === 0) currentImg = galleryImg.length
    modalImg.src = galleryImg[currentImg-1].src;
    modalcounter.innerText = currentImg;
    currentImg--;
})


nextbtn.addEventListener('click', (e) => {
  e.stopPropagation()
  if(currentImg === galleryImg.length-1) currentImg = -1
  modalImg.src = galleryImg[currentImg+1].src;
  modalcounter.innerText = currentImg+2;
  currentImg++;
})

