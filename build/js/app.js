(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Portfolio() {

}

exports.portfolioModule = Portfolio;

},{}],2:[function(require,module,exports){
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

},{"./../js/portfolio.js":1}]},{},[2]);
