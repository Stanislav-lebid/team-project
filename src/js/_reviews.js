$('.slider').slick({
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  speed: 750,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnDotsHover: true,
  pauseOnHover: true,
  touchThreshold: 15,
  waitForAnimate: false,
  asNavFor: ".slider-image"
  
});

$('.slider-image').slick({
  arrows: false,
  speed: 750,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  infinite: true,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnDotsHover: true,
  pauseOnHover: true,
  touchTreshold: 15,
  waitForAnimate: false,
  fade: true,
  
});