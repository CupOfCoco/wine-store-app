
let navbar = document.querySelector ('#bars');
let menulist = document.querySelector ('.menu');

navbar.onclick = ()=>{
    navbar.classList.toggle('fa-times');
    menulist.classList.toggle('active');
};
window.onscroll = () =>{
    navbar.classList.remove('fa-times');
    menulist.classList.remove('active');
}








let userTexts = document.getElementsByClassName('user-text');
let pics = document.getElementsByClassName('people');


function showReview(){
    for(pic of pics){
        pic.classList.remove('active-pic');
    }
    for(userText of userTexts){
        userText.classList.remove('active-text')
    }
    let i = Array.from(pics).indexOf(event.target);

    pics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
}

const preloader = document.querySelector('[data-preload]');

window.addEventListener('load', function () {
preloader.classList.add('loaded');
document.body.classList.add('loaded');
});


const ProductSlider = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        760: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});




















































