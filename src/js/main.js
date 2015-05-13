/*
 * Author: King County Web Team
 * Date: 2015-01-05 
 * Description: King County JS file
 */
$(document).ready(function () {
var addThis = function($) {

    function addClickEvent(element, eventType) {
        $(element).click(function (event) {
            event.preventDefault();
            var pathname = $(location).attr('href');
            var left = ($(window).width() / 2) - (700 / 2);
            var top = ($(window).height() / 2) - (325 / 2);
            try {
                window.open('http://api.addthis.com/oexchange/0.8/forward/'+ eventType +'/offer?url=' + pathname, eventType +' popup', 'scrollbars=no, height=325, width=700, top=' + top + ', left=' + left);
            }
            catch (e) {
                window.open('http://api.addthis.com/oexchange/0.8/forward/'+ eventType +'/offer?url=' + pathname, eventType + 'popup');
            }
            return false;
        });
    }
    function addClickPrintEvent(element){
        $(element).click(function (event) {
            event.preventDefault();
            var loc = encodeURI(window.location);
            window.open(loc + '?print=1', '_self');
            return false;
        });
    }
    function init(){
        addClickEvent('a#facebook-share-button', 'facebook');
        addClickEvent('a#twitter-share-button', 'twitter');
        addClickEvent('a#email-share-button', 'email');
        addClickPrintEvent('a#print-share-button');
    }

    return {
        init: init
    };
}(jQuery);

addThis.init();
(function ($) {
  'use strict';

  if($('#nav-xs').css('display') == 'none'){
     $('#footer-nav .col-sm-4 ul').collapse('show');
  }
  else {
      $('#footer-nav .col-sm-4 ul').collapse('hide');
  }
  $('#footer-nav .col-sm-4 h4').each(function( index ){
      $(this).click(function(event){
          event.preventDefault();
          if($('#nav-xs').css('display') == 'block') {
              //check ie8
              if (!Modernizr.mq('only all')) {
                  $(this).next().toggleClass('collapse');
              }
              else {
                  $(this).next().collapse('toggle');
              }
              $(this).find('i').toggleClass('fa-minus').toggleClass('fa-plus');
          }
      });
  });
}(jQuery));
//Delay on nav dropdown menu
var dropdownMenuDelay = function($) {

    var dropdownEl = 'ul.nav li.dropdown';
    var dropdownElMenu = 'ul.dropdown-menu';

    function toggleClass (hoverState, el) {
        var $this = el.children(dropdownElMenu);
        var timer = $this.data('timer') || 0;
        clearTimeout(timer);
        timer = setTimeout(function () {
            if(hoverState === 'enter') {
                $this.addClass('show');
            }
            else {
                $this.removeClass('show');
            }
        }, 250); // 2000 is in mil sec eq to 2 sec.
        $this.data('timer', timer);
    }
    function init() {
        $(dropdownEl).hover(
            function(){toggleClass('enter', $(this));},
            function(){toggleClass('leave', $(this));}
        );
    }
    return {
        init:init
    };
}(jQuery);

dropdownMenuDelay.init();


//Google Analytics call
$.getScript('/js/vendor/kc-analytics.js', function(){});

$('[data-kccomponent]').each(function () {
    var $this = $(this),
    url = $this.data('kccomponent') + '.aspx?a=true';
    $this.html('');

    $.ajax({
        type: 'GET',
        url: url
    }).done(function (data) {
        $this.append(data);
        //for datedlist popovers          
        $('.popoveritem').popover();
    });
});
/* Sidemenu initialize http://getbootstrap.com/examples/offcanvas/*/
$('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
});
//Hide links in global navigation dropdown menu
$('.hidden-link').hide();
$('a.toggle-hidden-links').click(function () {
    if ($(this).hasClass('open')) {
        $('.hidden-link').hide('fast');
        $(this).removeClass('open');
    }
    else {
        $('.hidden-link').hide('fast');
        $('a.toggle-hidden-links').removeClass('open');
        $(this).closest('ul').children('.hidden-link').show('fast');
        $(this).addClass('open');
    }
});
//Main-content fade upon hovering over main nav
//Update 7/25/2013: Added code to test for touch device.
if (!is_touch_device()) {
    $('header .navbar .dropdown-toggle').hover(
        function (e) {
            $('#main-content').stop(true).fadeTo(300, 0.3);
            $('#home-content').stop(true).fadeTo(300, 0.3);
        },
        function (e) {
            $('#main-content').stop(true).fadeTo(300, 1);
            $('#home-content').stop(true).fadeTo(300, 1);
        }
        );
    $('header .dropdown-menu').hover(
        function (e) {
            $('#main-content').stop(true).fadeTo(300, 0.3);
            $('#home-content').stop(true).fadeTo(300, 0.3);
        },
        function (e) {
            $('#main-content').stop(true).fadeTo(300, 1);
            $('#home-content').stop(true).fadeTo(300, 1);
        }
    );
}
else {
    $('.navbar  a.dropdown-toggle').click(function (event) {
        event.preventDefault();
        $('.dropdown-toggle').removeClass('disabled');
    });
}
function is_touch_device() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}
// Force touch screens to remove the menu when touching body of page
$('#main-content').click(function () {
    $('.dropdown-toggle').removeClass('show');
});
/* Prevent Safari opening links when viewing as a Mobile App */
(function (a, b, c) {
    if (c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener('click', function (a) {
            d = a.target;
            while (!f.test(d.nodeName)) d = d.parentNode
            "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href);
        }, !1);
    }
})(document, window.navigator, 'standalone');

/* Prevent click event on empty a href tags */
$('a[href="#"]').click(function (event) {
    event.preventDefault();
});

// Yamm menu setup
$(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation();
});
//Sidebar nav indenting
//Only works up to four levels deep
//Also includes fix for active item
$('#sidebar .panel .list-group.collapsed').find('a.list-group-item').each(function () {
    $(this).css('padding-left', '+=10');
});
$('#sidebar .panel .list-group.collapsed > .list-group.collapsed').find('a.list-group-item').each(function () {
    $(this).css('padding-left', '+=10');
});
$('#sidebar .panel .list-group.collapsed >.list-group.collapsed > .list-group.collapsed').find('a.list-group-item').each(function () {
    $(this).css('padding-left', '+=10');
});
 $('#sidebar .panel .list-group.collapsed > .list-group.collapsed > .list-group.collapsed > .list-group.collapsed').find('a.list-group-item').each(function () {
    $(this).css('padding-left', '+=10');
});
var activeSidebarItem = $('.sidebar-offcanvas .list-group-item.active');
$(activeSidebarItem).each(function( index) {
  $(this).css('padding-left', '-=6');
});
$('#sticky-footer').scrollToFixed( {
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


//http://getbootstrap.com/getting-started/#support-ie10-width
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
        document.createTextNode(
        '@-ms-viewport{width:auto!important}'
        )
    );
    document.querySelector('head').appendChild(msViewportStyle);
}
//Initialize Fitvids
$('#main-content').fitVids();


});
//Funciton to choose Background on body
var xsSet = false;
var lgSet = false;
function chooseBG(imgMobile, imgDesktop) {
    if(imgMobile && ($('#nav-xs').css("display") == "block") && xsSet == false){
        $('#mobile-bg').attr("src", imgMobile);
        xsSet = true;
    }
    if(imgDesktop && ($('#nav-lg').css("display") == "block" || ($('#nav-sm').css("display") == "block")) && lgSet == false){
        $('body').css("background-image", "url('" + imgDesktop + "')");
        lgSet = true;
    }
}
$(window).resize(function() {
    //Collapse window on resize
    if($('#nav-xs').css('display') == 'none'){
       $('#footer-nav .col-sm-4 ul').collapse('show');
    }
    else {
        $('#footer-nav .col-sm-4 ul').collapse('hide');
    }
}).resize(); // trigger resize handlers
(function( $ ){

  $.fn.eventsCalendar = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      calNum       : '69gk-ky9a',
      numItems     : 4,
      title        : 'Events',
      titleIcon    : 'fa-calendar',
      allItemsUrl  : 'http://www.kingcounty.gov/about/news/events',
      allItemsText : 'See all events',
      filter       : ''
    }, options);
    //Set global scope for instance
    var $this = this;
    var allpops = [];

    return this.each(function() {
      $this.append('<i class="fa fa-spinner fa-spin fa-4x"></i>');

      //Build URL String
      var dataURL = 'http://data.kingcounty.gov/resource/' + settings.calNum + 
                    '.json?';
      if(settings.filter){
        dataURL += '&$q=' + settings.filter;
      }
      dataURL += '&$order=start_time&$$app_token=bCoT94x6NcBsw8AGGZudTwOs7';

      $.ajax({
        url: dataURL,
        dataType: 'json',
        jsonp: false
      }).
      success(function(data) {
        parseData(data);
      }).
      error(function () {
        crossDomainAjax(dataURL, parseData);
      });
      function parseData(data) {
        var counter = 0;

        $this.addClass("calendar-events-list");

        var output = '<h2><span class=\"fa-stack\"><i class=\"fa fa-square fa-stack-2x\"></i><i class=\"fa ' + settings.titleIcon + ' fa-stack-1x fa-inverse\"></i> </span> '+ settings.title +'</h2>';

        $.each(data, function (i, item) {
          
          var date = new Date(0);

          date.setUTCSeconds(item.start_time);
          var currentDate = new Date();

          if (date >= currentDate && counter < settings.numItems) {
            output+='<div class=\"media\"><div class="media-left">';
            var dateDay = date.getDate();
            output += '<div class=\"date-day\">' + dateDay + '</div> ';
            output += '<div class=\"date-month\">' + monthFormat(date.getMonth()) + '</div>';
            output += '</div>';//end pull left div
            var city;
            var address;
            var location;
            try {
                var itemLocation = $.parseJSON(item.location.human_address);
                city = itemLocation.city;
                address = itemLocation.address;
            } catch (e) {
                city = 'Not available';
                address = 'Not available';
            }
            if (item.location_name != undefined) {
                location = item.location_name;
            } else {
                location = 'Not available';
            }
            var popoverContent = 'Location: ' + location + '<br /> Address: ' + address + '<br /> City: ' + city;
            var url;
            try {
                url = item.url.url;
            } catch (e) {
                url = '\/about\/news\/events';
            }

            output += '<div class=\"media-body\">'
            var eventName;
            if(item.event_name.search('<') == 0){
                eventName = $(item.event_name).text();
            }
            else {
                eventName = item.event_name;
            }
            output += '<p><a class=\"pop\" id=\"popover' + i + '\"' + 'rel=\"popover\" data-animation=\"true\" data-html=\"true\" data-placement=\"top\" data-trigger=\"hover\" data-delay=\"0\"'; 
            output += 'data-content="' + popoverContent +'"';
            output += 'title=\"' + item.event_name +'"';
            output += 'href=\"'+ url +'"';
            output += '>' + eventName +'</a></p>';
            output += '</div></div>';//end media div
            allpops.push("#popover" + i);
            counter += 1;
          }
        });
        //If there are no active events output error message
        if (counter === 0) {
          output += '<div class=\"media\"><div class="media-left">';
          output += '<div class=\"date-day\"><i class="fa fa-info-circle"></i></div> ';
          output += '<div class=\"date-month\"></div></div>';
          output += '<div class=\"media-body\">';
          output += '<p>There are no upcoming events in this calendar.</p>';
          output += '</div></div>';
        }

        output += '<p class="all-events"><a href="'+ settings.allItemsUrl +'"><em>'+ settings.allItemsText +'</em></a></p>';

        $this.html(output);
        $(allpops).each(function (index){
          $(allpops).popover();
        });
      }
      function crossDomainAjax(url, successCallback) {
        /* IE8 & 9 only Cross domain JSON GET request */
        if ('XDomainRequest' in window && window.XDomainRequest !== null) {
          var xdr = new XDomainRequest(); /* Use Microsoft XDR */
          /* 
          * XDomainRequest object requires a method for each event handler, 
          * even if anonymous, and to set properties explicitly
          */
          xdr.onload = function () {
            var JSON = $.parseJSON(xdr.responseText);
            if (JSON == null || typeof (JSON) == 'undefined') {
                JSON = $.parseJSON(data.firstChild.textContent);
            }
            successCallback(JSON);
          };
          xdr.onprogress = function () { };
          xdr.ontimeout = function () { };
          xdr.onerror = function () {
              _result = false;
          };
          xdr.timeout = 5000;
          xdr.contenttype = 'text/plain';
          xdr.open('get', url);
          xdr.send();
        }
        /* Normal jQuery AJAX  */
        else {
          $.ajax({
            url: url,
            cache: false,
            dataType: 'json',
            type: 'GET',
            async: false,
            success: function (data, success) {
                successCallback(data);
            },
            error: function () {
                /* regular embed, last resort */
                $this.addClass("calendar-events-list");
                var output = '';
                output += '<h2><span class=\"fa-stack\"><i class=\"fa fa-square fa-stack-2x\"></i><i class=\"fa '+ settings.titleIcon +' fa-stack-1x fa-inverse\"></i> </span> Events</h2>';
                output ='<iframe width=\"100%\" height=\"425px\" src=\"https://data.kingcounty.gov/w/' + settings.calNum +'\"frameborder=\"0\" scrolling=\"no\"></iframe>';
                output += '<p class=\"all-events\"><a href=\"'+ settings.allItemsUrl+'\"><em>'+settings.allItemsUrl+'</em></a></p>';
                $this.html(output);
            }
          });
        }
      }
    });
    //Helper function for Events Calendar function
    function monthFormat(monthToFormat) {
      var month = [];
      month[0] = "JAN";
      month[1] = "FEB";
      month[2] = "MAR";
      month[3] = "APR";
      month[4] = "MAY";
      month[5] = "JUN";
      month[6] = "JUL";
      month[7] = "AUG";
      month[8] = "SEP";
      month[9] = "OCT";
      month[10] = "NOV";
      month[11] = "DEC";
      var formatedMonth = month[monthToFormat];
      return formatedMonth;
    }
  };
})( jQuery );
(function( $ ){

  $.fn.deliciousNewsFeed = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      feedURL      : 'http://feeds.delicious.com/v2/json/kingcounty',
      numItems     : 3,
      title        : 'News',
      titleIcon    : 'fa-file-text-o',
      showSummary  : true,
      allItemsUrl  : 'http://www.kingcounty.gov/about/news/events',
      allItemsText : 'See all King County news'
    }, options);

    //Set global scope for instance
    var $this = this,
        output = "",
        allpops = [];

    return this.each(function() {
      $this.append('<i class="fa fa-spinner fa-spin fa-4x"></i>');
      var dataURL = settings.feedURL + '?count=' + settings.numItems;
      $.ajax({
        url: dataURL,
        dataType: 'jsonp',
        }).
        success(function(data) {
          parseData(data);
        })
    });
      
    function parseData(data) {
      var counter = 0;
      $this.addClass("news-feed");
      $this.addClass("dated-news-feed");

      var output = '<h2><span class=\"fa-stack\"><i class=\"fa fa-square fa-stack-2x\"></i><i class=\"fa ' + settings.titleIcon + ' fa-stack-1x fa-inverse\"></i> </span> '+ settings.title +'</h2>';

      $.each (data, function(i, item) {
        var dateWhole = item.d.split(': ');
        var dateStrSub = dateWhole[0];
        var month = dateStrSub.split(' ')[0].toUpperCase();
        month = month.substring(0,3);
        var day = dateStrSub.split(' ')[1];
        //Start HTML string
        output += '<div class="media"><div class="media-left">';
        //Get date in Date format
        //Get day
        output +='<div class="date-day">'+ day + '</div>';
        //Get month
        output +='<div class="date-month">'+ month + '</div>';
        output += '</div>';
        //Set content for popover
        var popoverContent = 'Summary: '+ item.n;  
        var titleStr = item.d;
        var titleParts = titleStr.split(': ');
        var titleStrSub = titleParts[1];
        //Get Event name
        output += '<div class="media-body">';
        output +='<a href="'+item.u+'" id="popover'+i+'" rel="popover" data-animation="true" data-html="true" data-placement="right" data-trigger="hover" data-delay="0" data-content="'+ popoverContent +'" title="'+ item.d +'">' + titleStrSub + '</a>';
        if(settings.showSummary) {
          output += '<p>'+item.n+'</p>';
        }
        //Wrap up
        output+='</div></div>';
        allpops.push("#popover"+i)
      });
      output+= '<p><a href="'+settings.allItemsUrl+'"><em>'+settings.allItemsText+'</em></a></p>'
      $this.html(output);
      $(allpops).each(function (index){
        $(allpops).popover();
      });
    }
  };
})( jQuery );
(function() {
var sz = document.createElement('script'); sz.type = 'text/javascript'; sz.async = true;
sz.src = '//us2.siteimprove.com/js/siteanalyze_1306788.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sz, s);
})();
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null,
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
(function($) {
    $.isScrollToFixed = function(el) {
        return !!$(el).data('ScrollToFixed');
    };

    $.ScrollToFixed = function(el, options) {
        // To avoid scope issues, use 'base' instead of 'this' to reference this
        // class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element.
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object.
        base.$el.data('ScrollToFixed', base);

        // A flag so we know if the scroll has been reset.
        var isReset = false;

        // The element that was given to us to fix if scrolled above the top of
        // the page.
        var target = base.$el;

        var position;
        var originalPosition;
        var originalOffsetTop;
        var originalZIndex;

        // The offset top of the element when resetScroll was called. This is
        // used to determine if we have scrolled past the top of the element.
        var offsetTop = 0;

        // The offset left of the element when resetScroll was called. This is
        // used to move the element left or right relative to the horizontal
        // scroll.
        var offsetLeft = 0;
        var originalOffsetLeft = -1;

        // This last offset used to move the element horizontally. This is used
        // to determine if we need to move the element because we would not want
        // to do that for no reason.
        var lastOffsetLeft = -1;

        // This is the element used to fill the void left by the target element
        // when it goes fixed; otherwise, everything below it moves up the page.
        var spacer = null;

        var spacerClass;

        var className;

        // Capture the original offsets for the target element. This needs to be
        // called whenever the page size changes or when the page is first
        // scrolled. For some reason, calling this before the page is first
        // scrolled causes the element to become fixed too late.
        function resetScroll() {
            // Set the element to it original positioning.
            target.trigger('preUnfixed.ScrollToFixed');
            setUnfixed();
            target.trigger('unfixed.ScrollToFixed');

            // Reset the last offset used to determine if the page has moved
            // horizontally.
            lastOffsetLeft = -1;

            // Capture the offset top of the target element.
            offsetTop = target.offset().top;

            // Capture the offset left of the target element.
            offsetLeft = target.offset().left;

            // If the offsets option is on, alter the left offset.
            if (base.options.offsets) {
                offsetLeft += (target.offset().left - target.position().left);
            }

            if (originalOffsetLeft == -1) {
                originalOffsetLeft = offsetLeft;
            }

            position = target.css('position');

            // Set that this has been called at least once.
            isReset = true;

            if (base.options.bottom != -1) {
                target.trigger('preFixed.ScrollToFixed');
                setFixed();
                target.trigger('fixed.ScrollToFixed');
            }
        }

        function getLimit() {
            var limit = base.options.limit;
            if (!limit) return 0;

            if (typeof(limit) === 'function') {
                return limit.apply(target);
            }
            return limit;
        }

        // Returns whether the target element is fixed or not.
        function isFixed() {
            return position === 'fixed';
        }

        // Returns whether the target element is absolute or not.
        function isAbsolute() {
            return position === 'absolute';
        }

        function isUnfixed() {
            return !(isFixed() || isAbsolute());
        }

        // Sets the target element to fixed. Also, sets the spacer to fill the
        // void left by the target element.
        function setFixed() {
            // Only fix the target element and the spacer if we need to.
            if (!isFixed()) {
                // Set the spacer to fill the height and width of the target
                // element, then display it.
                spacer.css({
                    'display' : target.css('display'),
                    'width' : target.outerWidth(true),
                    'height' : target.outerHeight(true),
                    'float' : target.css('float')
                });

                // Set the target element to fixed and set its width so it does
                // not fill the rest of the page horizontally. Also, set its top
                // to the margin top specified in the options.

                cssOptions={
                    'z-index' : base.options.zIndex,
                    'position' : 'fixed',
                    'top' : base.options.bottom == -1?getMarginTop():'',
                    'bottom' : base.options.bottom == -1?'':base.options.bottom,
                    'margin-left' : '0px'
                }
                if (!base.options.dontSetWidth){ cssOptions['width']=target.width(); };

                target.css(cssOptions);
                
                target.addClass(base.options.baseClassName);
                
                if (base.options.className) {
                    target.addClass(base.options.className);
                }

                position = 'fixed';
            }
        }

        function setAbsolute() {

            var top = getLimit();
            var left = offsetLeft;

            if (base.options.removeOffsets) {
                left = '';
                top = top - offsetTop;
            }

            cssOptions={
              'position' : 'absolute',
              'top' : top,
              'left' : left,
              'margin-left' : '0px',
              'bottom' : ''
            }
            if (!base.options.dontSetWidth){ cssOptions['width']=target.width(); };

            target.css(cssOptions);

            position = 'absolute';
        }

        // Sets the target element back to unfixed. Also, hides the spacer.
        function setUnfixed() {
            // Only unfix the target element and the spacer if we need to.
            if (!isUnfixed()) {
                lastOffsetLeft = -1;

                // Hide the spacer now that the target element will fill the
                // space.
                spacer.css('display', 'none');

                // Remove the style attributes that were added to the target.
                // This will reverse the target back to the its original style.
                target.css({
                    'z-index' : originalZIndex,
                    'width' : '',
                    'position' : originalPosition,
                    'left' : '',
                    'top' : originalOffsetTop,
                    'margin-left' : ''
                });

                target.removeClass('scroll-to-fixed-fixed');

                if (base.options.className) {
                    target.removeClass(base.options.className);
                }

                position = null;
            }
        }

        // Moves the target element left or right relative to the horizontal
        // scroll position.
        function setLeft(x) {
            // Only if the scroll is not what it was last time we did this.
            if (x != lastOffsetLeft) {
                // Move the target element horizontally relative to its original
                // horizontal position.
                target.css('left', offsetLeft - x);

                // Hold the last horizontal position set.
                lastOffsetLeft = x;
            }
        }

        function getMarginTop() {
            var marginTop = base.options.marginTop;
            if (!marginTop) return 0;

            if (typeof(marginTop) === 'function') {
                return marginTop.apply(target);
            }
            return marginTop;
        }

        // Checks to see if we need to do something based on new scroll position
        // of the page.
        function checkScroll() {
            if (!$.isScrollToFixed(target)) return;
            var wasReset = isReset;

            // If resetScroll has not yet been called, call it. This only
            // happens once.
            if (!isReset) {
                resetScroll();
            } else if (isUnfixed()) {
                // if the offset has changed since the last scroll,
                // we need to get it again.

                // Capture the offset top of the target element.
                offsetTop = target.offset().top;

                // Capture the offset left of the target element.
                offsetLeft = target.offset().left;
            }

            // Grab the current horizontal scroll position.
            var x = $(window).scrollLeft();

            // Grab the current vertical scroll position.
            var y = $(window).scrollTop();

            // Get the limit, if there is one.
            var limit = getLimit();

            // If the vertical scroll position, plus the optional margin, would
            // put the target element at the specified limit, set the target
            // element to absolute.
            if (base.options.minWidth && $(window).width() < base.options.minWidth) {
                if (!isUnfixed() || !wasReset) {
                    postPosition();
                    target.trigger('preUnfixed.ScrollToFixed');
                    setUnfixed();
                    target.trigger('unfixed.ScrollToFixed');
                }
            } else if (base.options.maxWidth && $(window).width() > base.options.maxWidth) {
                if (!isUnfixed() || !wasReset) {
                    postPosition();
                    target.trigger('preUnfixed.ScrollToFixed');
                    setUnfixed();
                    target.trigger('unfixed.ScrollToFixed');
                }
            } else if (base.options.bottom == -1) {
                // If the vertical scroll position, plus the optional margin, would
                // put the target element at the specified limit, set the target
                // element to absolute.
                if (limit > 0 && y >= limit - getMarginTop()) {
                    if (!isAbsolute() || !wasReset) {
                        postPosition();
                        target.trigger('preAbsolute.ScrollToFixed');
                        setAbsolute();
                        target.trigger('unfixed.ScrollToFixed');
                    }
                // If the vertical scroll position, plus the optional margin, would
                // put the target element above the top of the page, set the target
                // element to fixed.
                } else if (y >= offsetTop - getMarginTop()) {
                    if (!isFixed() || !wasReset) {
                        postPosition();
                        target.trigger('preFixed.ScrollToFixed');

                        // Set the target element to fixed.
                        setFixed();

                        // Reset the last offset left because we just went fixed.
                        lastOffsetLeft = -1;

                        target.trigger('fixed.ScrollToFixed');
                    }
                    // If the page has been scrolled horizontally as well, move the
                    // target element accordingly.
                    setLeft(x);
                } else {
                    // Set the target element to unfixed, placing it where it was
                    // before.
                    if (!isUnfixed() || !wasReset) {
                        postPosition();
                        target.trigger('preUnfixed.ScrollToFixed');
                        setUnfixed();
                        target.trigger('unfixed.ScrollToFixed');
                    }
                }
            } else {
                if (limit > 0) {
                    if (y + $(window).height() - target.outerHeight(true) >= limit - (getMarginTop() || -getBottom())) {
                        if (isFixed()) {
                            postPosition();
                            target.trigger('preUnfixed.ScrollToFixed');

                            if (originalPosition === 'absolute') {
                                setAbsolute();
                            } else {
                                setUnfixed();
                            }

                            target.trigger('unfixed.ScrollToFixed');
                        }
                    } else {
                        if (!isFixed()) {
                            postPosition();
                            target.trigger('preFixed.ScrollToFixed');
                            setFixed();
                        }
                        setLeft(x);
                        target.trigger('fixed.ScrollToFixed');
                    }
                } else {
                    setLeft(x);
                }
            }
        }

        function getBottom() {
            if (!base.options.bottom) return 0;
            return base.options.bottom;
        }

        function postPosition() {
            var position = target.css('position');

            if (position == 'absolute') {
                target.trigger('postAbsolute.ScrollToFixed');
            } else if (position == 'fixed') {
                target.trigger('postFixed.ScrollToFixed');
            } else {
                target.trigger('postUnfixed.ScrollToFixed');
            }
        }

        var windowResize = function(event) {
            // Check if the element is visible before updating it's position, which
            // improves behavior with responsive designs where this element is hidden.
            if(target.is(':visible')) {
                isReset = false;
                checkScroll();
            }
        }

        var windowScroll = function(event) {
            (!!window.requestAnimationFrame) ? requestAnimationFrame(checkScroll) : checkScroll();
        }

        // From: http://kangax.github.com/cft/#IS_POSITION_FIXED_SUPPORTED
        var isPositionFixedSupported = function() {
            var container = document.body;

            if (document.createElement && container && container.appendChild && container.removeChild) {
                var el = document.createElement('div');

                if (!el.getBoundingClientRect) return null;

                el.innerHTML = 'x';
                el.style.cssText = 'position:fixed;top:100px;';
                container.appendChild(el);

                var originalHeight = container.style.height,
                originalScrollTop = container.scrollTop;

                container.style.height = '3000px';
                container.scrollTop = 500;

                var elementTop = el.getBoundingClientRect().top;
                container.style.height = originalHeight;

                var isSupported = (elementTop === 100);
                container.removeChild(el);
                container.scrollTop = originalScrollTop;

                return isSupported;
            }

            return null;
        }

        var preventDefault = function(e) {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        // Initializes this plugin. Captures the options passed in, turns this
        // off for devices that do not support fixed position, adds the spacer,
        // and binds to the window scroll and resize events.
        base.init = function() {
            // Capture the options for this plugin.
            base.options = $.extend({}, $.ScrollToFixed.defaultOptions, options);

            originalZIndex = target.css('z-index')

            // Turn off this functionality for devices that do not support it.
            // if (!(base.options && base.options.dontCheckForPositionFixedSupport)) {
            //     var fixedSupported = isPositionFixedSupported();
            //     if (!fixedSupported) return;
            // }

            // Put the target element on top of everything that could be below
            // it. This reduces flicker when the target element is transitioning
            // to fixed.
            base.$el.css('z-index', base.options.zIndex);

            // Create a spacer element to fill the void left by the target
            // element when it goes fixed.
            spacer = $('<div />');

            position = target.css('position');
            originalPosition = target.css('position');

            originalOffsetTop = target.css('top');

            // Place the spacer right after the target element.
            if (isUnfixed()) base.$el.after(spacer);

            // Reset the target element offsets when the window is resized, then
            // check to see if we need to fix or unfix the target element.
            $(window).bind('resize.ScrollToFixed', windowResize);

            // When the window scrolls, check to see if we need to fix or unfix
            // the target element.
            $(window).bind('scroll.ScrollToFixed', windowScroll);

            if (base.options.preFixed) {
                target.bind('preFixed.ScrollToFixed', base.options.preFixed);
            }
            if (base.options.postFixed) {
                target.bind('postFixed.ScrollToFixed', base.options.postFixed);
            }
            if (base.options.preUnfixed) {
                target.bind('preUnfixed.ScrollToFixed', base.options.preUnfixed);
            }
            if (base.options.postUnfixed) {
                target.bind('postUnfixed.ScrollToFixed', base.options.postUnfixed);
            }
            if (base.options.preAbsolute) {
                target.bind('preAbsolute.ScrollToFixed', base.options.preAbsolute);
            }
            if (base.options.postAbsolute) {
                target.bind('postAbsolute.ScrollToFixed', base.options.postAbsolute);
            }
            if (base.options.fixed) {
                target.bind('fixed.ScrollToFixed', base.options.fixed);
            }
            if (base.options.unfixed) {
                target.bind('unfixed.ScrollToFixed', base.options.unfixed);
            }

            if (base.options.spacerClass) {
                spacer.addClass(base.options.spacerClass);
            }

            target.bind('resize.ScrollToFixed', function() {
                spacer.height(target.height());
            });

            target.bind('scroll.ScrollToFixed', function() {
                target.trigger('preUnfixed.ScrollToFixed');
                setUnfixed();
                target.trigger('unfixed.ScrollToFixed');
                checkScroll();
            });

            target.bind('detach.ScrollToFixed', function(ev) {
                preventDefault(ev);

                target.trigger('preUnfixed.ScrollToFixed');
                setUnfixed();
                target.trigger('unfixed.ScrollToFixed');

                $(window).unbind('resize.ScrollToFixed', windowResize);
                $(window).unbind('scroll.ScrollToFixed', windowScroll);

                target.unbind('.ScrollToFixed');

                //remove spacer from dom
                spacer.remove();

                base.$el.removeData('ScrollToFixed');
            });

            // Reset everything.
            windowResize();
        };

        // Initialize the plugin.
        base.init();
    };

    // Sets the option defaults.
    $.ScrollToFixed.defaultOptions = {
        marginTop : 0,
        limit : 0,
        bottom : -1,
        zIndex : 1000,
        baseClassName: 'scroll-to-fixed-fixed'
    };

    // Returns enhanced elements that will fix to the top of the page when the
    // page is scrolled.
    $.fn.scrollToFixed = function(options) {
        return this.each(function() {
            (new $.ScrollToFixed(this, options));
        });
    };
})(jQuery);