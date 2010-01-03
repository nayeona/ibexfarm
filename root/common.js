// IE caches all ajax GET requests, so when using IE always use POST.
/*@cc_on
$.getJSON=function(uri,callback){return $.post(uri,{},callback,"json");}
@*/

$(document).ready(function () {
    // XHTML standards compliance idiocy.
    $("a[rel=external]").attr('target', '_blank');

    // Move to error/message div if there is one on the page.
    var e = $(".error");
    if (e.length) {
        $(e[0]).attr('id', 'error');
        window.location = '#error';
    }
    else {
        var m = $(".message");
        if (m.length) {
            $(m[0]).attr('id', 'message');
            window.location = '#message';
        }
    }
});
