
$(document).ready(function () {
  // header javascript code //
  $(".humbarger-box").click(function(){
    $(".humbarger-box").toggleClass("show");
    $(".nav").toggleClass("show-menu");
  });   
                 
     // compay  //
     $('.company-box').owlCarousel({    
         dots: false,
         loop: true,
         autoplay: true, 
         center:true,
         autoplayTimeout:3000,
         margin: 10,
         smartSpeed:350,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav: false,
                loop:true,
            },
            600:{
                items:5,
                nav: false,
                loop:true,
            },
            1000:{
                items:6,
                nav:false,
                loop:true,
            }
        }
     })
  
    //team-section //
    $('.main-team').owlCarousel({    
        dots: false,              
          margin: 10,
        smartSpeed:350,
       responsiveClass:true,
       responsive:{
           0:{
               items:2,
               nav: false,
               loop:true,
           },
           600:{
               items:4,
               nav: false,
              
           },
           1000:{
               items:4,
               nav:false,
               
           }
       }
    })
    
    
    //  testimonial//
    $('#testimonial').owlCarousel({ 
       
      loop: true,
      autoplay: true, 
      smartSpeed: 300,
     
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false,
            loop: true,
        },
        600:{
            items:1,
            nav: false,
            loop: true,
        },
        1000:{
            items:1,
            nav:false,
            loop: true,
        }
    }
    
    })
        
  // owlCarousel active //
    $('.owl-carousel').owlCarousel({    
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false,
            loop:true,
        },
        600:{
            items:2,
            nav: false,
            loop:true,
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
        }
    }
})
  
 

 

});


