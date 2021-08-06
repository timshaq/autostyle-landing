!function (t) {
  var e = {};

  function o(n) {
    if (e[n]) return e[n].exports;
    var i = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
  }

  o.m = t, o.c = e, o.d = function (t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) o.d(n, i, function (e) {
      return t[e];
    }.bind(null, i));
    return n;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 7);
}([function (t, e, o) {
  "use strict";

  o.r(e), e.default = function () {
    function t() {
      $("#mobMenu").css({
        opacity: 0,
        visibility: "hidden"
      });
    }

    $("#btnBurger").on("click touch", function () {
      $("#mobMenu").css({
        opacity: 1,
        visibility: "visible"
      });
    }), $(".nav-list__anchor").on("click touch", t), $("#closeBurger").on("click touch", t);
  };
}, function (t, e, o) {
  "use strict";

  o.r(e), e.default = function () {
    $('input[name="tel"]').mask("+7 (999) 999-99-99");
  };
}, function (t, e, o) {
  "use strict";

  o.r(e), e.default = function () {
    function t() {
      $("body").css("overflow-y", "hidden");
    }

    function e() {
      $("body").css({
        "overflow-y": "auto"
      });
    }

    function o(t) {
      $(t).css({
        opacity: 1,
        visibility: "visible",
        overflow: "auto"
      });
    }

    function n(t) {
      $(t).css({
        opacity: 0,
        visibility: "hidden",
        "z-index": "-1"
      });
    }

    function i(t) {
      $(t).css("z-index", "102");
    }

    $(".btn-call").on("click touch", function () {
      t(), n("#helper"), i("#form1"), o("#form1");
    }), $("#closeForm").on("click touch", function () {
      e(), n("#form1");
    }), $("#form1").on("click touch", function (t) {
      t.target == this && (e(), n("#form1"));
    }), $("#form1").on("submit", function (t) {
      t.preventDefault();
      var e = $("#form1 form").serialize();
      console.log("sendBody"), console.log(e), $("#form1 button").text("Отправка...");
      var o = [".", "..", "..."],
          n = 2;
      var i = setInterval(function () {
        switch (console.log("sendAnimate"), $("#form1 button").text("Отправка" + o[n]), n) {
          case 0:
          case 1:
            n++;
            break;

          case 2:
            n = 0;
        }
      }, 100);
      $("#form1 button").attr("disabled", "disabled"), $("#form1 button").css("cursor", "not-allowed"), fetch("mail.php", {
        method: "POST",
        body: e,
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      }).then(t => t.text()).then(t => {
        !function (t) {
          if (clearTimeout(i), console.log(t), "ok" !== t) {
            $("#form1 button").text("Отправить снова"), $("#form1 button").css("transform", "translate(0,0)"), $("#form1 .error-msg").css({
              opacity: 1,
              visibility: "visible",
              transform: "translate(0,0)"
            });
            var e = ["через 5 сек.", "через 4 сек.", "через 3 сек.", "через 2 сек.", "через 1 сек.", "снова."],
                o = 0;
            var n = setInterval(function () {
              $("#form1 .error-msg").text("Ошибка отправки. Попробуйте " + e[o]), o++;
            }, 1e3);
            setTimeout(function () {
              clearTimeout(n), $("#form1 button").removeAttr("disabled"), $("#form1 button").css("cursor", "pointer");
            }, 6e3);
          } else $(".modal__title").text("Заявка отправлена"), $(".modal__title").css("margin", "0 0 20px 0"), $("#form1 input").css({
            opacity: 0,
            visibility: "hidden",
            position: "absolute"
          }), $("#form1 label").css({
            opacity: 0,
            visibility: "hidden",
            position: "absolute"
          }), $("#form1 button").css({
            opacity: 0,
            visibility: "hidden",
            position: "absolute"
          }), $("#form1 .error-msg").css({
            opacity: 0,
            visibility: "hidden",
            transform: "translate(0,-35px)"
          }), $("#form1 form").css({
            height: "fit-content"
          });
        }(t);
      });
    }), $(".helper").on("click touch", function (e) {
      var n = e.target.textContent,
          r = document.getElementById("nameService");
      t(), i("#helper"), o("#helper"), r.textContent = n;
    }), $("#closeHelper").on("click touch", function () {
      e(), n("#helper");
    }), $("#helper").on("click touch", function (t) {
      t.target == this && (e(), n("#helper"));
    });
  };
}, function (t, e, o) {
  "use strict";

  o.r(e), e.default = function () {
    var t = document.createElement("img"),
        e = document.querySelector("body").classList.contains("webp");
    t.src = e ? "assets/img/bg1.webp" : "assets/img/bg1.png";
    var o = !1;

    t.onload = t.onerror = () => {
      o = !0, a();
    };

    for (var n = document.images, i = n.length, r = 0, c = 0, s = 0; s < i; s++) {
      var l = new Image();
      l.onload = u, l.onerror = u, l.src = n[s].src;
    }

    function u() {
      r++, c = 90 / i * r << 0, document.getElementById("slideCar").style.width = c + "%", a();
    }

    function a() {
      i == r && o && (c = 100, document.getElementById("slideCar").style.width = c + "%", setTimeout(function () {
        var t = document.getElementById("preloader");
        t.classList.contains("done") || t.classList.add("done");
      }, 1e3));
    }
  };
}, function (t, e, o) {
  "use strict";

  o.r(e), e.default = function () {
    var t = document.getElementById("scrollThumb"),
        e = 100 * t.offsetHeight / document.body.clientHeight,
        o = document.body.scrollHeight - document.body.clientHeight;
    document.body.addEventListener("scroll", function (n) {
      var i = n.target.scrollTop * (100 - e) / o;
      t.style.top = i + "%";
    });
    var n = document.querySelectorAll('a[href*="#"]');
    Array.prototype.slice.call(n).map(t => {
      document.querySelector("html"), document.querySelector("body");
      t.addEventListener("click", function (t) {
        t.preventDefault(), document.querySelector(t.target.getAttribute("href")).scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
    });
  };
}, function (t, e, o) {
  "use strict";

  o.r(e), e.default = function () {
    $("#slider").slick({
      dots: !1,
      arrows: !1,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      draggable: !0,
      fade: !0,
      cssEase: "linear"
    }), $("#prev").on("click", function () {
      $("#slider").slick("slickPrev");
    }), $("#next").on("click", function () {
      $("#slider").slick("slickNext");
    });
  };
}, function (t, e, o) {
  "use strict";

  o.r(e), e.default = function () {
    var t, e;
    t = function (t) {
      1 == t ? document.querySelector("body").classList.add("webp") : document.querySelector("body").classList.add("no-webp");
    }, (e = new Image()).onload = e.onerror = function () {
      t(2 == e.height);
    }, e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
}, function (t, e, o) {
  o(0), o(1), o(2), o(3), o(8), o(4), o(5), t.exports = o(6);
}, function (t, e, o) {
  "use strict";

  o.r(e);
  var n = o(0),
      i = o(1),
      r = o(2),
      c = o(3),
      s = o(4),
      l = o(5),
      u = o(6);
  document.addEventListener("DOMContentLoaded", function () {
    Object(c.default)(), Object(n.default)(), Object(i.default)(), Object(r.default)(), Object(s.default)(), Object(l.default)(), Object(u.default)();
  });
}]);