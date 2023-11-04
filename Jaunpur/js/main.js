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


$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: 3000,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

// Including Header Footer

// function loadContent(file, elementId) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       document.getElementById(elementId).innerHTML = xhr.responseText;
//     }
//   };
//   xhr.open("GET", file, true);
//   xhr.send();
// }

// loadContent("include/header.html", "header");
// loadContent("include/footer.html", "footer");

// loadContent("../include/campus-header.html", "campus-header");
// loadContent("../include/campus-footer.html", "campus-footer");


jQuery(function () {
  jQuery("#header").load("include/header.html");
  jQuery("#footer").load("include/footer.html");
});

// Loader while loading

window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});