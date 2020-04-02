$(document).ready(function(){


  // setto azione su next
  $(".next").click(nexT2);

  // setto azione su prev
  $(".prev").click(preV2);

  // setto azione su dots
  $(".navigation_dots i").click(dotsNav)

  // navigazione  tramite tastiera
  $(document).keypress(keymove);




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

  //navigazione tramite keypress
  function keymove(x){
    if ( x.which == 100) {
      nexT()
    }
    if ( x.which == 97) {
      preV()
    }
  }
  //next con animazione

  function nexT2(){
    var slideAct = $(".slide.active");
    var dotAct = $(".fa-circle.active")
    if (slideAct.hasClass("last")) {
      $(slideAct).animate({
        width: 0
      },1000,function(){
        slideAct.removeClass("active");
        $(".slide.first").addClass("active");
        $(".slide.first").animate({
          width : 500
        },1000)
    });
    dotAct.removeClass("active");
    $(".fa-circle.first").addClass("active");

    }
    $(slideAct).animate({
      width: 0
    },1000,function(){
      slideAct.removeClass("active");
      slideAct.next().addClass("active");
      slideAct.next().animate({
        width : 500
      },1000)
    });
    dotAct.removeClass("active");
    dotAct.next().addClass("active");

  };


  // prev con animazione
  function preV2(){
    var slideAct = $(".slide.active");
    var dotAct = $(".fa-circle.active")
    if (slideAct.hasClass("first")) {
      $(slideAct).animate({
        width: 0
      },1000,function(){
        slideAct.removeClass("active");
        $(".slide.last").addClass("active");
        $(".slide.last").animate({
          width : 500
        },1000)
    });
    dotAct.removeClass("active");
    $(".fa-circle.last").addClass("active");

    }
    $(slideAct).animate({
      width: 0
    },1000,function(){
      slideAct.removeClass("active");
      slideAct.prev().addClass("active");
      slideAct.prev().animate({
        width : 500
      },1000)
    });
    dotAct.removeClass("active");
    dotAct.prev().addClass("active");

  };
  // keynav con animazione
  // function dotsNav(){
  //   var slide = $(".slide");
  //   var active = $(".active");
  //   var circle = $(".fa-circle");
  //   active.removeClass("active");
  //   $(this).addClass("active");
  //   for (var i = 0; i < circle.length; i++) {
  //     if (circle.eq(i).hasClass("active")) {
  //       $(slide.eq(i)).addClass("active")
  //     }
  //   };
  // };



});
