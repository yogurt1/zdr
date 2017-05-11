// Tabs plugins
$.fn.tabs = function(options) {
  var self = this;
  var container = this.find('> ul');

  function onClick(that) {
    container.find('li > button').removeClass('active');
    that.addClass('active');

    var idx = that.parent().index();
    var table = self.find('> table');
    table.find('td').hide()
    table.find('td:eq(' + idx + ')').show();
  }

  onClick(container.find('li > button.active'));

  container.on('click', 'li > button:not(.active)', function() {
    onClick($(this));
  });
};

$(document).ready(function(){
  $('.slider-middle-owl').owlCarousel({
    loop:true,
    margin: 5,
    responsiveClass:true,
    loop:false,
    nav:true,
    dots:false,
    smartSpeed:1000,
    autoplayTimeout:2000,
    responsive:{
      0:{
        items:1,
      },
      767:{
        items:2,
      },
      1279:{
        items:3,
      }
    }
  });

  $('.js-tabs').tabs();

  $('.advantages-a').click(function(ev) {
    // ev.preventDefault();
    openSideBarBook();
  });
});

$(document).ready(function(){
  $('.header-slider').owlCarousel({
    loop:true,
    margin: 0,
    responsiveClass:true,
    loop:true,
    nav:false,
    smartSpeed:1000,
    dots:true,
    autoplayTimeout:2000,
    responsive:{
      0:{
        items:1,
      }
    }
  })
});

$(document).ready(function(){
  $('.services-popup').owlCarousel({
    loop:true,
    margin: 0,
    responsiveClass:true,
    loop:true,
    nav:false,
    smartSpeed:1000,
    dots:true,
    autoplayTimeout:2000,
    responsive:{
      0:{
        items:1,
      }
    }
  })
});

function openSideBarCall() {
  $('#popup-left-call').fadeIn();
}

function closeSideBarCall() {
  $('#popup-left-call').fadeOut();
}

function openSideBarBook() {
  $('#popup-left-book').fadeIn();
}

function closeSideBarBook() {
  $('#popup-left-book').fadeOut();
}


function closeServicesPopup() {
  $("#services-popup-bg-overlay").fadeOut();
}

function openServicesPopup() {
  $('#services-popup-bg-overlay').fadeIn();
}
