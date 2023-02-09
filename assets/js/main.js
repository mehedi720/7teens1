//scroll or spyscroll
$(function(){
    $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active-it', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0  
    });
  });

  //nav_menu
  $(document).ready(function(){
    let nav = $(".navbar");
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
    });


  //main slider
  $('#hero_slide').owlCarousel({
    items:1,
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 6000,
});

//team slider
$('#team_slide').owlCarousel({
  items:4,
  loop:true,
  margin: 20,
  nav:true,
  dots:false,
  autoplay: true,
  smartSpeed: 500,
  autoplayTimeout: 6000,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true,
      margin: 20,
      stagePadding:50
  },
  600:{
      items:3,
      nav:false
  },
  1000:{
      items:5,
      nav:true,
  }

  }
})


//Testimonial Slider
let testimonialSlider = $('#testimonial_slide').owlCarousel({
  items: 1,
  loop: true,
  nav: false, //navigation off
  dots: true,
  dotsEach: true,
  autoplay: true,
  smartSpeed: 500,
  autoplayTimeout: 4000,
  dotsContainer: ".testimonial-profile-nav",
  rewind: true,

 
});

//change slides when clicked
$(".profile-nav-item").on("click", function(){
  testimonialSlider.trigger("to.owl.carousel", [$(this).index(), 1000])
});

let galleryFilter = $(".gallery-filter").isotope({
  itemSelector:".gallery-item",
  masonry: {
    columnWidth: 80
  }
});
$(".gl-btn-wrapper").on("click", "span", function(){
  let filterValue = $(this).attr("data-filter");
  galleryFilter.isotope({
   filter:  filterValue,
  });
  console.log(filterValue);
})

 $(".gl-btn-wrapper").each(function(i, itemGl){
  let item  = $(itemGl);
  item.on("click", 'span', function(){
    item.find(".btn-danger").removeClass("btn-danger").addClass("btn-danger-outline");
    $(this).addClass("btn-danger").removeClass("btn-danger-outline");
    
  });
  
 });



  });


  



  var wind = $(window);
  wind.on("scroll",function () {
    var bodyScroll = wind.scrollTop(),
        navbar = $(".navbar"),
        logo = $(".navbar .navbar-brand > img");
    if(bodyScroll > 100){
        navbar.addClass("bg-body-tertiary shadow");
        logo.attr('src', 'assets/img/logo_black.png');
    }else{
        navbar.removeClass("bg-body-tertiary shadow-sm");
        logo.attr('src', 'assets/img/logo_white.png');
    }
});


  //light effect
  (function($) { "use strict";
        var textHolder = document.getElementsByClassName('style-text-slider')[0],
          text = textHolder.innerHTML,
          chars = text.length,
          newText = '',
          rnLet;

        for(let item of text){
          newText+= '<i name="light">' + item + '</i>';
        }
  
        textHolder.innerHTML = newText;

        var letters = document.querySelectorAll('[name="light"]'),
        flickers = [5, 7, 9, 11, 13, 15, 17],
          randomLetter,
          flickerNumber,
          counter;

        function randomFromInterval(from,to) {
          return Math.floor(Math.random()*(to-from+1)+from);
        }
  
        function hasClass(element, cls) {
          return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
  
        function flicker(elementRef) {		
          counter += 1;
          
          if (counter === flickerNumber) {
            return;
          }
  
          setTimeout(function () {
            if( rnLet.className == '') {
             rnLet.className = 'off';
            }
            else {
              rnLet.className = '';
            }
            flicker();
          }, 30);
        }
  
        (function loop() {
          var rand = randomFromInterval(300,1800);
  
          randomLetter = randomFromInterval(0, letters.length);
          rnLet = letters[randomLetter];
          
          flickerNumber = randomFromInterval(0, 7);
          flickerNumber = flickers[flickerNumber];
  
          setTimeout(function() {
              counter = 0;
              flicker();
              loop();  
          }, rand);
        }());
      })(jQuery);