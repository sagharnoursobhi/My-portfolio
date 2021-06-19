$(document).ready(() => {
    carouselInit();
  });
  $(window).resize(() => {
    carouselInit();
  });
  function carouselInit()
  {
    if($(window).width() < 400) {
      if(!$('#sampleCarousel').hasClass('owl-carousel')) {
        $('#sampleCarousel').addClass('owl-carousel')
        $('#sampleCarousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        items: 2,
        nav: true,
        navText: ['<label>perv</label>', '<label>next</label>'],
    });
      }
    } else {
      $('#sampleCarousel').removeClass('owl-carousel').trigger('destroy.owl.carousel');
    }
  }