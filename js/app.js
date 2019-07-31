const img = document.querySelector('.what-container');

img.addEventListener('click', function() {
    
   img.classList.add('what-img');
});

 //window scroll stciky navbar

 $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
       $('.navbar').addClass('navbar-background');
       $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
       $('.navbar').removeClass('fixed-top');
    }
 });

 //smooth scroll
 $('.nav-item a, .navbar-icons, #back-to-top').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
       scrollTop: $(target).offset().top -85
    }, 2000);

 });

  $('.parent-container').magnificPopup({
     delegate: 'a', // child items selector, by clicking on it popup will open
     type: 'image',
     // other options
     gallery: {
        // options for gallery
        enabled: true
     }
  });

// back to top
$(window).scroll(function() {
   let position = $(this).scrollTop();
   if (position >= 718) {
      $('#back-to-top').addClass('scrollTop');
   } else {
      $('#back-to-top').removeClass('scrollTop');
   }
});

  /*  if ($('#back-to-top').length) {
     var scrollTrigger = 100, // px
        backToTop = function () {
           var scrollTop = $(window).scrollTop();
           if (scrollTop > scrollTrigger) {
              $('#back-to-top').addClass('show');
           } else {
              $('#back-to-top').removeClass('show');
           }
        };
     backToTop();
      $(window).on('scroll', function () {
        backToTop();
     });
     $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
           scrollTop: 0
        }, 200);
     }); 
  }  */
