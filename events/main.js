$('.portfolio-item .bg').each(function() {
  var bg_color = $(this).data('color');
  $(this).css('background-color', bg_color);
})

$('.portfolio-item a').mouseenter(function() {
  $(this).find('.bg').css('transform','scale(1.1)');
}).mouseleave(function(){
  $(this).find('.bg').css('transform','scale(1)');
})

$('.portfolio-item a').click(function() {
  $(this).find('.bg').css({
    transform: 'scale(1.1)',
    transform: 'scaleX(3)'
  })
  $('.panel1').css('background-color', $(this).find('.bg').css('background-color'));
  console.log(1);
  $('.litebox > div').css('transform', 'scaleY(1)')
  $('.litebox').show();
})

$('.menuButton').click(function() {
  $('.litebox > div').css({
    transform: 'scaleY(0)',
    transition: 'all 200ms linear'
  })
  
  setTimeout(function() {
    $('.litebox').hide()
  },210);
  
})

$('.downArrow').mouseenter(function() {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '0px');
}).mouseleave(function() {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '-438px');
})

$('.upArrow').mouseenter(function() {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '0px');
}).mouseleave(function() {
  $(this).find('.arrowLineOver').css('stroke-dashoffset', '-438px');
})