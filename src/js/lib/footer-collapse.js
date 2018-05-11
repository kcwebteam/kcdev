  /*  Project: Footer Collapse
   *  Description: Add collapse behavior for the footer at small and x-small screenl
   *  Author: Alex Aragon
   */
  (function ($) {
  'use strict';

  if ($('#nav-xs').css('display') === 'none') {
    $('#footer-nav').find('[class^="col-sm-"]').find('ul').collapse('show');
  } else {
    $('#footer-nav').find('[class^="col-sm-"]').find('ul').collapse('hide');
  }
  $('#footer-nav').find('[class^="col-sm-"]').find('h4').each(function (index) {
    $(this).click(function (event) {
      event.preventDefault();
      if ($('#nav-xs').css('display') === 'block') {
        // check ie8
        if (!Modernizr.mq('only all')) {
          $(this).next().toggleClass('collapse');
        } else {
          $(this).next().collapse('toggle');
        }
        $(this).find('span').toggleClass('fa-minus').toggleClass('fa-plus');
      }
    });
  });
}(jQuery));