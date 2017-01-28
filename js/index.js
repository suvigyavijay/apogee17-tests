(function (window, $) {
  
  $(function() {
    
    
    $('.ripple').hover(function (event) {
      event.preventDefault();
      
      var myel = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      

      
      myel.addClass('ripple-effect');
      myel.appendTo($(this));
      
      var ripple = $(".ripple-effect");
      
      ripple.css("height", $(this).height());
      ripple.css("width", $(this).width());
//      ripple.css("border-radius", $(this).width());
      ripple.css("overflow", "hidden");
      myel.css({
          top: yPos - (ripple.height()/2),
          left: xPos - (ripple.width()/2),
          background: $(this).data("ripple-color")
        });
      
//      window.setTimeout(function(){
//        myel.remove();
//      }, 2000);
    });
    
  });
  
})(window, jQuery);