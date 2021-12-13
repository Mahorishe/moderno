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

    $('.icon-th-list').on('click', function(){
      $('.product__item').addClass('list');
      $('.icon-th-list').addClass('active');
      $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function(){
      $('.product__item').removeClass('list');
      $('.icon-th-large').addClass('active');
      $('.icon-th-list').removeClass('active');
    });
  
    $('.product-detail__info .tab, .settings__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.product-detail__info, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-detail__info .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
    });

    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
    });
    
    $('.header__btn-menu').on('click', function(){
      $('.header__box').toggleClass('active');
    });

    let mixer = mixitup('.products__inner-box');
});