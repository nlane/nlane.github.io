$(document).ready(function() {
  $( ".scrolly" ).click(function() {
  $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });
});

$(document).ready(function() {
  $(".whale").animate({left: ($(window).width() / 2) + 220 }, 1000);
});

$(window).resize(function() {
  $(".whale").css({left: ($(window).width() / 2) + 220});
//  $(".turtle").css({top:-500, left: ($(window).width() / 2) - 220});
});

$(document).ready(function() {
  $( "#initiateStar" ).click(function() {
    $(".starfish").animate({left: 720}, {
                  step: function(now,fx) {
                    $(".starfish").css('-webkit-transform','rotate('+now+'deg)');
                  },
        duration: 2000
      });
  });
});

$(document).ready(function() {
  $( "#initiateFish" ).click(function() {
    $(".fish").animate({right: -900}, 1000);
  });
});

$(document).ready(function() {
  $( "#initiateTurtle" ).click(function() {
    $(".turtle").animate({right: -800}, 1000);
  });
});
