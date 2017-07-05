// NAVIGATION
$('#menuheader>li.dropdownmenu').hover(function() {
    $('#menuheader>li').addClass('fadeout'); 
    $(this).removeClass('fadeout');
}, function(){
    $('#menuheader>li').removeClass('fadeout');
});

$('.menuheader>li').hover(function() {
    $('.menuheader>li').addClass('fadeout'); 
    $(this).removeClass('fadeout');
}, function(){
    $('.menuheader>li').removeClass('fadeout');
});

// TEXT
$('.button-show-more').click(function(){
    $(".more-text").css("display","block");
    $(".more-text>p").addClass('fadeInUp')
    $(".button-hide-text").css("display","block");
    $(".button-show-more").css('display','none');
 });
$('.button-hide-text').click(function(){
    $(".more-text").css("display","none");
    $(".button-hide-text").css("display","none");
    $(".button-show-more").css('display','block');
 });

// BURGER
$('.menu-icon').click(function(){
    $("header").addClass('header-show');
    $('.menu-icon').css('opacity','0');
    $('.hidemenuresponsive').css('opacity','1');
 });
$('#logo-prin').click(function(){
    $("header").removeClass("header-show");
    $('.menu-icon').css('opacity','1');
 });
$('.hidemenuresponsive').click(function(){
    $("header").removeClass('header-show');
    $('.hidemenuresponsive').css('display','none');
    $('.menu-icon').css('opacity','1')
 });


// SCROLL DOWN ARROW
$('.scroll-arrow').click(function(){
    $("html, body").animate({ scrollTop:$('.main').offset().top}, 1000);
    return false;
 });

$('.scroll-arrow1').click(function(){
    $("html, body").animate({ scrollTop:$('.end').offset().top}, 1000);
    return false;
 });
$('.scroll-arrow2').click(function(){
    $("html, body").animate({ scrollTop:$('.information').offset().top}, 1000);
    return false;
 });

// TERAIL FAMILY

$('#button1').click(function(){
    $(".andreI-bio").addClass('bio-appear');
    $(".claude").addClass('picture-move1');
    $(".andreII").addClass('picture-move2');
 });
$('#button2').click(function(){
    $(".claude-bio").addClass('bio-appear');
    $(".claude").addClass('picture-move3');
    $(".andreI").addClass('picture-move');
    $(".andreII").addClass('picture-move2');
 });
$('#button3').click(function(){
    $(".andreII-bio").addClass('bio-appear');
    $(".andreII").css('float','right');
    $(".claude").addClass('picture-move');
    $(".andreI").addClass('picture-move');
 });

$('#button-close1').click(function(){
    $(".andreI-bio").removeClass('bio-appear');
    $(".claude").removeClass('picture-move1');
    $(".andreII").removeClass('picture-move2');
 });
$('#button-close2').click(function(){
    $(".claude-bio").removeClass('bio-appear');
    $(".claude").removeClass('picture-move3');
    $(".andreI").removeClass('picture-move');
    $(".andreII").removeClass('picture-move2');
 });
$('#button-close3').click(function(){
    $(".andreII-bio").removeClass('bio-appear');
    $(".claude").removeClass('picture-move');
    $(".andreI").removeClass('picture-move');
});

// RESERVATION
$('.sous-elem11').click(function(){
    $(".reservation").addClass('reservation-form');
    console.log('ok');
});
$('#button-close').click(function(){
    $(".reservation").removeClass('reservation-form');
});


// FUNCTION SWIPER 
 var swiper = new Swiper('.swiper-container', {
     
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
}); 
