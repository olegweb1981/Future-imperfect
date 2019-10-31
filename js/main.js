
/*
$(document).ready(main);

var main = function() { //главная функция

    $('.nav').click(function() { //выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике

        $('.is-menu-visible').animate({ //выбираем класс menu и метод animate

            translateX: '0px' //теперь при клике по иконке, меню, скрытое за
               левой границей на 467px, изменит свое положение на 0px и станет видимым

        }, 200); //скорость движения меню в мс
        
        $('body').animate({ //выбираем тег body и метод animate

            translateX: '467px' //чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 467px

        }, 200); //скорость движения меню в мс
    });
}
*/


/*
$(window).load(function () {
    $("[data-toggle]").click(function () {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("is-menu-visible");
    });
});
*/


/*
var nav = document.getElementsByClassName('mav');
var par = document.getElementsByClassName('menu');
nav.onclick = function() {
  par.classList.add("nav--menu");
}
*/