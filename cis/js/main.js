jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 45) {
    jQuery("header").addClass("fixed-header");
  } else {
    jQuery("header").removeClass("fixed-header");
  }
});


jQuery(document).ready(function () {
  jQuery(".glimpse-carousel").owlCarousel();
  jQuery(".cambride-carousel").owlCarousel();
  jQuery(".recognition-carousel").owlCarousel();
});


jQuery('.recognition-carousel').owlCarousel({
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

$('.glimpse-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})


$('.cambride-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
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

$('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
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

jQuery(function () {
  jQuery("#header").load("include/header.html");
  jQuery("#footer").load("include/footer.html");
});

// Loader while loading

window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});

jQuery('.counter-count').each(function () {
  jQuery(this).prop('Counter', 0).animate({
    Counter: jQuery(this).text()
  }, {
    duration: 5000,
    easing: 'swing',
    step: function (now) {
      jQuery(this).text(Math.ceil(now));
    }
  });
});



$(document).ready(function () {
  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(".content").removeClass("active");

    $(this).addClass("active");

    var tabIndex = $(this).index();
    $(".content").eq(tabIndex).addClass("active");
  });

  $(".tab:first").addClass("active");
  $(".content:first").addClass("active");
});