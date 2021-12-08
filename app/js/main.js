$(function(){
    

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
      });
    
    $('.products-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,

    });

    let mixer = mixitup('.products__inner-box');
});