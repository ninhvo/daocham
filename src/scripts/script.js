$(document).ready(function(){
  $('.banner-slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });

  $('.list-gallery').slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    arrows: true,
    dots: false,
    variableWidth: true
  });

  $('.slider-image').slick({
    slidesToShow: 1,
    autoplay: true,
    arrows: true,
    dots: true
  });

  $('.list-categories').slick({
    slidesToShow: 3,
    autoplay: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.open-popup-search').magnificPopup({
    type: 'inline',
    midClick: true,
    showCloseBtn: false,
    callbacks: {
      open: function() {
        $('body').addClass('open-menu');
      },
      close: function() {
        $('body').removeClass('open-menu');
      }
    }
  });

  $('.select-language .select').select2({
    minimumResultsForSearch: Infinity,
    templateSelection: formatState,
    templateResult: formatState,
    dropdownParent: $('.dropdown-language')
  });

  if ($(window).width() < 767) {
    $('.main-navigation .navigation-list .item').on('click', function(e) {
      $(this).find('.sub-nav').stop().slideToggle(500);
    });
  }
  if ($(window).width() > 767) {
    $('.main-navigation .navigation-list .item').on('mouseover', function(e) {
      if ($(this).find('.sub-nav').length) {
        $('.wrapper').addClass('menu-hover');
      }
    });
    $('.main-navigation .navigation-list .item').on('mouseout', function(e) {
      if ($(this).find('.sub-nav').length) {
        $('.wrapper').removeClass('menu-hover');
      }
    });
  }

  $('#bt-open-menu, #btn-close-menu').on('click', function(e) {
    $('.main-navigation').toggleClass('is-opend');
    $('body').toggleClass('open-menu');
  });

  $('.gallery-slider .slider-item .item').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery:{
      enabled:true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  $('.tab-header-item .item').on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');
    $('.tab-header-item .item').removeClass('active');
    $(this).addClass('active');
    $('.tab-item').hide();
    $(target).show();
  })
});

function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span class="flag-content"><img src="images/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};