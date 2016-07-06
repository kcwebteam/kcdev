// Funciton to choose Background on body
'use strict';
// TODO: Refactor to remove global variables
var xsSet = false;
var lgSet = false;
function chooseBG (imgMobile, imgDesktop) {
  if (imgMobile && ($('#nav-xs').css('display') === 'block') && xsSet === false) {
    $('#mobile-bg').attr('src', imgMobile);
    xsSet = true;
  }
  if (imgDesktop && ($('#nav-lg').css('display') === 'block' || ($('#nav-sm').css('display') === 'block')) && lgSet === false) {
    $('body').css('background-image', 'url("' + imgDesktop + '")');
    lgSet = true;
  }
}