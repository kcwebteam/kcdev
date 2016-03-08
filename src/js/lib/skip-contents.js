(function($){
  'use strict';
  // bind a click event to the 'skip' link
  $('a.skip-contents').click(function(){ // Need to add a class to skip to links 
    // strip the leading hash and declare
    // the content we're skipping to
    var skipTo = '#'+this.href.split('#')[1];
    // Setting 'tabindex' to -1 takes an element out of normal 
    // tab flow but allows it to be focused via javascript
    $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
      // when focus leaves this element, 
      // remove the tabindex attribute
      $(this).removeAttr('tabindex');
    }).focus(); // focus on the content container
    return false;
  });
})(jQuery);
