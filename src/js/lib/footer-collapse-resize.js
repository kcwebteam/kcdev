$(window).resize(function () {
  // Collapse window on resize
  if ($('#nav-xs').css('display') === 'none') {
    $('#footer-nav .col-sm-4 ul').collapse('show');
  } else {
    $('#footer-nav .col-sm-4 ul').collapse('hide');
  }
}).resize(); // trigger resize handlers