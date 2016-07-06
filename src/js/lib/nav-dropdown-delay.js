// Delay on nav dropdown menu
var dropdownMenuDelay = function ($) {
  var dropdownEl = 'ul.nav li.dropdown';
  var dropdownElMenu = 'ul.dropdown-menu';

  function toggleClass (hoverState, el) {
    var $this = el.children(dropdownElMenu);
    var timer = $this.data('timer') || 0;
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (hoverState === 'enter') {
        $this.addClass('show');
      } else {
        $this.removeClass('show');
      }
    }, 250); // 2000 is in mil sec eq to 2 sec.
    $this.data('timer', timer);
  }
  function init () {
    $(dropdownEl).hover(
      function () {toggleClass('enter', $(this));},
      function () {toggleClass('leave', $(this));}
    );
  }
  return {
    init: init
  };
}(jQuery);
$(function () {
  dropdownMenuDelay.init();
});
