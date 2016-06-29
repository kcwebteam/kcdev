// Vertical panels
var verticalPanels = function ($) {
  'use strict';
  function goToByScroll (id) {
    // Remove "link" from the ID
    id = id.replace('link', '');
    // Scroll
    $('html,body').animate({
      scrollTop: $('#' + id).offset().top
    }, 'slow');
  }
  function init () {
    // Get parent .addon-row div that are not attached and remove padding
    $('.addon-row.row .vertical-story-panel')
      .closest('.addon-row')
      .not('.addon-row-attached')
      .css('padding-top', '0')
      .css('padding-bottom', '0');
    // Grab panel divs
    // var $panels = $('.addon-row-attached .row.vertical-story-panel')
    var $panels = $('.row.vertical-story-panel');
    for (var i = 0; i < $panels.length; i++) {
      $($panels[i]).closest('.addon-row-attached').css('padding-bottom', '0');
      $($panels[i]).attr('id', 'story-panel-' + i);
      //      if(i < ($panels.length -1)) {
      $($panels[i]).addClass('vertical-story-panel-border');
      //    }
      if ($($panels[i]).attr('data-vertical-story-panel') === 'scroll') {
        $($panels[i]).append('<a class="vertical-story-panel-arrow" href="story-panel-' + (i) + '"><span class="fa-stack fa-2x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-chevron-down fa-stack-1x fa-inverse"></i></span></a>');
      }
    }
    $('.row.vertical-story-panel > a.vertical-story-panel-arrow').click(function (e) {
      e.preventDefault();
      goToByScroll($(this).attr('href'));
    });
  }
  return {
    init: init
  };
}(jQuery);(function () {
  'use strict';
  verticalPanels.init();
})();
