$(window).resize(function () {
  // Collapse window on resize
  if ($('#nav-xs').css('display') === 'none') {
    $('#footer-nav').find('[class^="col-sm-"]').find('ul').collapse('show');
  } else {
    $('#footer-nav').find('[class^="col-sm-"]').find('ul').collapse('hide');
  }
}).resize(); // trigger resize handlers