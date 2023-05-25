
let navBtn = $('.nav-item');
let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let unidadesSection = $('#unidades-area');

let scrollTo = '';

$(navBtn).click(function() {

  let btnId = $(this).attr('id');

  if(btnId == 'sobre') {
    scrollTo = aboutSection;
  } else if(btnId == 'unidades') {
    scrollTo = unidadesSection;
  } else if(btnId == 'tratamento') {
    scrollTo = servicesSection;
  } else {
    scrollTo = bannerSection;
  }

  $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
  }, 750);
});

$(".menu-toggler").on("click", () => {
  $(".header-container").toggleClass("active");
	$(".nav-items").toggleClass("active");
  $(".nav-links").toggleClass("active");
	$(".menu-toggler").toggleClass("active");
});

$(".nav-link").on("click", () => {
	$(".header-container").removeClass("active");
	$(".nav-items").removeClass("active");
  $(".nav-links").removeClass("active");
	$(".menu-toggler").removeClass("active");
});