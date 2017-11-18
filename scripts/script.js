$(document).ready(function() {
  $( ".scrolly" ).click(function() {
  $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });
});

$(document).ready(function() {
//  $(".whale").animate({left: '75vw' }, 1000);
  var w = $(".whale").width();
  $(".whale").animate({left: $(window).width()-(w/2)-50}, 1000);
});

$(window).resize(function() {
  // var w = $(".whale").width();
  // $(".whale").animate({left: $(window).width()-w/2}, 1000);
//  $(".whale").css({left: ($(window).width() / 2) + 220});
//  $(".turtle").css({top:-500, left: ($(window).width() / 2) - 220});
});

$(document).ready(function() {
  $( "#initiateStar" ).click(function() {
    var w = $(".starfish").width();
    var newPos = ($(window).width()) -1.9*w ;
    var rotateFix = (newPos%360);
    $(".starfish").animate({left: newPos}, {
                    step: function(now,fx) {
                      $(".starfish").css('-webkit-transform','rotate('+(now-rotateFix)+'deg)');
                    },
          duration: 2000
        });
  });
});

$(document).ready(function() {
  $( "#initiateFish" ).click(function() {
    var w = $(".fish").width();
    $(".fish").animate({right: -($(window).width()-w-40)}, 1000);
  });
});

$(document).ready(function() {
  $( "#initiateTurtle" ).click(function() {
    var w = $(".turtle").width();
    $(".turtle").animate({right: -($(window).width()-w)}, 1000);
  });
});
