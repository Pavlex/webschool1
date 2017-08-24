$(document).on('ready', function() {
	if(document.documentElement.clientWidth<768){
      $(".vertical-center-3").slick({
		dots: true,
        horizontal: true,
        centerMode: true,
		slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
		slidesToShow:3,
		  
      });
	}
	else if(document.documentElement.clientWidth>768){
      $(".vertical-center-3").slick({
		dots: true,
        horizontal: true,
        centerMode: true,
		slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
		slidesToShow:8,
		  
      });
	}
      $(".vertical-center").slick({
		  slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          horizontal: true,
          centerMode: false,
      });

    });