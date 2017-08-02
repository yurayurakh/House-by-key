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
!function(t,i,e){"use strict";function s(t,i){this.element=t,this.layers=t.getElementsByClassName("layer");var e={calibrateX:this.data(this.element,"calibrate-x"),calibrateY:this.data(this.element,"calibrate-y"),invertX:this.data(this.element,"invert-x"),invertY:this.data(this.element,"invert-y"),limitX:this.data(this.element,"limit-x"),limitY:this.data(this.element,"limit-y"),scalarX:this.data(this.element,"scalar-x"),scalarY:this.data(this.element,"scalar-y"),frictionX:this.data(this.element,"friction-x"),frictionY:this.data(this.element,"friction-y"),originX:this.data(this.element,"origin-x"),originY:this.data(this.element,"origin-y"),pointerEvents:this.data(this.element,"pointer-events"),precision:this.data(this.element,"precision")};for(var s in e)null===e[s]&&delete e[s];this.extend(this,r,i,e),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var o="Parallax",n=30,r={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!0,precision:1};s.prototype.extend=function(){if(arguments.length>1)for(var t=arguments[0],i=1,e=arguments.length;e>i;i++){var s=arguments[i];for(var o in s)t[o]=s[o]}},s.prototype.data=function(t,i){return this.deserialize(t.getAttribute("data-"+i))},s.prototype.deserialize=function(t){return"true"===t?!0:"false"===t?!1:"null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t},s.prototype.camelCase=function(t){return t.replace(/-+(.)?/g,function(t,i){return i?i.toUpperCase():""})},s.prototype.transformSupport=function(s){for(var o=i.createElement("div"),n=!1,r=null,a=!1,h=null,l=null,p=0,m=this.vendors.length;m>p;p++)if(null!==this.vendors[p]?(h=this.vendors[p][0]+"transform",l=this.vendors[p][1]+"Transform"):(h="transform",l="transform"),o.style[l]!==e){n=!0;break}switch(s){case"2D":a=n;break;case"3D":if(n){var c=i.body||i.createElement("body"),u=i.documentElement,y=u.style.overflow,d=!1;i.body||(d=!0,u.style.overflow="hidden",u.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(o),o.style[l]="translate3d(1px,1px,1px)",r=t.getComputedStyle(o).getPropertyValue(h),a=r!==e&&r.length>0&&"none"!==r,u.style.overflow=y,c.removeChild(o),d&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return a},s.prototype.ww=null,s.prototype.wh=null,s.prototype.wcx=null,s.prototype.wcy=null,s.prototype.wrx=null,s.prototype.wry=null,s.prototype.portrait=null,s.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),s.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],s.prototype.motionSupport=!!t.DeviceMotionEvent,s.prototype.orientationSupport=!!t.DeviceOrientationEvent,s.prototype.orientationStatus=0,s.prototype.motionStatus=0,s.prototype.propertyCache={},s.prototype.initialise=function(){s.prototype.transform2DSupport===e&&(s.prototype.transform2DSupport=s.prototype.transformSupport("2D"),s.prototype.transform3DSupport=s.prototype.transformSupport("3D")),this.transform3DSupport&&this.accelerate(this.element);var i=t.getComputedStyle(this.element);"static"===i.getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},s.prototype.updateLayers=function(){this.layers=this.element.getElementsByClassName("layer"),this.depthsX=[],this.depthsY=[];for(var t=0,i=this.layers.length;i>t;t++){var e=this.layers[t];this.transform3DSupport&&this.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var s=this.data(e,"depth")||0;this.depthsX.push(this.data(e,"depth-x")||s),this.depthsY.push(this.data(e,"depth-y")||s)}},s.prototype.updateDimensions=function(){this.ww=t.innerWidth,this.wh=t.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},s.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},s.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},s.prototype.enable=function(){this.enabled||(this.enabled=!0,!this.desktop&&this.orientationSupport?(this.portrait=null,t.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):!this.desktop&&this.motionSupport?(this.portrait=null,t.addEventListener("devicemotion",this.onDeviceMotion),setTimeout(this.onMotionTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,t.addEventListener("mousemove",this.onMouseMove)),t.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},s.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?t.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?t.removeEventListener("devicemotion",this.onDeviceMotion):t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},s.prototype.calibrate=function(t,i){this.calibrateX=t===e?this.calibrateX:t,this.calibrateY=i===e?this.calibrateY:i},s.prototype.invert=function(t,i){this.invertX=t===e?this.invertX:t,this.invertY=i===e?this.invertY:i},s.prototype.friction=function(t,i){this.frictionX=t===e?this.frictionX:t,this.frictionY=i===e?this.frictionY:i},s.prototype.scalar=function(t,i){this.scalarX=t===e?this.scalarX:t,this.scalarY=i===e?this.scalarY:i},s.prototype.limit=function(t,i){this.limitX=t===e?this.limitX:t,this.limitY=i===e?this.limitY:i},s.prototype.origin=function(t,i){this.originX=t===e?this.originX:t,this.originY=i===e?this.originY:i},s.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},s.prototype.css=function(t,i,s){var o=this.propertyCache[i];if(!o)for(var n=0,r=this.vendors.length;r>n;n++)if(o=null!==this.vendors[n]?this.camelCase(this.vendors[n][1]+"-"+i):i,t.style[o]!==e){this.propertyCache[i]=o;break}t.style[o]=s},s.prototype.accelerate=function(t){this.css(t,"transform","translate3d(0,0,0)"),this.css(t,"transform-style","preserve-3d"),this.css(t,"backface-visibility","hidden")},s.prototype.setPosition=function(t,i,e){i=i.toFixed(this.precision)+"px",e=e.toFixed(this.precision)+"px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},s.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},s.prototype.onMotionTimer=function(){this.motionSupport&&0===this.motionStatus&&(this.disable(),this.motionSupport=!1,this.enable())},s.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},s.prototype.onWindowResize=function(){this.updateDimensions()},s.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.layers.length;s>e;e++){var o=this.layers[e],n=this.depthsX[e],r=this.depthsY[e],a=this.vx*(n*(this.invertX?-1:1)),h=this.vy*(r*(this.invertY?-1:1));this.setPosition(o,a,h)}this.raf=requestAnimationFrame(this.onAnimationFrame)},s.prototype.rotate=function(t,i){var e=(event.beta||0)/n,s=(event.gamma||0)/n,o=this.wh>this.ww;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=e,this.cy=s),this.ix=e,this.iy=s},s.prototype.onDeviceOrientation=function(t){var i=t.beta,e=t.gamma;this.desktop||null===i||null===e||(this.orientationStatus=1,this.rotate(i,e))},s.prototype.onDeviceMotion=function(t){var i=t.rotationRate.beta,e=t.rotationRate.gamma;this.desktop||null===i||null===e||(this.motionStatus=1,this.rotate(i,e))},s.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)},t[o]=s}(window,document),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),n=window.setTimeout(function(){i(s+o)},o);return t=s+o,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();
$(document).ready(function() {
    $("a").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});


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
(function(){

    var app = {

        initialize : function () {
            this.setUpListeners();
        },

        setUpListeners : function () {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input', app.removeError);
        },

        submitForm : function (e) {
            e.preventDefault();

            var form = $(this),
                submitBtn = form.find('button[type="submit"]');

            if ( app.validateForm(form) === false ) return false;

            submitBtn.attr('disabled', 'disabled');

            var str = form.serialize();

            $.ajax ({
                url: 'contact_form/contact_process.php',
                type: 'POST',
                data: str
            })
                .done(function(msg){
                    if(msg === "OK"){
                        setTimeout(function(){
                            $('.close-modal').click();
                        }, 150);
                        setTimeout(function(){
                            $('.success-modal').click();
                        }, 500);
                        setTimeout(function(){
                            $('.close-modal').click();
                        }, 3000);
                    } else {
                        form.html(msg);
                    }
                })
                .always(function(){
                    submitBtn.removeAttr('disabled');
                });
        },

        validateForm : function (form) {
            var inputs = form.find('input[type="tel"]'),
                valid = true;

            $.each(inputs, function(index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.form-group');

                if (val.length === 0) {
                    formGroup.addClass('has-error').removeClass('has-success');
                    valid = false;
                }else {
                    formGroup.addClass('has-success').removeClass('has-error');
                }
            });

            return valid;
        },

        removeError : function () {
            $(this).parents('.form-group')  .removeClass('has-error')
        }
    }

    app.initialize();

}());
