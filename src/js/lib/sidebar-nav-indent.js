$(function(){
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

  $('#sidebar .panel .list-group.collapse').find('a.list-group-item').each(function () {
      $(this).css('padding-left', '+=10');
  });
   $('#sidebar .panel .list-group.collapse > .list-group.collapse').find('a.list-group-item').each(function () {
      $(this).css('padding-left', '+=10');
  });
   
  $('#sidebar .panel a.list-group-item[data-toggle]').each(function () {
    $(this).addClass('collapsed');
  });
  var activeSidebarItem = $('.sidebar-offcanvas .list-group-item.active');
  $(activeSidebarItem).each(function( index) {
    $(this).css('padding-left', '-=6');
  });
});