/****
* Set up for addthis sharing button
* Need King County PubID to gather stats http://support.addthis.com/customer/portal/articles/381265-addthis-sharing-endpoints#twitter
****/
var addThis = function($) {
    function addClickEvent(element, eventType) {
        $(element).click(function (event) {
            event.preventDefault();
            var pathname = $(location).attr('href');
            var left = ($(window).width() / 2) - (700 / 2);
            var top = ($(window).height() / 2) - (325 / 2);
            try {
                window.open('!{httpPrefix}//api.addthis.com/oexchange/0.8/forward/'+ eventType +'/offer?pubid=ra-547e0fb955b81113&url=' + pathname, eventType +' popup', 'scrollbars=no, height=325, width=700, top=' + top + ', left=' + left);
            }
            catch (e) {
                window.open('!{httpPrefix}//api.addthis.com/oexchange/0.8/forward/'+ eventType +'/offer?pubid=ra-547e0fb955b81113&url=' + pathname, eventType + 'popup');
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

(function ($) {
    addThis.init();
}(jQuery));