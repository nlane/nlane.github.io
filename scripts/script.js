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
    var newPos = ($(window).width()/2) +100 ;
    var rotateFix = (newPos%360);
    $(".starfish").animate({left: newPos}, {
                    step: function(now,fx) {
                      console.log(now);
                      console.log(rotateFix);
                      $(".starfish").css('-webkit-transform','rotate('+(now-rotateFix)+'deg)');
                    },
          duration: 2000
        });
  });
});

$(document).ready(function() {
  $( "#initiateFish" ).click(function() {
    var w = $(".fish").width();
    $(".fish").animate({right: -($(window).width() / 2)-(w)+70}, 1000);
  });
});

$(document).ready(function() {
  $( "#initiateTurtle" ).click(function() {
    $(".turtle").animate({right: -($(window).width() / 2)-180}, 1000);
  });
});
