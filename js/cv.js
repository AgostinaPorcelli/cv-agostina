;( function( $ ) {
    "use strict";
    
    var $bars = $( ".bar" ),
      methods = {
        init: function() {
          
          // Bind events
          methods.bindEvents();
          
        },
        bindEvents: function() {
  
          // Loop through each of the bars...
          $bars.each( function() {
  
            var $bar = $( this ),
              $pct = $bar.find( ".pct" ),
              data = $bar.data( "bar" );
  
            setTimeout( function() {
  
              $bar
                .css( "background-color", data.color )
                .animate({
                  "width": $pct.html()
                }, data.speed || 3000, function() {
  
                  $pct.css({
                    "color": data.color,
                    "opacity": 1
                  });
  
                });
  
            }, data.delay || 0 );     
  
          });
  
        }
      };
    
    // Initialize on page load
    methods.init(); 
      
  })( jQuery );


  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });
