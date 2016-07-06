$(function () {
  // Small scripts or setup for plugins

  /* Sidemenu initialize http://getbootstrap.com/examples/offcanvas/*/
  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

  // Hide links in global navigation dropdown menu
  $('.hidden-link').hide();
  $('a.toggle-hidden-links').click(function () {
    if ($(this).hasClass('open')) {
      $('.hidden-link').hide('fast');
      $(this).removeClass('open');
    } else {
      $('.hidden-link').hide('fast');
      $('a.toggle-hidden-links').removeClass('open');
      $(this).closest('ul').children('.hidden-link').show('fast');
      $(this).addClass('open');
    }
  });

  /* Prevent click event on empty a href tags */
  $('a[href="#"]').click(function (event) {
    event.preventDefault();
  });

  // Yamm menu setup
  $(document).on('click', '.yamm .dropdown-menu', function (e) {
    e.stopPropagation();
  });

  // Sticky footer setup
  if ($('#sticky-footer').length !== 0) {
    $('#sticky-footer').scrollToFixed({
      bottom: 0,
      limit: $('#footer-nav-limit').offset().top,
      fixed: function () {
        $(this).css('display', 'block');
        $(this).css('width', '100%');
      },
      unfixed: function () {
        $(this).css('display', 'none');
      },
      dontSetWidth: false
    });
  }

    /* Prevent Safari opening links when viewing as a Mobile App */;(function (a, b, c) {
    if (c in b && b[c]) {
      var d, e = a.location,
        f = /^(a|html)$/i;
      a.addEventListener('click', function (a) {
        d = a.target;
        while (!f.test(d.nodeName)) d = d.parentNode;
        'href' in d && (d.href.indexOf('http') || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href);
      }, !1);
    }
  })(document, window.navigator, 'standalone');

  // http://getbootstrap.com/getting-started/#support-ie10-width
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );
    document.querySelector('head').appendChild(msViewportStyle);
  }
});
