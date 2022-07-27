$(function(){
	$(".center").slick({
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive:[
    {
      breakpoint: 1024,
      settings: {
       arrows: true,
	   centerPadding: '40px',
	   slidesToShow: 2
      }
    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: true,
	        centerPadding: '0',
	        slidesToShow: 1
      }
    }
  ]
});

})

//$('.single-item').slick();

console.log("oie");
