$(document).on('ready',function(){
    $('.orange-square-one').on('click',function(){
        $('#drop-down-brand').css('display','block');
        $('.orange-square-two').on('click',function(){
         $('#drop-down-product').css('display','block');
        });
        $('.a').on('click',function(){
            var text = $(this). html();
            $('#text-one').val(text);
            $('#drop-down-brand').css('display','none')
        });
        $('.b').on('click',function(){
            var text = $(this). html();
            $('#text-two').val(text);
            $('#drop-down-product').css('display','none')
        });
    });
});























