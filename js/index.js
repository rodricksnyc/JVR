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

// var contactform =  document.getElementById('secureform');
// contactform.setAttribute('action', '//formspree.io/' + 'rodricksnyc' + '@' + 'gmail' + '.' + 'com');
