(function ($) {
  'use strict';
  $.fn.eventsCalendar = function (options) {
    var settings = $.extend({
      url: '',
      calNum: '69gk-ky9a',
      numItems: 4,
      title: 'Events',
      titleIcon: 'fa-calendar',
      allItemsUrl: '//www.kingcounty.gov/about/news/events',
      allItemsText: 'See all events',
      version: 1
    }, options);

    // Deprecate after moving to ver 2.0
    (settings.version === 2 && settings.callNum === '69gk-ky9a') ? settings.calNum = 'wv5q-a3ty' : settings.calNum = settings.calNum;

    var $this = this;
    var allpops = [];

    return this.each(function () {
      $this.append('<span class="fa fa-spinner fa-spin fa-4x"></span>');

      // Build URL String
      // TODO: Today's date to 12 months. The return obj may be events too far in the future
      var dataURL = '//data.kingcounty.gov/resource/' + settings.calNum +
        '.json?';

      // if (settings.filter) {
        //   dataURL += '&$q=' + settings.filter
        // }

      if (settings.url) {
        dataURL = settings.url;
      }

      // Format date: YYYY-MM-DD
      // https://data.kingcounty.gov/resource/grxi-zqg2.json?&$order=start_time&$where=start_time%3E'2019-03-01'
      var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      d = "'" + [year, month, day].join('-') + "'";

      dataURL += '&$order=start_time&$where=start_time>=' + d + '&$$app_token=bCoT94x6NcBsw8AGGZudTwOs7';

      $.ajax({
        url: dataURL,
        dataType: 'json',
        jsonp: false
      })
        .success(function (data) {
          parseData(data);
        })
        .error(function () {
          crossDomainAjax(dataURL, parseData);
        });

      // Daylight savings time Remove when with 2.0
      Date.prototype.stdTimezoneOffset = function () {
        var jan = new Date(this.getFullYear(), 0, 1);
        var jul = new Date(this.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
      };

      Date.prototype.dst = function () {
        return this.getTimezoneOffset() < this.stdTimezoneOffset();
      };

      function parseData (data) {
        var counter = 0;

        $this.addClass('calendar-events-list');

        var output = '<h2><span class="fa-stack"><i class="fa fa-square fa-stack-2x"></i><i class="fa ' + settings.titleIcon + ' fa-stack-1x fa-inverse"></i> </span> ' + settings.title + '</h2>';

        $.each(data, function (i, item) {
          var date = new Date(item.end_time);

          // Deprecate after moving to ver 2.0
          if (settings.version !== 2) {
            date = new Date(0);
            date.setUTCSeconds(item.end_time);
            if (date.dst() && date.getHours() <= 1) {
              date.setHours(date.getHours() + 1);
            }
          }

          var currentDate = new Date();

          if (date >= currentDate && counter < settings.numItems) {
            output += '<div class="media"><div class="media-left">';
            var dateDay = date.getDate();
            output += '<div class="date-day">' + dateDay + '</div> ';
            output += '<div class="date-month">' + monthFormat(date.getMonth()) + '</div>';
            output += '</div>'; // end pull left div
            var city;
            var address;
            var location;
            var itemLocation;
            try {
              // Deprecate after moving to ver 2.0
              if (settings.version !== 2) {
                itemLocation = $.parseJSON(item.location.human_address);
                city = itemLocation.city;
                address = itemLocation.address;
              } else {
                city = item.location_city || 'Not available';
                address = item.location_address || 'Not available';
              }
            } catch (e) {
              city = 'Not available';
              address = 'Not available';
            }
            if (item.location_name !== undefined) {
              location = item.location_name;
            } else {
              location = 'Not available';
            }
            var popoverContent = 'Location: ' + location + '<br /> Address: ' + address + '<br /> City: ' + city;
            var url;
            try {
              url = item.url.url;
              // Deprecate after moving to ver 2.0
              if (settings.version === 2) {
                url = item.url;
              }
              // Remove protocol from string
              url = url.replace(/(^\w+:|^)/, '');
            } catch (e) {
              url = '\/about\/news\/events';
            }

            output += '<div class="media-body">';
            var eventName;
            if (item.event_name.search('<') === 0) {
              eventName = $(item.event_name).text();
            }else {
              eventName = item.event_name;
            }
            output += '<p><a class="pop" id="popover' + i + '"' + 'rel="popover" data-animation="true" data-html="true" data-placement="top" data-trigger="hover" data-delay="0"';
            output += 'data-content="' + popoverContent + '"';
            output += 'title="' + item.event_name + '"';
            output += 'href="' + url + '"';
            output += '>' + eventName + '</a></p>';
            output += '</div></div>'; // end media div
            allpops.push('#popover' + i);
            counter += 1;
          }
        });
        // If there are no active events output error message
        if (counter === 0) {
          output += '<div class="media"><div class="media-left">';
          output += '<div class="date-day"><i class="fa fa-info-circle"></i></div> ';
          output += '<div class="date-month"></div></div>';
          output += '<div class="media-body">';
          output += '<p>There are no upcoming events in this calendar.</p>';
          output += '</div></div>';
        }

        output += '<p class="all-events"><a href="' + settings.allItemsUrl + '"><em>' + settings.allItemsText + '</em></a></p>';

        $this.html(output);
        $(allpops).each(function (index) {
          $(allpops).popover();
        });
      }
      function crossDomainAjax (url, successCallback) {
        /* IE8 & 9 only Cross domain JSON GET request */
        if ('XDomainRequest' in window && window.XDomainRequest !== null) {
          var xdr = new XDomainRequest(); /* Use Microsoft XDR */
          /*
          * XDomainRequest object requires a method for each event handler,
          * even if anonymous, and to set properties explicitly
          */
          xdr.onload = function () {
            var JSON = $.parseJSON(xdr.responseText);
            if (JSON === null || typeof (JSON) === 'undefined') {
              JSON = $.parseJSON(data.firstChild.textContent);
            }
            successCallback(JSON);
          };
          xdr.onprogress = function () {};
          xdr.ontimeout = function () {};
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
              $this.addClass('calendar-events-list');
              var output = '';
              output += '<h2><span class="fa-stack"><i class="fa fa-square fa-stack-2x"></i><i class="fa ' + settings.titleIcon + ' fa-stack-1x fa-inverse"></i> </span> Events</h2>';
              output = '<iframe width="100%" height="425px" src="//data.kingcounty.gov/w/' + settings.calNum + '"frameborder="0" scrolling="no"></iframe>';
              output += '<p class="all-events"><a href="' + settings.allItemsUrl + '"><em>' + settings.allItemsUrl + '</em></a></p>';
              $this.html(output);
            }
          });
        }
      }
    });
    // Helper function for Events Calendar function
    function monthFormat (monthToFormat) {
      var month = [];
      month[0] = 'JAN';
      month[1] = 'FEB';
      month[2] = 'MAR';
      month[3] = 'APR';
      month[4] = 'MAY';
      month[5] = 'JUN';
      month[6] = 'JUL';
      month[7] = 'AUG';
      month[8] = 'SEP';
      month[9] = 'OCT';
      month[10] = 'NOV';
      month[11] = 'DEC';
      var formatedMonth = month[monthToFormat];
      return formatedMonth;
    }
  };
})(jQuery);
