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
    $("header").css("display","block");
 });
$('#logo-prin').click(function(){
    $("header").css("display","none");
 });
$('h1').click(function(){
    $("header").css('display','none');
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

// BURGER 

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

// TIMELINE