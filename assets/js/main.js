

$(".next").click(avanti);
$(".prev").click(indietro);
$(".nav i").click(movenav);
$(".mini").click(movemini);


//andare avanti con la freccetta
function avanti(){

  var posimg = $(".images .foto.active");
  var posnav = $(".nav i.active");
  var posimgmini = $(".thumbnails .mini.active");

  posimg.removeClass("active");
  posnav.removeClass("active");
  posimgmini.removeClass("active");

  if (posimg.hasClass("last")) {
    $(".images .foto.first").addClass("active");
    $(".nav i.first").addClass("active");
    $(".thumbnails .mini.first").addClass("active");
  } else{
    posimg.next(".foto").addClass("active");
    posnav.next("i").addClass("active");
    posimgmini.next(".mini").addClass("active");
  }

}

//andare indietro con la freccetta
function indietro(){

  var posimg = $(".images .foto.active");
  var posnav = $(".nav i.active");
  var posimgmini = $(".thumbnails .mini.active");

  posimg.removeClass("active");
  posnav.removeClass("active");
  posimgmini.removeClass("active");

  if (posimg.hasClass("first")) {
    $(".images .foto.last").addClass("active");
    $(".nav i.last").addClass("active");
    $(".thumbnails .mini.last").addClass("active");
  } else{
    posimg.prev(".foto").addClass("active");
    posnav.prev("i").addClass("active");
    posimgmini.prev(".mini").addClass("active");
  }

}


// muoversi nella navbar
function movenav(){

  var posimg = $(".images .foto.active");
  var posnav = $(".nav i.active");
  var posimgmini = $(".thumbnails .mini.active");

  posimg.removeClass("active");
  posnav.removeClass("active");
  posimgmini.removeClass("active");

  if ($(this).hasClass("ic1")) {
    $(this).addClass("active");
    $(".images .foto.ft1").addClass("active");
    $(".thumbnails .mini.ft1").addClass("active")
  } else if ($(this).hasClass("ic2")) {
    $(this).addClass("active");
    $(".images .foto.ft2").addClass("active");
    $(".thumbnails .mini.ft2").addClass("active")
  } else if ($(this).hasClass("ic3")) {
    $(this).addClass("active");
    $(".images .foto.ft3").addClass("active");
    $(".thumbnails .mini.ft3").addClass("active")
  } else if ($(this).hasClass("ic4")) {
    $(this).addClass("active");
    $(".images .foto.ft4").addClass("active");
    $(".thumbnails .mini.ft4").addClass("active")
  }

}


// muoversi con le miniature
function movemini(){

  var posimgmini = $(".thumbnails .mini.active");
  var posnav = $(".nav i.active");
  var posimg = $(".images .foto.active");

  posimgmini.removeClass("active");
  posnav.removeClass("active");
  posimg.removeClass("active");

  if ($(this).hasClass("ft1")) {
    $(this).addClass("active");
    $(".images .foto.ft1").addClass("active");
    $(".nav .ic1").addClass("active");
  } else if ($(this).hasClass("ft2")) {
    $(this).addClass("active");
    $(".images .foto.ft2").addClass("active");
    $(".nav .ic2").addClass("active");
  } else if ($(this).hasClass("ft3")) {
    $(this).addClass("active");
    $(".images .foto.ft3").addClass("active");
    $(".nav .ic3").addClass("active");
  } else if ($(this).hasClass("ft4")) {
    $(this).addClass("active");
    $(".images .foto.ft4").addClass("active");
    $(".nav .ic4").addClass("active");
  }

}

// muoversi con i tasti
$(document).keydown(function (e){
  switch(e.which) {
    case 32: avanti(); //space
    break;

    case 37: indietro(); //left
    break;

    case 38: indietro(); // up
    break;

    case 39: avanti(); // right
    break;

    case 40: avanti(); // down
    break;

    default: return;
  }
  e.preventDefault();
});
