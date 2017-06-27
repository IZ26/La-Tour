// NAVIGATION
$('#menuheader>li').hover(function() {
    $('#menuheader>li').addClass('fadeout'); 
    $(this).removeClass('fadeout');
}, function(){
    $('#menuheader>li').removeClass('fadeout');
});

// SCROLL DOWN ARROW
$('.scroll-arrow').click(function(){
    $("html, body").animate({ scrollTop:$('.main').offset().top}, 1000);
    return false;
 });

$('.scroll-arrow1').click(function(){
    $("html, body").animate({ scrollTop:$('.slider').offset().top}, 1000);
    return false;
 });

$('#button1').click(function(){
    $("#andreI-bio").css('display','inline-block');
    $(".claude").css('display','none');
    $(".andreII").css('display','none');
    $("#shape").css('display','none');
 });
$('#button2').click(function(){
    $("#claude-bio").css('display','inline-block');
    $(".andreI").css('display','none');
    $(".andreII").css('display','none');
    $("#shape").css('display','none');
 });
$('#button3').click(function(){
    $("#andreII-bio").css('display','inline-block');
    $(".andreII").css('float','right');
    $(".claude").css('display','none');
    $(".andreI").css('display','none');
    $("#shape1").css('display','none');
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


