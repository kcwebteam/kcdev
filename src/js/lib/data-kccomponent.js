$(function () {
  $('[data-kccomponent]').each(function () {
    var $this = $(this),
      url = $this.data('kccomponent') + '.aspx?a=true';
    $this.html('');

    $.ajax({
      type: 'GET',
      url: url
    }).done(function (data) {
      $this.append(data);
      // for datedlist popovers          
      $('.popoveritem').popover();
    });
  });
});