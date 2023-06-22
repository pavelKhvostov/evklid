const swiper = new Swiper('.js-hero-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.js-hero-paginations',
    clickable: true,
  },
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('nav__list-burger');
let btnClose = document.querySelector('.burger__close');

burger.addEventListener('click', () => {
  burger.classList.add('open');
  burger.classList.add('visibl-hiden');
  burger.closest('.header__container').classList.add('active');
  document.body.classList.add('stop-scroll')
})

btnClose.addEventListener('click', () => {
  burger.classList.remove('open');
  burger.classList.remove('visibl-hiden');
  burger.closest('.header__container').classList.remove('active');
  document.body.classList.remove('stop-scroll')
})





let tabsBtn = document.querySelectorAll('.work__link');
let tabsItems = document.querySelectorAll('.work__wrap-tabs');


tabsBtn.forEach(elem => {
  elem.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(btn => {
      btn.classList.remove('work__link-active');
    })
    e.currentTarget.classList.add('work__link-active');

    tabsItems.forEach(tbi => {
      tbi.classList.remove('work__tabs-active');
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('work__tabs-active');
  })
})





new Accordion('.accordion-container');




let srhBtn = document.querySelector('.header__button');
let srhBtnActv = document.querySelector('.header__serch-active');
let closeBtn = document.querySelector('.serch-btn-close');

srhBtn.addEventListener('click', () => {
  srhBtnActv.classList.add('open');
  srhBtn.classList.add('visibl-hiden');
})

closeBtn.addEventListener('click', () => {
  srhBtnActv.classList.remove('open');
  srhBtn.classList.remove('visibl-hiden');
})

