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
