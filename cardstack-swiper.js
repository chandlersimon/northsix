/*test*/
let photoSwiper = new Swiper(".swiper.is-photos", {
effect: "cards",
cardsEffect: {
perSlideOffset: 5,
perSlideRotate: 2,
slideShadows: false,},
grabCursor: true,
loop: true,
keyboard: true,
threshold: 5,
navigation: {
	nextEl: '.right-arrow',
	prevEl: '.left-arrow',
},
});
