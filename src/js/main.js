$(document).ready(function () {
  //Ssroll bar vehicles
  (function ($) {
    $(window).on("load", function () {
      $("#vehicles-list , #vehicles-list-lg").mCustomScrollbar();
    });
  })(jQuery);

  function move(value) {
    $("#vehicle-list").mCustomScrollbar("scrollTo", value, {
      scrollEasing: "easeOut",
    });
  }
  $(".vehicle-nav-items a").click(function () {
    let id = $(this).attr("id");

    switch (id) {
      case "suv-nav":
        move("#suv");
        break;
      case "cars-nav":
        move("#cars");
        break;
      case "minivan-nav":
        move("#minivan");
        break;
      case "electrified-nav":
        move("#electrified");
        break;
      case "future-nav":
        move("#future");
        break;
      case "preowned-nav":
        move("#preowned");
        break;
    }
  });

  const removeClass = function (ele, className) {
    $(ele).removeClass(className);
  };

  const addClass = function (ele, className) {
    $(ele).addClass(className);
  };

  //Include active class for header navbar
  $(".nav-link").click(function () {
    if ($(this).hasClass("active")) {
      removeClass(this, "active");
    } else {
      removeClass(".nav-link", "active");
      addClass(this, "active");
    }
  });

  //frist click navbar
  const firstClick = function (idSection, animateClass) {
    removeClass(idSection, "d-none");
    addClass(idSection, animateClass);
  };
  //click again navbar

  const againClick = function (idSection, animateClass) {
    addClass(idSection, animateClass);
    setTimeout(function () {
      addClass(idSection, "d-none");
      removeClass(idSection, animateClass);
    }, 300);
  };

  const diffirentClick = function (idKeep, ...idRemove) {
    $(idKeep).removeClass("d-none");
    for (let value of idRemove) {
      $(value).addClass("d-none");
    }
  };

  let temp = "";
  $(".nav-link").click(function () {
    if (temp == "") {
      switch ($(this).attr("id")) {
        case "vehicle":
          firstClick("#vehicles-section", "animate__fadeInUp");
          $("body").addClass("overflow");
          temp = $(this).attr("id");
          break;
        case "shopping":
          firstClick("#shopping-tools", "animate__fadeInDown");
          temp = $(this).attr("id");
          break;
        case "owner":
          firstClick("#owner-content", "animate__fadeInDown");
          temp = $(this).attr("id");
          break;
        case "explore":
          firstClick("#explore-content", "animate__fadeInDown");
          temp = $(this).attr("id");
          break;
        default:
          alert("click vehicle , shopping , owner , explore only");
          break;
      }
    } else {
      if (temp === $(this).attr("id")) {
        switch ($(this).attr("id")) {
          case "vehicle":
            $("body").removeClass("overflow");
            againClick("#vehicles-section", "animate__fadeOutDown");
            temp = "";
            break;
          case "shopping":
            againClick("#shopping-tools", "animate__fadeOutUp");
            temp = "";
            break;

          case "owner":
            againClick("#owner-content", "animate__fadeOutUp");
            temp = "";
            break;
          case "explore":
            againClick("#explore-content", "animate__fadeOutUp");
            temp = "";
            break;
        }
      } else {
        switch ($(this).attr("id")) {
          case "vehicle":
            diffirentClick(
              "#vehicles-section",
              "#shopping-tools",
              "#owner-content",
              "#explore-content"
            );
            temp = $(this).attr("id");
            addClass("body", "overflow");
            break;
          case "shopping":
            diffirentClick(
              "#shopping-tools",
              "#vehicles-section",
              "#owner-content",
              "#explore-content"
            );
            temp = $(this).attr("id");
            removeClass("body", "overflow");
            break;

          case "owner":
            diffirentClick(
              "#owner-content",
              "#shopping-tools",
              "#vehicles-section",
              "#explore-content"
            );
            temp = $(this).attr("id");
            removeClass("body", "overflow");
            break;
          case "explore":
            diffirentClick(
              "#explore-content",
              "#shopping-tools",
              "#vehicles-section",
              "#owner-content"
            );
            temp = $(this).attr("id");
            removeClass("body", "overflow");
            break;
        }
      }
    }
  });
  //set up back to top function
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $(".back-to-top").css("transform", "translateX(50px)");
    } else {
      $(".back-to-top").css("transform", "translateX(0px)");
    }
    lastScrollTop = st;
  });

  $(".back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  //create rotate animate for collapse button in lg
  const checkHastoAddorRemove = function (idSection, className) {
    if ($(idSection).hasClass(className)) {
      removeClass(idSection, className);
    } else {
      addClass(idSection, className);
    }
  };
  $(".navbar-toggler").click(function () {
    checkHastoAddorRemove(".navbar-toggler", "rotate");
  });
  //create rotae animate for collapse button in navbar sm
  $("#navbar-toggle-sm").click(function () {
    checkHastoAddorRemove("#navbar-toggle-sm", "active");
  });
  //Stop scroll bar when collapse menu appear
  let tempNav = "";
  $(".collapse-navbar").click(function () {
    if (tempNav == "") {
      firstClick("#header-menu-lg", "animate__fadeInDown");
      addClass("body", "overflow");
      tempNav = $(this).attr("id");
    } else {
      removeClass("body", "overflow");
      againClick("#header-menu-lg", "animate__fadeOutUp");
      diffirentClick(
        ".main-nav",
        ".vehicles-nav-lg",
        ".shopping-tools-lg",
        ".owners-lg",
        ".explore-lg"
      );
      tempNav = "";
    }
  });
  //create slide menu for header
  const apearSection = function (idSection, animateName) {
    setTimeout(function () {
      removeClass(idSection, "d-none");
      addClass(idSection, animateName);
    }, 300);
    setTimeout(function () {
      removeClass(idSection, animateName);
    }, 500);
  };
  $(".nav-link-lg").click(function () {
    againClick(".main-nav", "animate__fadeOut");
    if ($(this).hasClass("nav-link-vehicles")) {
      apearSection(".vehicles-nav-lg", "animate__fadeIn");
    }
    if ($(this).hasClass("nav-link-shopping")) {
      apearSection(".shopping-tools-lg", "animate__fadeIn");
    }
    if ($(this).hasClass("nav-link-owner")) {
      apearSection(".owners-lg", "animate__fadeIn");
    }
    if ($(this).hasClass("nav-link-explore")) {
      apearSection(".explore-lg", "animate__fadeIn");
    }
  });

  const clickBackButton = function (idSection) {
    $(idSection).addClass("animate__fadeOut");
    setTimeout(() => {
      $(idSection).addClass("d-none");
      $(idSection).removeClass("animate__fadeOut");
      $(".main-nav").removeClass("d-none");
      $(".main-nav").addClass("animate__fadeIn");
      setTimeout(() => {
        $(".main-nav").removeClass("animate__fadeIn");
      }, 200);
    }, 300);
  };
  //create back button for menu lg
  $(".back").click(function () {
    clickBackButton(".vehicles-nav-lg");
    clickBackButton(".shopping-tools-lg");
    clickBackButton(".owners-lg");
    clickBackButton(".explore-lg");
  });
  const jumptoSection = function (idSection) {
    $("#vehicles-section-lg").removeClass("d-none");
    $(idSection).removeClass("d-none");
    $(idSection).addClass("animate__fadeIn");
    $(".vehicles-nav-lg").addClass("d-none");
  };
  //vehicle navbar
  $("#suv-link-lg").click(() => {
    jumptoSection(".suv-lg");
  });
  $("#cars-link-lg").click(() => {
    jumptoSection(".cars-lg");
  });
  $("#minivan-link-lg").click(() => {
    jumptoSection(".minivan-lg");
  });
  $("#electricfied-link-lg").click(() => {
    jumptoSection(".electrified-lg");
  });

  //back button vehicles
  $(".back-vehicle").click(function () {
    diffirentClick(
      ".vehicles-nav-lg",
      ".electrified-lg",
      ".minivan-lg",
      ".cars-lg",
      ".suv-lg",
      "#vehicles-section-lg"
    );
  });

  //slidetoggle build up for navbar sm
  $("#navbar-toggle-sm").click(() => {
    $("#navbar-sm").slideToggle();
  });
  //arrow function k co this duoi la cach dung event
  // $('#navbar-sm li').click((e) => {
  //     $('.carousel-indicators-sm-header-text span').html();
  //     $('#navbar-sm').slideUp();
  //     console.log($(e.target).html());

  // })
  $("#navbar-sm li").click(function () {
    $(".carousel-indicators-sm-header-text span").html($(this).html());
    $("#navbar-sm").slideUp();
  });

  //match prev next click to content
  let countVehicle = 0;
  $(".carousel-control-prev").click(function () {
    if (countVehicle == 0) {
      countVehicle = 4;
    } else {
      countVehicle--;
    }

    $("#navbar-sm li").each(function (i) {
      if (i == countVehicle) {
        addClass(this, "active");
        $(".carousel-indicators-sm-header-text span").html($(this).html());
      }
    });
  });
  $(".carousel-control-next").click(function () {
    if (countVehicle == 4) {
      countVehicle = 0;
    } else {
      countVehicle++;
    }

    $("#navbar-sm li").each(function (i) {
      if (i == countVehicle) {
        addClass(this, "active");
        $(".carousel-indicators-sm-header-text span").html($(this).html());
      }
    });
  });
  //change plus to minus
  var open = false;
  $(".plus").click(function () {
    open = !open;
    if (open) {
      removeClass(this, "fa-plus");
      addClass(this, "fa-minus");
    } else {
      addClass(this, "fa-plus");
      removeClass(this, "fa-minus");
    }
  });
});
