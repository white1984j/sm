/*
$(function() {
    if( $(window).width() > 1199 ){
        if( $('.product-section').length > 0){
            $('.product-section').each(function () {
                var height = 0;
                if( $('.product-section_big-img').length > 0){
                    var imgHeight = $(this).find('.product-section_big-img').height();
                    var textHeight = $(this).find('.product-section-big-text').height();
                    if( imgHeight > textHeight)
                        height = imgHeight;
                    else
                        height = textHeight;
                    $('.product-section_big-img').height(height);
                    $('.product-section-big-text').height(height);
                }
            })
        }
    }
});
*/
$(function() {
    if( $(window).width() > 1199 ){
        if( $('.product-section').length > 0){
            $('.product-section').each(function () {
                var height = 0;
                if( $('.product-section_big-img').length > 0){
                    var imgHeight = 0;
                    var textHeight = $(this).find('.product-section-big-text').height();
                    $('.product-section_big-img').height(textHeight);
                }
            })
        }
    }
});

$(document).ready(function() {
    $("a.ancLinks").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });

    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    //E-mail Ajax Send
    $("#form_phone").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо за обращение!");
            $.magnificPopup.close();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //E-mail Ajax Send
    $("#form_dostavka").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "maill.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо за обращение!");
            $.magnificPopup.close();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

//tabs
$(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});

//big slider
$(function(){
    $('.bg-slider').slick({
        arrows: false,
        autoplay: true,
        speed: 800,
        utoplaySpeed: 2000,
    })
});
