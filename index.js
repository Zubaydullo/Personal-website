// This is Dark Mode stuff
const options = {
  bottom: '32px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '30px', // default: 'unset'
  time: '0.6s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

$(document).ready(function(){

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
      $('html').animate({scrollTop : 0},800);
  });

  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $(".top-section").height()-150);
  });
  
  // Animation on Scroll 
  AOS.init();



});









