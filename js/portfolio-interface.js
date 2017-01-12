var Portfolio = require('./../js/portfolio.js').portfolioModule;

$(document).ready(function() {

  $('.displayed-project').fadeIn();

  // match button text to project text to show clicked project
  $('#project-nav > div').click(function() {
    var clicked = $(this).children('div').text();
    $('.project').each(function() {
      var current = $(this).children('h2').text();
      if (clicked === current) {
        var _this = $(this);
        setTimeout(function(){
          _this.fadeIn();
        }, 500);
      } else {
        $(this).fadeOut();
      }
    });
  });

});
