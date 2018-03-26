// Description: If no img alt exists, insert alt=""
$('img:not([alt])').attr('alt', '""');