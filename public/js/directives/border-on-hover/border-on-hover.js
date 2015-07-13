app.directive('borderOnHover',function(){
  return{
    restrict: 'A',
    link: function(scope,element,attribute){
      element.on('mouseenter',function(){
        // element.css({"border":"black 3px solid"});
        element.addClass('bordered');
      });

      element.on('mouseleave',function(){
        // element.css({"border":"none"});
        element.removeClass('bordered');
      });

    }
  };
});