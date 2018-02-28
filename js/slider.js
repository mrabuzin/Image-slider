$("#right").click(function(){
    $("img:last").detach().insertBefore("img:first");
});

$("#left").click(function(){
    $("img:first").detach().insertAfter("img:last");
});
