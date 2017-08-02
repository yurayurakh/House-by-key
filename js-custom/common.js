$(document).ready(function() {
    $('.hides-how').hide();

    $('.btn-how').click(function(){
        $('.hides-how').slideToggle(1000);
        $(this).toggleClass('arrow-up');
        if( $(this).text() != 'Скрыть'){
            $(this).parent().parent().prev().find('.how-opacity').removeClass('opacity');
            $(this).text('Скрыть');
        }else {
            $(this).text('Показать полностью');
            $(this).parent().parent().prev().find('.how-opacity').addClass('opacity');
        }
        return false;
    });

    $('.hides-question').hide();

    $('.btn-question').click(function(){
        $('.hides-question').slideToggle(1000);
        $(this).toggleClass('arrow-up');
        if( $(this).text() != 'Скрыть'){
            $(this).parent().parent().find('.how-opacity').removeClass('opacity');
            $(this).text('Скрыть');
        }else {
            $(this).text('Показать полностью');
            $(this).parent().parent().find('.how-opacity').addClass('opacity');
        }
        return false;
    });

    $('.hides-answer').hide();

    $('.question').click(function(){
        $(this).toggleClass('question-open').next().slideToggle(300);
        return false;
    });

    $('selector').selectbox();
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    $(function(){
        $('.minimized').click(function(event) {
            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i>x</i></div></div>');
            $('#magnify').css({
                left: ($(document).width() - $('#magnify').outerWidth())/2,
                // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                top: ($(window).height() - $('#magnify').outerHeight())/2-100
            });
            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #overlay', function(event) {
            event.preventDefault();

            $('#overlay, #magnify').fadeOut('fast', function() {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });

});