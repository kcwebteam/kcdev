var kcGAEvents = (function ($) {
  function gaEventBinder (element) {
    $(element).each(function () {
      var selectionText;
      var selectionHeaderText;
      var elementParentHeader;
      var size;
      var sendText;
      // Set size
      if (element.indexOf('#navbar-full') >= 0) {
        size = 'Large Header Navigation';
      } else if (element.indexOf('#nav-sm') >= 0) {
        size = 'Small Header Navigation';
      } else if (element.indexOf('#nav-xs') >= 0) {
        size = 'XSmall Header Navigation';
      } else {
        size = 'Footer Navigation';
      }
      // Set Parent Selector
      if (size === 'Footer Navigation') {
        elementParentHeader = $(this).parents('.list-unstyled').siblings('h4');
      } else {
        elementParentHeader = $(this).parents('.dropdown-menu').siblings('a.nav-header');
      }
      $(this).click(function (e) {
        // e.preventDefault()
        // Set header
        selectionHeaderText = elementParentHeader.text();
        if (selectionHeaderText === '' && size === 'Small Header Navigation') {
          selectionHeaderText = 'Search';
        }
        // Set text
        if ($(this).html() === '<i class="fa fa-ellipsis-h"></i>') {
          selectionText = 'See more ellipsis';
        } else {
          selectionText = $(this).text();
        }
        // Send text to send
        if (size === 'XSmall Header Navigation') {
          sendText = selectionText;
        } else {
          sendText = selectionHeaderText + ': ' + selectionText;
        }
        // console.log(size, sendText) //for testing
        ga('send', 'event', size, 'click', sendText);
      });
    });
  }
  function init () {
    // Large
    gaEventBinder('#navbar-full .list-unstyled a');
    // Small
    gaEventBinder('#nav-sm .list-unstyled a');
    // XSmall
    gaEventBinder('#nav-xs .nav.navbar-nav li a');
    // Footer
    gaEventBinder('#footer-nav .list-unstyled a');
  }
  return {
    init: init
  };
})(jQuery);

$(function () {
  kcGAEvents.init();
});
