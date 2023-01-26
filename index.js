// $(document).ready({

// });

function showMenu() {
  if($('.burger-menu').hasClass('burger-white')){
    $('.burger-menu').removeClass('burger-white');
    $('.burger-menu').addClass('burger-dark');
    $('header>nav').show();
    $('header>img').hide();
  }else{
    $('.burger-menu').removeClass('burger-dark');
    $('.burger-menu').addClass('burger-white');
    $('header>nav').hide();
    $('header>img').show();
  }
}