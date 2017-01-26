var Portfolio = require('./../js/portfolio.js').portfolioModule;

$(document).ready(function() {

  $('#skills-page').fadeIn();
  var pause = 500;
  $('.skill').each(function(skill) {
      var self = $(this);
      setTimeout(function() {
          self.css('opacity', 1);
      }, pause);
      pause += 150;
  });

  // show skills page
  $('#skills').click(function() {
    $('html, body').animate({scrollTop: 0}, 'slow');
    $('.project').each(function() {
      $(this).fadeOut();
    });
    setTimeout(function() {
      $('#skills-page').fadeIn();
    }, 500);
    var pause = 500;
    $('.skill').each(function(skill) {
        var self = $(this);
        setTimeout(function() {
            self.css('opacity', 1);
        }, pause);
        pause += 150;
    });
  });

  // match button text to project text to show clicked project
  $('#project-nav > div').click(function() {
    $('#skills-page').fadeOut();
    $('.skill').each(function(skill) {
        $(this).css('opacity', 0);
    });
    var clicked = $(this).children('div').text();
    $('.project').each(function() {
      var current = $(this).children('h2').text();
      if (clicked === current) {
        var _this = $(this);
        $('html, body').animate({scrollTop: 0}, 'slow');
        setTimeout(function(){
          _this.fadeIn();
        }, 500);
      } else {
        $(this).fadeOut();
      }
    });
  });

});
