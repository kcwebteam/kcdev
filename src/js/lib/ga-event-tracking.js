(function ($) {
  'use strict';

  if (typeof jQuery !== 'undefined') {
    var filetypes = /\.(ashx.*|jpg|jpeg|png|gif|svg|ai|ps|json|zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|mpg|mpeg|flv|wav|mp4|csv|swf|xml)$/i;

    var baseHref = '';

    if ($('base').attr('href') !== undefined) {
      baseHref = $('base').attr('href');
    }
    var hrefRedirect = '';

    $('#main-content').on('click', 'a', function () {
      var el = $(this);
      var track = true;
      var href = (typeof (el.attr('href')) !== 'undefined') ? el.attr('href') : '';
      var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);

      if (!href.match(/^javascript:/i)) {
        var elEv = [];
        elEv.value = 0;
        elEv.nonI = false;

        if (href.match(/^mailto\:/i)) {
          elEv.category = 'email';
          elEv.action = 'click';
          elEv.label = href.replace(/^mailto\:/i, '');
          elEv.loc = href;
        }
        else if (href.match(filetypes)) {
          // var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined
          elEv.category = 'download';
          elEv.action = 'click';
          elEv.label = href.replace(/ /g, '-');
          elEv.loc = baseHref + href;
        }
        else if (href.match(/^https?\:/i) && !isThisDomain) {
          elEv.category = 'external';
          elEv.action = 'click';
          elEv.label = href.replace(/^https?\:\/\//i, '');
          elEv.nonI = true;
          elEv.loc = href;
        }
        else if (href.match(/^tel\:/i)) {
          elEv.category = 'telephone';
          elEv.action = 'click';
          elEv.label = href.replace(/^tel\:/i, '');
          elEv.loc = href;
        } else {
          track = false;
        }

        if (track) {
          var ret = true;
          if ((elEv.category === 'external' || elEv.category === 'download') && (el.attr('target') === undefined || el.attr('target').toLowerCase() !== '_blank')) {
            hrefRedirect = elEv.loc;
            ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, {
              'nonInteraction': elEv.nonI,
              'hitCallback': gaHitCallbackHandler
            });
            ret = false;
          } else {
            ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, {
              'nonInteraction': elEv.nonI
            });
          }
          return ret;
        }
      }
    });
  }

  function gaHitCallbackHandler () {
    window.location.href = hrefRedirect;
  }
})( jQuery);
