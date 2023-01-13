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
