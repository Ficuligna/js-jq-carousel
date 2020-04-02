$(document).ready(function(){


  // setto azione su next
  $(".next").click(nexT);

  // setto azione su prev
  $(".prev").click(preV);

  // setto azione su dots
  $(".navigation_dots i").click(dotsNav)





  // navigazione lineare
  function nexT(){
    var active = $(".active");
    if (active.hasClass("last")) {
      active.removeClass("active");
      $(".first").addClass("active");

    }
    active.removeClass("active");
    active.next().addClass("active");
  };

  // navigazione inversa lineare
  function preV(){
    var active = $(".active");
    if (active.hasClass("first")) {
      active.removeClass("active");
      $(".last").addClass("active");

    }
    active.removeClass("active");
    active.prev().addClass("active");
  };
  // navigazione tramite navigation_dots
  function dotsNav(){
    var slide = $(".slide");
    var active = $(".active");
    var circle = $(".fa-circle");
    active.removeClass("active");
    $(this).addClass("active");
    for (var i = 0; i < circle.length; i++) {
      if (circle.eq(i).hasClass("active")) {
        $(slide.eq(i)).addClass("active")
      }
    };
  };

});
