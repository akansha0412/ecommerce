$('.slider-one')
.not('.slick-initialized')
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:'.site-slider .slider-btn .prev',
    nextArrow:'.site-slider .slider-btn .next',
});
$('.slider-two')
.not('.slick-initialized')
.slick({
   
    prevArrow:'.site-slider-two .prev',
    nextArrow:'.site-slider-two .slider-btn .next',
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000,
});
$('.slider-three')
.not('.slick-initialized')
.slick({
   
    prevArrow:'.site-slider-three .prev',
    nextArrow:'.site-slider-three .slider-btn .next',
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000,
});
$('.slider-brand')
.not('.slick-initialized')
.slick({
    slidesToShow:5,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000,
});