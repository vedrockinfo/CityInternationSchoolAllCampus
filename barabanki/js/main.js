jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 45) {
    jQuery("header").addClass("fixed-header");
  } else {
    jQuery("header").removeClass("fixed-header");
  }
});


jQuery(function () {
  jQuery("#header").load("include/header.html");
  jQuery("#footer").load("include/footer.html");
});

// Loader while loading

window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});


jQuery(document).ready(function () {
  jQuery(".signup-form").hide();

  jQuery("#login").click(function () {
    jQuery(".login-form").hide();
    jQuery(".signup-form").show();
  });

  jQuery("#signup").click(function () {
    jQuery(".signup-form").hide();
    jQuery(".login-form").show();
  });
});

jQuery(document).ready(function () {
  jQuery("#verify-number").hide();
  jQuery("#verify-otp").hide();
  jQuery("#otp-resent").hide();

  jQuery("#send-otp").click(function () {
    jQuery("#mobile-number").hide();
    jQuery("#verify-number").show();
    jQuery("#send-otp").hide();
    jQuery("#verify-otp").show();
  });

  jQuery("#backtonumber").click(function () {
    jQuery("#verify-number").hide();
    jQuery("#mobile-number").show();
    jQuery("#verify-otp").hide();
    jQuery("#send-otp").show();
  });

  jQuery('#resend-otp').click(function () {
    jQuery("#otp-resent").fadeIn("slow");
    setTimeout(function () {
      jQuery("#otp-resent").fadeOut("slow");
    }, 5000);
  });
});
