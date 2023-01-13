<!-- 🧊 OTHER:[PAGE TRANSITION] -->
<script>
//Page transition timing
let transitionTrigger = $(".transition-trigger");
let introDurationMS = 700;
let exitDurationMS = 1000;
let excludedClass = "no-transition";

//Disable scrolling
transitionTrigger.click();
$("body").addClass("no-scroll-transition");
setTimeout(() => {$("body").removeClass("no-scroll-transition");}, introDurationMS);

//On link click start transition
$("a").on("click", function (e) {
  if ($(this).prop("hostname") == window.location.host && $(this).attr("href").indexOf("#") === -1 &&
      !$(this).hasClass(excludedClass) && $(this).attr("target") !== "_blank") {
    e.preventDefault();
		$("body").addClass("no-scroll-transition");
    let transitionURL = $(this).attr("href");
    transitionTrigger.click();
    setTimeout(function () {window.location = transitionURL;}, exitDurationMS);
  }
});

//On back button click prevent loop
window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};

//Hide the transition on window resize
setTimeout(() => {$(window).on("resize", function () {
setTimeout(() => {$(".transition").css("display", "none");}, 50);});
}, introDurationMS);
</script>

<!-- 🧊 [M009],[M0010],[M0012]: LIBRARIES (COUNT UP NUMBERS, SCRUB EACH WORD, SELECTED PROJECTS, CARD HINGE) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>

<!-- 🧊 [M0012] TEXT ANIMATION: SCRUB EACH WORD -->
<script src="https://unpkg.com/split-type"></script>
<script>
window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }

  $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 65%",
        end: "top 10%",
        scrub: true
      }
    });
    tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});
</script>

<!-- 🧊 BOOKMARKING ICON LOGIC -->
<script>
// Bookmark button updates and sets local storage
$('.bookmark.a').click(function() {setTimeout(() => {var a = $('#bookmark-value').text();localStorage.setItem('a', a);}, 1)});
$('.bookmark.b').click(function() {setTimeout(() => {var b = $('#bookmark-value').text();localStorage.setItem('b', b);}, 1)});
$('.bookmark.c').click(function() {setTimeout(() => {var c = $('#bookmark-value').text();localStorage.setItem('c', c);}, 1)});
$('.bookmark.d').click(function() {setTimeout(() => {var d = $('#bookmark-value').text();localStorage.setItem('d', d);}, 1)});
$('.bookmark.e').click(function() {setTimeout(() => {var e = $('#bookmark-value').text();localStorage.setItem('e', e);}, 1)});
$('.bookmark.f').click(function() {setTimeout(() => {var f = $('#bookmark-value').text();localStorage.setItem('f', f);}, 1)});
$('.bookmark.g').click(function() {setTimeout(() => {var g = $('#bookmark-value').text();localStorage.setItem('g', g);}, 1)});
$('.bookmark.h').click(function() {setTimeout(() => {var h = $('#bookmark-value').text();localStorage.setItem('h', h);}, 1)});
$('.bookmark.i').click(function() {setTimeout(() => {var i = $('#bookmark-value').text();localStorage.setItem('i', i);}, 1)});
$('.bookmark.j').click(function() {setTimeout(() => {var j = $('#bookmark-value').text();localStorage.setItem('j', j);}, 1)});
$('.bookmark.k').click(function() {setTimeout(() => {var k = $('#bookmark-value').text();localStorage.setItem('k', k);}, 1)});
$('.bookmark.l').click(function() {setTimeout(() => {var l = $('#bookmark-value').text();localStorage.setItem('l', l);}, 1)});
$('.bookmark.m').click(function() {setTimeout(() => {var m = $('#bookmark-value').text();localStorage.setItem('m', m);}, 1)});
$('.bookmark.n').click(function() {setTimeout(() => {var n = $('#bookmark-value').text();localStorage.setItem('n', n);}, 1)});
$('.bookmark.o').click(function() {setTimeout(() => {var o = $('#bookmark-value').text();localStorage.setItem('o', o);}, 1)});
$('.bookmark.p').click(function() {setTimeout(() => {var p = $('#bookmark-value').text();localStorage.setItem('p', p);}, 1)});
$('.bookmark.q').click(function() {setTimeout(() => {var q = $('#bookmark-value').text();localStorage.setItem('q', q);}, 1)});
$('.bookmark.r').click(function() {setTimeout(() => {var r = $('#bookmark-value').text();localStorage.setItem('r', r);}, 1)});
$('.bookmark.s').click(function() {setTimeout(() => {var s = $('#bookmark-value').text();localStorage.setItem('s', s);}, 1)});

// Bookmark button updates and sets local storage
$('.resetsthis.a').click(function() {setTimeout(() => {var a = $('#bookmark-value').text();localStorage.setItem('a', a);}, 1)});
$('.resetsthis.b').click(function() {setTimeout(() => {var b = $('#bookmark-value').text();localStorage.setItem('b', b);}, 1)});
$('.resetsthis.c').click(function() {setTimeout(() => {var c = $('#bookmark-value').text();localStorage.setItem('c', c);}, 1)});
$('.resetsthis.d').click(function() {setTimeout(() => {var d = $('#bookmark-value').text();localStorage.setItem('d', d);}, 1)});
$('.resetsthis.e').click(function() {setTimeout(() => {var e = $('#bookmark-value').text();localStorage.setItem('e', e);}, 1)});
$('.resetsthis.f').click(function() {setTimeout(() => {var f = $('#bookmark-value').text();localStorage.setItem('f', f);}, 1)});
$('.resetsthis.g').click(function() {setTimeout(() => {var g = $('#bookmark-value').text();localStorage.setItem('g', g);}, 1)});
$('.resetsthis.h').click(function() {setTimeout(() => {var h = $('#bookmark-value').text();localStorage.setItem('h', h);}, 1)});
$('.resetsthis.i').click(function() {setTimeout(() => {var i = $('#bookmark-value').text();localStorage.setItem('i', i);}, 1)});
$('.resetsthis.j').click(function() {setTimeout(() => {var j = $('#bookmark-value').text();localStorage.setItem('j', j);}, 1)});
$('.resetsthis.k').click(function() {setTimeout(() => {var k = $('#bookmark-value').text();localStorage.setItem('k', k);}, 1)});
$('.resetsthis.l').click(function() {setTimeout(() => {var l = $('#bookmark-value').text();localStorage.setItem('l', l);}, 1)});
$('.resetsthis.m').click(function() {setTimeout(() => {var m = $('#bookmark-value').text();localStorage.setItem('m', m);}, 1)});
$('.resetsthis.n').click(function() {setTimeout(() => {var n = $('#bookmark-value').text();localStorage.setItem('n', n);}, 1)});
$('.resetsthis.o').click(function() {setTimeout(() => {var o = $('#bookmark-value').text();localStorage.setItem('o', o);}, 1)});
$('.resetsthis.p').click(function() {setTimeout(() => {var p = $('#bookmark-value').text();localStorage.setItem('p', p);}, 1)});
$('.resetsthis.q').click(function() {setTimeout(() => {var q = $('#bookmark-value').text();localStorage.setItem('q', q);}, 1)});
$('.resetsthis.r').click(function() {setTimeout(() => {var r = $('#bookmark-value').text();localStorage.setItem('r', r);}, 1)});
$('.resetsthis.s').click(function() {setTimeout(() => {var s = $('#bookmark-value').text();localStorage.setItem('s', s);}, 1)});


// Reset button updates and sets all local storage to empty
$('.bookmark.reset').click(function() {
setTimeout(() => {
var resets = $('#bookmark-value').text();
localStorage.setItem('a', resets);
$(".resetsthis.a").removeClass("visible");
localStorage.setItem('b', resets);
$(".resetsthis.b").removeClass("visible");
localStorage.setItem('c', resets);
$(".resetsthis.c").removeClass("visible");
localStorage.setItem('d', resets);
$(".resetsthis.d").removeClass("visible");
localStorage.setItem('e', resets);
$(".resetsthis.e").removeClass("visible");
localStorage.setItem('f', resets);
$(".resetsthis.f").removeClass("visible");
localStorage.setItem('g', resets);
$(".resetsthis.g").removeClass("visible");
localStorage.setItem('h', resets);
$(".resetsthis.h").removeClass("visible");
localStorage.setItem('i', resets);
$(".resetsthis.i").removeClass("visible");
localStorage.setItem('j', resets);
$(".resetsthis.j").removeClass("visible");
localStorage.setItem('k', resets);
$(".resetsthis.k").removeClass("visible");
localStorage.setItem('l', resets);
$(".resetsthis.l").removeClass("visible");
localStorage.setItem('m', resets);
$(".resetsthis.m").removeClass("visible");
localStorage.setItem('n', resets);
$(".resetsthis.n").removeClass("visible");
localStorage.setItem('o', resets);
$(".resetsthis.o").removeClass("visible");
localStorage.setItem('p', resets);
$(".resetsthis.p").removeClass("visible");
localStorage.setItem('q', resets);
$(".resetsthis.q").removeClass("visible");
localStorage.setItem('r', resets);
$(".resetsthis.r").removeClass("visible");
localStorage.setItem('s', resets);
$(".resetsthis.s").removeClass("visible");
}, 1)
});  

// Logic to change the bookmark icon from filled in or outlined 
if (localStorage.getItem('a')==='?a'){$(".resetsthis.a").addClass("visible");}else{$(".resetsthis.a").removeClass("visibile");}
if (localStorage.getItem('b')==='?b'){$(".resetsthis.b").addClass("visible");}else{$(".resetsthis.b").removeClass("visibile");}
if (localStorage.getItem('c')==='?c'){$(".resetsthis.c").addClass("visible");}else{$(".resetsthis.c").removeClass("visibile");}
if (localStorage.getItem('d')==='?d'){$(".resetsthis.d").addClass("visible");}else{$(".resetsthis.d").removeClass("visibile");}
if (localStorage.getItem('e')==='?e'){$(".resetsthis.e").addClass("visible");}else{$(".resetsthis.e").removeClass("visibile");}
if (localStorage.getItem('f')==='?f'){$(".resetsthis.f").addClass("visible");}else{$(".resetsthis.f").removeClass("visibile");}
if (localStorage.getItem('g')==='?g'){$(".resetsthis.g").addClass("visible");}else{$(".resetsthis.g").removeClass("visibile");}
if (localStorage.getItem('h')==='?h'){$(".resetsthis.h").addClass("visible");}else{$(".resetsthis.h").removeClass("visibile");}
if (localStorage.getItem('i')==='?i'){$(".resetsthis.i").addClass("visible");}else{$(".resetsthis.i").removeClass("visibile");}
if (localStorage.getItem('j')==='?j'){$(".resetsthis.j").addClass("visible");}else{$(".resetsthis.j").removeClass("visibile");}
if (localStorage.getItem('k')==='?k'){$(".resetsthis.k").addClass("visible");}else{$(".resetsthis.k").removeClass("visibile");}
if (localStorage.getItem('l')==='?l'){$(".resetsthis.l").addClass("visible");}else{$(".resetsthis.l").removeClass("visibile");}
if (localStorage.getItem('m')==='?m'){$(".resetsthis.m").addClass("visible");}else{$(".resetsthis.m").removeClass("visibile");}
if (localStorage.getItem('n')==='?n'){$(".resetsthis.n").addClass("visible");}else{$(".resetsthis.n").removeClass("visibile");}
if (localStorage.getItem('o')==='?o'){$(".resetsthis.o").addClass("visible");}else{$(".resetsthis.o").removeClass("visibile");}
if (localStorage.getItem('p')==='?p'){$(".resetsthis.p").addClass("visible");}else{$(".resetsthis.p").removeClass("visibile");}
if (localStorage.getItem('q')==='?q'){$(".resetsthis.q").addClass("visible");}else{$(".resetsthis.q").removeClass("visibile");}
if (localStorage.getItem('r')==='?r'){$(".resetsthis.r").addClass("visible");}else{$(".resetsthis.r").removeClass("visibile");}
if (localStorage.getItem('s')==='?s'){$(".resetsthis.s").addClass("visible");}else{$(".resetsthis.s").removeClass("visibile");}

  
// Logic to change the bookmark icon from filled in or outlined 
$('.bookmark.a').click(function() {setTimeout(() => {if (localStorage.getItem('a') === '?a'){
  $(".resetsthis.a").addClass("visible");}else {$(".resetsthis.a.visibile").removeClass("visible");}},1)});
$('.bookmark.b').click(function() {setTimeout(() => {if (localStorage.getItem('b') === '?b'){
  $(".resetsthis.b").addClass("visible");}else {$(".resetsthis.b.visibile").removeClass("visible");}},1)});
$('.bookmark.c').click(function() {setTimeout(() => {if (localStorage.getItem('c') === '?c'){
  $(".resetsthis.c").addClass("visible");}else {$(".resetsthis.c.visibile").removeClass("visible");}},1)});
$('.bookmark.d').click(function() {setTimeout(() => {if (localStorage.getItem('d') === '?d'){
  $(".resetsthis.d").addClass("visible");}else {$(".resetsthis.d.visibile").removeClass("visible");}},1)});  
$('.bookmark.e').click(function() {setTimeout(() => {if (localStorage.getItem('e') === '?e'){
  $(".resetsthis.e").addClass("visible");}else {$(".resetsthis.e.visibile").removeClass("visible");}},1)});  
$('.bookmark.f').click(function() {setTimeout(() => {if (localStorage.getItem('f') === '?f'){
  $(".resetsthis.f").addClass("visible");}else {$(".resetsthis.f.visibile").removeClass("visible");}},1)});  
$('.bookmark.g').click(function() {setTimeout(() => {if (localStorage.getItem('g') === '?g'){
  $(".resetsthis.g").addClass("visible");}else {$(".resetsthis.g.visibile").removeClass("visible");}},1)});  
$('.bookmark.h').click(function() {setTimeout(() => {if (localStorage.getItem('h') === '?h'){
  $(".resetsthis.h").addClass("visible");}else {$(".resetsthis.h.visibile").removeClass("visible");}},1)});  
$('.bookmark.i').click(function() {setTimeout(() => {if (localStorage.getItem('i') === '?i'){
  $(".resetsthis.i").addClass("visible");}else {$(".resetsthis.i.visibile").removeClass("visible");}},1)});  
$('.bookmark.j').click(function() {setTimeout(() => {if (localStorage.getItem('j') === '?j'){
  $(".resetsthis.j").addClass("visible");}else {$(".resetsthis.j.visibile").removeClass("visible");}},1)});  
$('.bookmark.k').click(function() {setTimeout(() => {if (localStorage.getItem('k') === '?k'){
  $(".resetsthis.k").addClass("visible");}else {$(".resetsthis.k.visibile").removeClass("visible");}},1)});  
$('.bookmark.l').click(function() {setTimeout(() => {if (localStorage.getItem('l') === '?l'){
  $(".resetsthis.l").addClass("visible");}else {$(".resetsthis.l.visibile").removeClass("visible");}},1)});  
$('.bookmark.m').click(function() {setTimeout(() => {if (localStorage.getItem('m') === '?m'){
  $(".resetsthis.m").addClass("visible");}else {$(".resetsthis.m.visibile").removeClass("visible");}},1)});  
$('.bookmark.n').click(function() {setTimeout(() => {if (localStorage.getItem('n') === '?n'){
  $(".resetsthis.n").addClass("visible");}else {$(".resetsthis.n.visibile").removeClass("visible");}},1)});  
$('.bookmark.o').click(function() {setTimeout(() => {if (localStorage.getItem('o') === '?o'){
  $(".resetsthis.o").addClass("visible");}else {$(".resetsthis.o.visibile").removeClass("visible");}},1)});  
$('.bookmark.p').click(function() {setTimeout(() => {if (localStorage.getItem('p') === '?p'){
  $(".resetsthis.p").addClass("visible");}else {$(".resetsthis.p.visibile").removeClass("visible");}},1)});  
$('.bookmark.q').click(function() {setTimeout(() => {if (localStorage.getItem('q') === '?q'){
  $(".resetsthis.q").addClass("visible");}else {$(".resetsthis.q.visibile").removeClass("visible");}},1)});  
$('.bookmark.r').click(function() {setTimeout(() => {if (localStorage.getItem('r') === '?r'){
  $(".resetsthis.r").addClass("visible");}else {$(".resetsthis.r.visibile").removeClass("visible");}},1)});  
$('.bookmark.s').click(function() {setTimeout(() => {if (localStorage.getItem('s') === '?s'){
  $(".resetsthis.s").addClass("visible");}else {$(".resetsthis.s.visibile").removeClass("visible");}},1)});  

// Setting the values for local storage keys 
$('.bookmark.a').click(function() {
  if (localStorage.getItem('a') === '?a'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.a").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?a";
}});
$('.bookmark.b').click(function() {
  if (localStorage.getItem('b') === '?b'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.b").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?b";
}});
$('.bookmark.c').click(function() {
  if (localStorage.getItem('c') === '?c'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.c").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?c";
}});
$('.bookmark.d').click(function() {
  if (localStorage.getItem('d') === '?d'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.d").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?d";
}});
$('.bookmark.e').click(function() {
  if (localStorage.getItem('e') === '?e'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.e").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?e";
}});
$('.bookmark.f').click(function() {
  if (localStorage.getItem('f') === '?f'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.f").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?f";
}});
$('.bookmark.g').click(function() {
  if (localStorage.getItem('g') === '?g'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.g").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?g";
}});
$('.bookmark.h').click(function() {
  if (localStorage.getItem('h') === '?h'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.h").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?h";
}});
$('.bookmark.i').click(function() {
  if (localStorage.getItem('i') === '?i'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.i").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?i";
}});
$('.bookmark.j').click(function() {
  if (localStorage.getItem('j') === '?j'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.j").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?j";
}});
$('.bookmark.k').click(function() {
  if (localStorage.getItem('k') === '?k'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.k").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?k";
}});
$('.bookmark.l').click(function() {
  if (localStorage.getItem('l') === '?l'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.l").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?l";
}});
$('.bookmark.m').click(function() {
  if (localStorage.getItem('m') === '?m'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.m").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?m";
}});
$('.bookmark.n').click(function() {
  if (localStorage.getItem('n') === '?n'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.n").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?n";
}});
$('.bookmark.o').click(function() {
  if (localStorage.getItem('o') === '?o'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.o").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?o";
}});
$('.bookmark.p').click(function() {
  if (localStorage.getItem('p') === '?p'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.p").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?p";
}});
$('.bookmark.q').click(function() {
  if (localStorage.getItem('q') === '?q'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.q").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?q";
}});
$('.bookmark.r').click(function() {
  if (localStorage.getItem('r') === '?r'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.r").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?r";
}});
$('.bookmark.s').click(function() {
  if (localStorage.getItem('s') === '?s'){
    document.getElementById("bookmark-value").innerHTML = "?0";
    $(".resetsthis.s").removeClass("visible");}
  else {
    document.getElementById("bookmark-value").innerHTML = "?s";
}});
$('.reset').click(function() {
  document.getElementById("bookmark-value").innerHTML = "?0";
});
</script>

<!-- 🧊 BOOKMARKING UPDATING COUNT IN MENUBAR -->
<script>
function changecount() {
let counter = localStorage.getItem('a')+localStorage.getItem('b')+localStorage.getItem('c')+localStorage.getItem('d')+localStorage.getItem('e')+localStorage.getItem('f')+localStorage.getItem('g')+localStorage.getItem('h')+localStorage.getItem('1')+localStorage.getItem('j')+localStorage.getItem('k')+localStorage.getItem('l')+localStorage.getItem('m')+localStorage.getItem('n')+localStorage.getItem('o')+localStorage.getItem('p')+localStorage.getItem('q')+localStorage.getItem('r')+localStorage.getItem('s');
document.getElementById("count").innerHTML = counter;
let numbersaved = 0;

if (document.getElementById('count').textContent.toLowerCase().includes('?a'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?b'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?c'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?d'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?e'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?f'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?g'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?h'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?i'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?j'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?k'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?l'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?m'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?n'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?o'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?p'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?q'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?r'.toLowerCase())){numbersaved++;}
if (document.getElementById('count').textContent.toLowerCase().includes('?s'.toLowerCase())){numbersaved++;}
setTimeout(function (){
document.getElementById("indicator").innerHTML = numbersaved;
}, 1);
}
changecount();

$('.bookmark').click(function() {
setTimeout(function (){
changecount();
}, 1);
});
</script>

<!-- 🧊 [M0014]: CARD STACK SWIPER -->
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
<script>
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
</script>

<!-- 🧊 [M0023]: AUTO CLOSE ACCORDION (ONE OPEN AT A TIME) -->
<script>
$('[data-click="accordion"]').click(function(){
  if(!$(this).is('.open')){
    $('[data-click="accordion"].open').each((i, item)=>{
      item.click();
    });
    $(this).addClass('open');    
  }
  else{
    $(this).removeClass('open');
  }
});
</script>

<!-- 🧊 [M009,M0010]: COUNT UP NUMBERS WHEN SCROLLED INTO VIEW -->
<script src="https://cdn.jsdelivr.net/npm/countup@1.8.2/countUp.js"></script>
<script>
$(".counterup").each(function (index) {
  // assign ID
  let thisId = "countup" + index;
  $(this).attr("id", thisId);
  // create variables
  let startNumber = +$(this).text();
  let endNumber = +$(this).attr("final-number");
  let decimals = 0;
  let duration = $(this).attr("count-duration");
  // animate number
  let myCounter = new CountUp(thisId, startNumber, endNumber, decimals, duration);
  // Scroll out of view trigger
  ScrollTrigger.create({
    trigger: $(this),
    start: "top bottom",
    end: "bottom top",
    onLeaveBack: () => {
      myCounter.reset();
    }
  });
  // Scroll into view trigger
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 80%",
    end: "bottom top",
    onEnter: () => {
      myCounter.start();
    }
  });
});
</script>

<!-- 🧊 [M0023]: DISABLE SCROLL ONCE OPENING CONTRIBUTOR PROFILE -->
<script>
$(".click-link").click(function(){
	$('.body').addClass("fixed-position");
  $('.pointer-target').css('pointer-events','');
});

$("#close").click(function(){
	$('.body').removeClass("fixed-position");
  $('.pointer-target').css('pointer-events','none');
});

$("#close2").click(function(){
	$('.body').removeClass("fixed-position");
  $('.pointer-target').css('pointer-events','none');
});
</script>

<!-- 🧊 [M008]: LOGIC FOR ANALOG CLOCKS -->
<script>
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

$(document).ready(function() {
  setclocks(true);
});

// Update clock(s) (only) every second to spare system resources

var _cmpdate = new Date();

function setclocks(init) {

  var dt = new Date();

  msec = dt.getMilliseconds();
  diffmsec = msec % 1000;

  if (!init)
    if (dt.getSeconds() == _cmpdate.getSeconds()) {
      setTimeout("setclocks(false);", 1001 - diffmsec);
      return;
    }
  _cmpdate = dt;

  $(".clockcontainer").each(function() {
    if (init) {
      if (!(clocksize = $(this).attr("data-size"))) clocksize = "20vh";
      $(this)
        .css("width", clocksize)
        .css("height", clocksize);
      $(this).append(
        '<div class="clockcase"><div class="citylabel"></div><div class="datelabel"></div><div class="hourhand"></div><div class="secondhand"></div><div class="minutehand"></div><div class="centerwasher"></div></div>'
      );

      for (var i = 0; i < 30; i++) {
        if (i % 5 == 0)
          $(".clockcase", this).append(
            '<div class="minutediv" style="transform: translate(-50%, 50%) rotate(' +
              6 * i +
              "deg)" +
              '"><div class="leftmark"></div><div class="rightmark"></div></div>'
          );
        else
          $(".clockcase", this).append(
            '<div class="minutediv" style="transform: translate(-50%, 50%) rotate(' +
              6 * i +
              "deg)" +
              '"><div class="minutedotleft"></div><div class="minutedotright"></div></div>'
          );
      }
    }

    if (!(timezone = $(this).attr("data-timezone"))) {
      // Get current timezone
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      $(this).attr("data-timezone", timezone);
    }
    $(".citylabel", this).html($(this).attr("data-city"));
    var idt = new Date().toLocaleString("en-US", { timeZone: timezone });
    dt = new Date(idt);

    if (dt.getSeconds() == 0 || init) {
      datestr =
        days[dt.getDay()] +
        ", " +
        dt.getDate() +
        " " +
        months[dt.getMonth()] +
        " " +
        dt.getFullYear() +
        ", " +
        ("0" + dt.getHours()).slice(-2) +
        ":" +
        ("0" + dt.getMinutes()).slice(-2);
      $(this).attr("title", $(".citylabel", this).html() + " - " + datestr);
    }
    hr = dt.getHours();
    min = dt.getMinutes();
    sec = dt.getSeconds();

    var hrDeg = -90 + hr * 30 + min * 30 / 60,
      minDeg = -90 + min * 6 + sec * 6 / 60,
      secDeg = -90 + sec * 6;

    $(".hourhand", this).css("transform", "rotate(" + hrDeg + "deg)");
    $(".minutehand", this).css("transform", "rotate(" + minDeg + "deg)");
    $(".secondhand", this).css("transform", "rotate(" + secDeg + "deg)");
    if (init) $(this).animate({ opacity: 1.0 }, 500);
  });
  setTimeout("setclocks(false);", 1001 - diffmsec);
}
</script>

<!-- 🧊 [M008]: CURRENT WEATHER IN CITY -->
<script>
// Using open weather api get current weather of a city
let cityname = document.querySelector("#city").innerText;
let weather = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data) {
	const {name} = data;
	const {main} = data.weather[0];
  const {icon} = data.weather[0];
	const {temp} = data.main;
	document.querySelector("#city").innerText = name;
	document.querySelector("#description").innerText = main;
  document.querySelector(".icon-text").innerText = icon;
	document.querySelector(".temp").innerText = Math.round(temp) + "°F";},
};
weather.fetchWeather(cityname);
</script>
<script>
// Set icon image based on text code provided by api call
const container = document.getElementById('icon-text');

setTimeout(function(){
if (container.textContent.includes('01')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container.textContent.includes('02')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container.textContent.includes('03')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container.textContent.includes('04')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container.textContent.includes('09')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container.textContent.includes('10')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container.textContent.includes('11')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container.textContent.includes('13')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container.textContent.includes('50')) {
  $('.weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);
</script>

<!-- 🧊 [M0016]: HORIZONTAL SCROLLING SECTION CALCUALTE STICKY HEIGHT BASED ON CONTENT WIDTH -->
<script>
//  Set sticky section heights based on inner content width (Makes scroll timing feel more natural)
function setTrackHeights() {
  $(".section-height").each(function (index) {
    let trackWidth = $(this).find(".track").outerWidth();
    let trackWidth2 = trackWidth*1.5;
    $(this).height(trackWidth2);
  });
}
setTrackHeights();

window.addEventListener("resize", function () {
  setTrackHeights();
});
</script>

<!-- 🧊 [M005]: LOGIC FOR CALCULATING WHEN TO CHANGE SECTION PAGNATION COLORS -->
<script>
function section1calc() {
  var section1 = Math.abs($('#section1-calc').offset().top - $('#section2-calc').offset().top); 
  $("#section1").height(section1);
  }
  section1calc();
  
  function section2calc() {
  var section2 = Math.abs($('#section2-calc').offset().top - $('#section3-calc').offset().top); 
  $("#section2").height(section2);
  }
  section2calc();
  
  function section3calc() {
  var section3 = Math.abs($('#section3-calc').offset().top - $('#section4-calc').offset().top); 
  $("#section3").height(section3);
  }
  section3calc();
  
  function section4calc() {
  var section4 = Math.abs($('#section4-calc').offset().top - $('#section5-calc').offset().top); 
  $("#section4").height(section4);
  }
  section4calc();
  
  function section5calc() {
  var section5 = Math.abs($('#section5-calc').offset().top - $('#section6-calc').offset().top); 
  $("#section5").height(section5);
  }
  section5calc();
  
  function section6calc() {
  var section6 = Math.abs($('#section6-calc').offset().top - $('#section7-calc').offset().top); 
  $("#section6").height(section6);
  }
  section6calc();
  
  function section7calc() {
  var section7 = Math.abs($('#section7-calc').offset().top - $('#section8-calc').offset().top); 
  $("#section7").height(section7);
  }
  section7calc();
  
  function section8calc() {
  var section8 = Math.abs($('#section8-calc').offset().top - $('#section9-calc').offset().top); 
  $("#section8").height(section8);
  }
  section8calc();
  
window.addEventListener("resize", function () {
  section1calc();
  section2calc();
  section3calc();
  section4calc();
  section5calc();
  section6calc();
  section7calc();
  section8calc();
});
</script>
