jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 45) {
    jQuery("header").addClass("fixed-header");
  } else {
    jQuery("header").removeClass("fixed-header");
  }
});

// Navbar 

(function ($) {
  $(function () {

    $('#navbar-toggle').click(function () {
      $('nav ul').slideToggle();
    });

    $('#navbar-toggle').on('click', function () {
      this.classList.toggle('active');
    });

    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    $('html').click(function () {
      $('.navbar-dropdown').hide();
    });
  });
})(jQuery);


$('.owl-carousel-1').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: 3000,
  navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$(".owl-carousel-2").owlCarousel({
  items: 4,
  margin: 20,
  loop: true,
  autoplay: false,
  autoplayTimeout: 4000,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})

$(document).ready(function () {
  $(".owl-carousel-1").owlCarousel();
  $(".owl-carousel-2").owlCarousel();
});


jQuery(function () {
  jQuery("#header").load("include/header.html");
  jQuery("#footer").load("include/footer.html");
});

// Loader while loading

window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});