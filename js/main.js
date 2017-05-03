$(document).ready(function(){
    // плавная прокрутка
    $('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
        return false;
    });

    // //слайдер с коментариями
    // $('.slide-coment').owlCarousel({
    //     loop:true,
    //     // margin:10,
    //     autoplay: true,
    //     nav:true,
    //     center: true,
    //     smartSpeed:1000, //Время движения слайда
    //     autoplayTimeout:6000, //Время смены слайда
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // });
    //
    // // слайдер с логотипами
    // $('.slide-partners').owlCarousel({
    //     loop:true, //Зацикливаем слайдер
    //     // margin:10, //Отступ от картино если выводите больше 1
    //     nav:false, //Отключил навигацию
    //     autoplay:true, //Автозапуск слайдера
    //     smartSpeed:2000, //Время движения слайда
    //     autoplayTimeout:4000, //Время смены слайда
    //     responsive:{ //Адаптация в зависимости от разрешения экрана
    //         0:{
    //             items:5
    //         },
    //         600:{
    //             items:5
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // });
    //
    // // слайдер с блогами
    // $('.slide-blog').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:3
    //         }
    //     }
    // });

    $('hide-menu').click( function () {
        $('portfolio-filtr').toggle(1000);
    });

});

