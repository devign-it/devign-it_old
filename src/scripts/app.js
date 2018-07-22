// I had only 12 hours for the development of this portfolio, please bare with me while reading these lines

(function($, window, document, undefined) {

  'use strict';

  console.log('Well hi there Designit developers 🚀 ');

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
      let tl = new TimelineMax({paused:true});
      let xPos =
      // loop through each element
      $(".doPopup").each(function(i, el) {

        let thisRel = $(this).attr("rel"); // caching $(this)
        let currentItem = $('.' + thisRel);

        // create a timeline for this element in paused state
        var tl = new TimelineMax({paused: true});


        // create your tween of the timeline in a variable
        tl
        .set(currentItem,{willChange:"transform"})
        .to(currentItem, 0.168, {
              opacity: 1,
              rotationY: '10deg',
              rotationX: '-10deg',
              rotationZ: '5deg',
              y: '3rem',
              skewY: Math.pow(xPos, 2) * -5,
              skewX: Math.pow(xPos, 2) * -20,
              ease: Circ.easeOut
            });

        // store the tween timeline in the javascript DOM node
        el.animation = tl;

        //create the event handler
        $(el).on("mouseenter",function(){
          this.animation.play();
        }).on("mouseleave",function(){
          this.animation.reverse();
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

  quoteAnimation();
  animateScroll();
  mouseCursor();
  changeTitle();
  popUpitems();

})(jQuery, window, document);
