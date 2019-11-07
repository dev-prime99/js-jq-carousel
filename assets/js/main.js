

$(".next").click(avanti);
$(".prev").click(indietro);


//andare avanti con la freccetta
function avanti(){

  var posimg = $(".images .foto.active");
  var posnav = $(".nav i.active");

  posimg.removeClass("active");
  posnav.removeClass("active");

  if (posimg.hasClass("last")) {
    $(".images .foto.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else{
    posimg.next(".foto").addClass("active");
    posnav.next("i").addClass("active");
  }

}

//andare indietro con la freccetta
function indietro(){

  var posimg = $(".images .foto.active");
  var posnav = $(".nav i.active");

  posimg.removeClass("active");
  posnav.removeClass("active");

  if (posimg.hasClass("first")) {
    $(".images .foto.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else{
    posimg.prev(".foto").addClass("active");
    posnav.prev("i").addClass("active");
  }

}
