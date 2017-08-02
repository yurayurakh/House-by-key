(function( $ ) {
    $.fn.selectbox = function() {

        // начальные параметры
        // задаем стандартную высоту div'a.
        var selectDefaultHeight = $('.selectBox').height();
        // угол поворота изображения в div'e
        var rotateDefault = "rotate(0deg)";

        // после нажатия кнопки срабатывает функция, в которой
        // вычисляется исходная высота нашего div'a.
        // очень удобно для сравнения с входящими параметрами (то, что задается в начале скрипта)
        $('.selectBox').click(function() {
            $('.selectBox').removeClass('select-shadow').removeClass('z-index').height(selectDefaultHeight);
            if ($(".selectBox").parent().find('img.arrow').hasClass("open-arrow")){
                $(".selectBox").parent().find('img.arrow').css({transform: "rotate(0)"});
            }
            $(this).toggleClass('select-shadow').toggleClass('z-index');
            // вычисление высоты объекта методом height()
            var currentHeight = $(this).height();
            // проверка условия на совпадение/не совпадение с заданной высотой вначале,
            // чтобы понять. что делать дальше.
            if (currentHeight < 30 || currentHeight == selectDefaultHeight) {
                // если высота блока не менялась и равна высоте, заданной по умолчанию,
                // тогда мы открываем список и выбираем нужный элемент.
                var count = $(this).children().children().length;
                var el = count * 45;
                switch (count){
                    case (1):
                        el = count * 70;
                        break;
                    case (2) :
                        el = count * 50;
                        break;
                    default :
                        el = count * 45;
                }
                $(this).height(el);  // «точка остановки анимации»
                // здесь стилизуем нашу стрелку и делаем анимацию средствами CSS3
                $(this).parent().find('img.arrow').css({borderRadius: "1000px", transition: ".2s", transform: "rotate(180deg)"});
                $(this).parent().find('img.arrow').toggleClass("open-arrow");
            }


            // иначе если список развернут (высота больше или равна 250 пикселям),
            // то при нажатии на абзац с классом valueTag, сворачиваем наш список и
            // и присваиваем блоку первоначальную высоту + поворот стрелки в начальное положение
            if (currentHeight > 30) {
                $(this).height(selectDefaultHeight);
                $(this).parent().find('img.arrow').css({transform: rotateDefault});
            }
        });

        // так же сворачиваем список при выборе нужного элемента
        // и меняем текст абзаца на текст элемента в списке
        $('li.option').click(function() {
            $(this).parent().parent().height(selectDefaultHeight);
            $(this).parent().parent().find('img.arrow').css({transform: rotateDefault});
            $(this).parent().parent().find('p.valueTag').text($(this).text());
        });
    };
})( jQuery );