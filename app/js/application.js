$.fn.tabs = function(options) {
  var self = this;
  var container = this.find('> ul');
  var lastIdx;
  container.on('click', 'li > button:not(.active)', function() {
    var that = $(this);
    container.find('li > button').removeClass('active');
    that.addClass('active');

    var idx = that.parent().index();
    var table = self.find('> table');
    table.find('tr').hide()
    table.find('tr:eq(' + idx + ')').show();
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

  $('.js-tabs table tr').hide();
  $('.js-tabs').tabs();
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
  var show = document.getElementById("popup-left-call");
  show.setAttribute("style", "display: block");

}

function closeSideBarCall() {
  var hide = document.getElementById("popup-left-call");
  hide.setAttribute("style", "display: none");
}

function openSideBarBook() {
  var show = document.getElementById("popup-left-book");
  show.setAttribute("style", "display: block");

}

function closeSideBarBook() {
  var hide = document.getElementById("popup-left-book");
  hide.setAttribute("style", "display: none");
}


function closeServicesPopup() {
  var hide = document.getElementById("services-popup-bg-overlay");
  hide.setAttribute("style", "display: none");
}

function openServicesPopup() {
  var hide = document.getElementById("services-popup-bg-overlay");
  hide.setAttribute("style", "display: block");
}
