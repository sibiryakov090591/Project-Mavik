///////////////////////////////////////
/////////// GSAP Animations ///////////
///////////////////////////////////////

// Header
gsap.from(".promo__mavik", {duration: 5.5, delay: 0.8, ease: "elastic.out(1, 0.3)", y: -700 });
gsap.from(".promo__title", {opacity: 0, y: -20, ease: "power2.out", duration: 1, delay: 4});
gsap.from(".promo__text", {opacity: 0, y: 20, ease: "power2.out", duration: 1, delay: 4.4});
gsap.from(".promo__social-list", {opacity: 0, y: 20, ease: "power2.out", duration: 1, delay: 4.6});
gsap.from(".logo__img", {opacity: 0, ease: "power2.out", duration: 1, delay: 5});
gsap.from(".mobile-menu", {opacity: 0, ease: "power2.out", duration: 1, delay: 5.4});
gsap.from(".menu__item", {opacity: 0, y: -20, ease: "power2.out", duration: 0.4, delay: 5.2, stagger: 0.2,});
gsap.from(".header__info", {opacity: 0, x: 100, ease: "power2.out", duration: 1, delay: 6});
gsap.from(".scroll__btn", {opacity: 0, ease: "power2.out", duration: 1, delay: 6.2});
gsap.to('.scroll__btn', {y:-5, yoyo: true, repeat: -1});

// Question section
gsap.to('.questions__mavik-img', {y:-15, duration: 3, ease: "slow(0.7, 0.7, false)", yoyo: true, repeat: -1});



///////////////////////////////////////
/////////////// jQuery ////////////////
///////////////////////////////////////

$(document).ready(function () {

    // Slick-slider 
    $(".about__slider").slick({
        prevArrow:
            '<button class="slider-btn slider-btn__prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17""/></button>',
        nextArrow:
            '<button class="slider-btn slider-btn__next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1""/></button>',
            infinite: false,
    });

    // Mobile menu
    $('.mobile-menu').on('click', function(){
        $('.mobile-menu').toggleClass('active');
        $('.menu').toggleClass('active');
    });

    $('.menu__link').on('click', function(){
        $('.mobile-menu').removeClass('active');
        $('.menu').removeClass('active');
    });
});



///////////////////////////////////////
////////////// PHPMailer //////////////
///////////////////////////////////////

// Отправка данных на сервер
function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
let req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
	json = JSON.parse(this.response); // Internet Explorer 11
    	console.log(json);
        
    	if (json.result == "success") {
    		// Если сообщение отправлено
    		alert("Сообщение отправлено");
    	} else {
    		// Если произошла ошибка
    		alert("Ошибка. Сообщение не отправлено");
    	}
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}


///////////////////////////////////////
////////////// Accordion //////////////
///////////////////////////////////////

let acc = document.getElementsByClassName("questions__item-title__btn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("questions__item-active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}