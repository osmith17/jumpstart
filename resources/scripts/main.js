$(document).ready(function(){

  $('.carousel').slick({
    autoplay:true,
    autoplaySpeed:4000,
    arrows:false,
    slidesToScroll:1,
    pauseOnFocus:false,
    pauseOnHover:false,
    draggable:false

  });

  var userScroll = 0;
  $(window).scroll(function(){
    var topScroll = $(this).scrollTop();
    if ((topScroll-userScroll)>50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      userScroll=topScroll;
    } else if((userScroll-topScroll)>50){
      $('.navbar').animate({top: '0px'}, 150);
      userScroll=topScroll;
    }
  });
});
