$(function () {
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
});