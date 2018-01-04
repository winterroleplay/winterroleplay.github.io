/*
 * Главный JavaScript файл предназначеный для работы сайта
 * Version: 0.1
 */

function fly_p(name, text){
    console.log(name == "success");
    if(name == "success") {
        $("#success_msg").html(text);
        $('.absoluter').addClass('dispblck');
        $('.absoluter .nice').addClass('animated fadeInUp');
    } else {
        $("#error_msg").html(text);
        $('.absoluterone').addClass('dispblck');
        $('.absoluterone .bad').addClass('animated fadeInUp');
    }

    setTimeout(function () {
        fly_r()
    }, 5000);
}
function fly_r(id) {
    $('.absoluterone .bad').removeClass('fadeInUp');
    $('.absoluterone .bad').addClass('fadeOutUp');
    setTimeout(function() {
        $('.absoluterone').removeClass('dispblck');
        $('.absoluterone .bad').removeClass('animated fadeOutUp');
    }, 1000);

    $('.absoluter .nice').removeClass('fadeInUp');
    $('.absoluter .nice').addClass('fadeOutUp');
    setTimeout(function() {
        $('.absoluter').removeClass('dispblck');
        $('.absoluter .nice').removeClass('animated fadeOutUp');
    }, 1000);
}