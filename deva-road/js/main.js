document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY > 300) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});



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