// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
})

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


const tl = gsap.timeline();

const st = new SplitText("#text-primary", {type:"chars,words"})
const words = st.words;


tl.from("header", {yPercent:-100});

tl.to(".header__logo-img", {rotationY: 360*4, duration:1.5, ease:"back"});

tl.from(".home-hero",{opacity:0.4, delay:-3});

tl.from(".home-hero__content",{opacity:0, xPercent:-100});

tl.from(".home-hero__socials",{opacity:0});

tl.from(".text-primary",{height:0,fontSize:"0rem", duration:.1, stagger:.75});

tl.staggerFrom(words, .05, {opacity:0, },0.05);

tl.from(".btn--bg", {backgroundColor:"black", color:"white", xPercent:4, duration:.5});;

// tl.to(".heading-sec__main", { color:"#9c579a"});