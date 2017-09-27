var preventClick = false;

$('#ThisLink').click(function(e) {
    $(this)
       .css('cursor', 'default')
       .css('text-decoration', 'none')

    if (!preventClick) {
        $(this).html($(this).html() + ' ');
    }

    preventClick = true;

    return false;
});
