// I had only 12 hours for the development of this portfolio, please bare with me while reading these lines
// let $ = require("jquery");

// let $ = require('jquery');
// let Swiper = require('swiper');
// let TweenMax = require('gsap');
// import jQuery from 'jquery'
// import TimelineMax from 'gsap'
// import TweenLite from 'gsap'

// require('gsap');

(function($, window, document, undefined) {

  'use strict';

  console.log('🚀');
  $(document).ready(function() {
    $(this).scrollTop(0);
  });

  let changeTitle = function() {

    var messagesGone = [
      'Drinking beer, brb 🍺',
      'Downloading virus ⏳',
      'Open window alert 💨',
      'Bye then 😌',
      'Launch me again 🚀',
      'See ya later 👋'
    ];
    var original;

    $(window).focus(function() {
      if (original) {
        document.title = original;
      }
    }).blur(function() {
      var title = $('title').text();
      var choosenMessage = messagesGone[Math.floor(Math.random() * messagesGone.length)];
      if (title !== choosenMessage) {
        original = title;
      }
      document.title = choosenMessage;
    });

  };

  let popUpitems1 = function() {

    $('.doPopup').hover(function() {

      var $thisRel = $(this).attr("rel"); // caching $(this)

      $(window).outerWidth() > 800 && $('.' + $thisRel).toggleClass('active')
      // console.log($(this).attr("rel"))
    });
  };

  let popUpitems = function() {
    let tl = new TimelineMax({paused: true});
    let xPos = 0;
    // loop through each element
    $(".doPopup").each(function(i, el) {

      let thisRel = $(this).attr("rel"); // caching $(this)
      let currentItem = $('.' + thisRel);

      // create a timeline for this element in paused state
      var tl = new TimelineMax({paused: true});
      var tlRev = new TimelineMax({paused: true});

      // create your tween of the timeline in a variable
      tl.set(currentItem, {willChange: "transform"}).to(currentItem, 0.168, {
        opacity: 0,
        rotationY: '10deg',
        rotationX: '-15deg',
        rotationZ: '5deg',
        y: '1.5rem',
        ease: Quint.easeInOut
      });

      tlRev.set(currentItem, {willChange: "transform"}).to(currentItem, 0.168, {
        opacity: 1,
        rotationY: '0',
        rotationX: '0',
        rotationZ: '0',
        y: '0',
        ease: Quint.easeInOut
      });

      el.animationRev = tlRev;

      // store the tween timeline in the javascript DOM node
      el.animation = tl;

      //create the event handler
      $(el).on("mouseenter", function() {
        this.animationRev.play();
      }).on("mouseleave", function() {
        this.animationRev.reverse();
      });

    });

  };

  let mouseCursor = function() {
    // All creds go to https://murmure.me 👀

    let cursor = $('.cursor'),
      body = $('body'),
      main = $('main'),
      daantext = $('.author a'),
      fail = $('.fail'),
      nav = $('.nav'),
      dark_page = $('body main'),
      wwidth = $(window).width(),
      wheight = $(window).height(),
      cursorMove,
      cursorBind;

    cursorMove = function() {
      var e,
        n;
      return (
        body.addClass('cursor-on'), cursor.css({
        transform: 'matrix(1, 0, 0, 1, ' + wwidth / 2 + ', ' + wheight / 2 + ')'
      }), (e = wheight / 2), (n = 0.65 * wwidth / 2), n > e
        ? e
        : n,
      $(window).on('mousemove', function(e) {
        var n,
          t;
        if (((window.x = e.clientX), (window.y = e.clientY), cursor.css({
          transform: 'matrix(1, 0, 0, 1, ' + x + ', ' + y + ')'
        }), !nav.hasClass('overlay-visible'))) ;
        }
      ));
    };
    cursorBind = function() {
      var e,
        n,
        t;
      if (((n = cursor.find('span')).removeClass('link external new'), (e = $('.focus')), (t = $('.slack')), $(window).on({
        mouseenter: function() {
          return n.removeClass('off');
        },
        mouseleave: function() {
          return n.addClass('off');
        }
      }), $('a:not(.controls_project), button, .link').on({
        mouseenter: function() {
          var e;
          return ((
            e = $(this).hasClass('external')
            ? 'link external'
            : 'link'), n.addClass(e));
        },
        mouseleave: function() {
          return n.removeClass('link external');
        }
      }), $('a:not(.controls_project), button, .link').on({
        mouseenter: function() {
          var e;
          return ((
            e = $(this).hasClass('disabled')
            ? 'link disabled'
            : 'link'), n.addClass(e));
        },
        mouseleave: function() {
          return n.removeClass('link disabled');
        }
      }), $('.swiper-button-next, .swiper-button-prev').on({
        mouseenter: function() {
          return n.addClass('border');
        },
        mouseleave: function() {
          return n.removeClass('border');
        }
      }), $('.white .swiper-controls .swiper-button-next, .white .swiper-controls .swiper-button-prev').on({
        mouseenter: function() {
          return n.addClass('border-white');
        },
        mouseleave: function() {
          return n.removeClass('border-white');
        }
      }), $('.project-item--image').on({
        mouseenter: function() {
          return n.addClass('slide-info');
        },
        mouseleave: function() {
          return n.removeClass('slide-info');
        }
      }), $('.header--container').length && $('.header--container').on({
        mouseenter: function() {
          return n.addClass('scroll');
        },
        mouseleave: function() {
          return n.removeClass('scroll');
        }
      }), e.length && e.find('a').on({
        mouseenter: function() {
          return n.addClass('new');
        },
        mouseleave: function() {
          return n.removeClass('new');
        }
      }),

      // People cards
      // daantext.length &&
      daantext.on({
        mouseenter: function() {
          return n.addClass('mail');
        },
        mouseleave: function() {
          return n.removeClass('link external mail');
        }
      }),

      // Dark page
      dark_page.length && dark_page.on({
        mouseenter: function() {
          return n.addClass('light');
        },
        mouseleave: function() {
          return n.removeClass('light');
        }
      }), fail.length))
        return fail.on({
          mouseover: function() {
            return n.addClass('relol');
          },
          mouseleave: function() {
            return n.removeClass('relol');
          }
        });
      };

    cursorMove();
    cursorBind();
  };

  let animateScroll = function() {
    $(".header--container:not(.author)").click(function() {
      $('html, body').animate({
        scrollTop: $("#main").offset().top
      }, 800);
    });
  };

  let quoteAnimation = function() {

    $(".header--container").mousemove(function(event) {

      $(".quote").each(function(index, element) {

        var xPos = (event.clientX / $(window).width()) + 0.05 / 2,
          yPos = (event.clientY / $(window).height()) + 0.05 / 2,
          box = element;
        TweenLite.to(box, 2, {
          rotationY: yPos * 10,
          rotationX: xPos * 20,
          // rotation: Math.sqrt(Math.pow(xPos, 4) + Math.pow(yPos, 2)) * 5,
          skewY: Math.pow(xPos, 2) * -5,
          skewX: Math.pow(yPos, 2) * -20,
          ease: Power1.easeOut
        });

      })

    });
  };

  let navigationTabs = function() {

    var clickedTab = $(".main-navigation--item.isActive");
    var tabWrapper = $(".info-modal--text-container");
    var activeTab = tabWrapper.find(".isActive");
    var activeTabHeight = activeTab.outerHeight();

    let stickyEl = $('.main-navigation');
    let stickyElTop = stickyEl.offset().top;

    let mainElTop = $("#main").offset().top;

    let isNavSticky = false;
    //navigationSticky();

    activeTab.show();
    tabWrapper.height(activeTabHeight);

    // flickitySliders();
    projectSliders();

    $(window).scroll(function() {

      if ($(window).scrollTop() > stickyElTop && stickyEl.hasClass('isSticky') === false) {
        stickyEl.removeClass('isStatic');
        stickyEl.removeClass('isOpen');
        stickyEl.addClass('isSticky');
      }
      if ($(window).scrollTop() < stickyElTop && stickyEl.hasClass('isSticky') === true) {
        stickyEl.removeClass('isSticky');
        stickyEl.addClass('isStatic');
        stickyEl.addClass('isOpen');

      }
      else {

      }
    });

    // stickyEl.on("click", function() {
    //   if ($('.main-navigation').hasClass('isSticky') === true) {
    //     $(this).toggleClass('isStatic', 'isSticky');
    //     isNavSticky = true;
    //
    //   } else {
    //     isNavSticky = false;
    //
    //     return;
    //   }
    // });

    $('.main-navigation').click(function() {
      if (stickyEl.hasClass('isSticky') === true) {
        stickyEl.removeClass('isStatic');
        stickyEl.removeClass('isClosed');
        stickyEl.addClass('isOpen');
      } else {
        return
      }
    }).mouseleave(function() {
      if (stickyEl.hasClass('isSticky') === true) {
        stickyEl.removeClass('isOpen');

      } else {
        return
      }
    });

    $(".main-navigation.isOpen .main-navigation--item").on("click", function() {

      $(".main-navigation--item").removeClass("isActive");

      $(this).addClass("isActive");
      clickedTab = $(".main-navigation--item.isActive");

      console.log(clickedTab.index())

      activeTab.fadeOut(250, function() {

        $(".info-modal--text-container section").removeClass("isActive");

        var clickedTabIndex = clickedTab.index();

        $(".info-modal--text-container section").eq(clickedTabIndex).addClass("isActive");

        activeTab = $(".info-modal--text-container section.isActive");

        activeTabHeight = activeTab.outerHeight();

        tabWrapper.stop().delay(50).animate({
          height: activeTabHeight
        }, 500, function() {

          // Fade in active tab
          activeTab.delay(50).fadeIn(250);

        });
      });

    });

  };

  let projectSliders = function() {

    let swiperSlider = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

  };

  $.fn.isHitTopViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    console.log(elementBottom, viewportTop);
    // return elementBottom > viewportTop && elementTop < viewportBottom;
    // return elementBottom >= viewportTop && elementTop < viewportBottom;
    return elementBottom >= viewportTop && elementTop < viewportBottom;

  };



    let sectionAddColor = function() {

      // Todah to https://codepen.io/BoyWithSilverWings/pen/MJgQqR

      $(window).on('resize scroll', function() {
        // $('.project-item').each(function() {
        //     let activeColor = $(this).attr('id');
        //     let nav = $('.main-navigation');
        //   if ($(this).isHitTopViewport()) {
        //     nav.addClass(activeColor);
        //     // console.log(activeColor);
        //   } else {
        //     nav.removeClass(activeColor);
        //   }
        // });
            let activeColor = $(this).attr('id');
            let nav = $('.main-navigation');
          if (  $('.project-item__anrec').isHitTopViewport()) {
            nav.addClass(activeColor);
            // console.log(activeColor);
          } else {
            nav.removeClass(activeColor);
          }

      });

    };


  navigationTabs();
  // navigationSticky();
 sectionAddColor();
  quoteAnimation();
  animateScroll();
  mouseCursor();
  changeTitle();
  popUpitems();

})(jQuery, window, document);
