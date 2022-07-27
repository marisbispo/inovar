$(function() {
  //caches a jQuery object containing the header element
  var header = $(".logo");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $(".logo").attr("src", "images/logo2.png").addClass("logo2");
    } else {
    $(".logo").attr("src", "images/logo.png").removeClass("logo2");
    }
  });
});


console.log("sim, to funcionando")

//$(".formulario").click(function(){
  //  event.preventDefault();
//})