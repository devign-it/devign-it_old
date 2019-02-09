import React from "react";
import { TimelineLite, Power1 } from "gsap/TweenMax";
import $ from "jquery";

export function quoteAnimation() {
  let header = document.getElementsByClassName(".header--container");
  let quote = document.getElementsByClassName(".quote");
  console.log('jatoch')

  $(".header--continer").mousemove(function(event) {
    console.log('werkt')
    $(".quote").each(function(index, element) {
      var xPos = event.clientX / $(window).width() + 0.05 / 2,
        yPos = event.clientY / $(window).height() + 0.05 / 2,
        box = element;
      TimelineLite.to(box, 2, {
        rotationY: yPos * 10,
        rotationX: xPos * 20,
        // rotation: Math.sqrt(Math.pow(xPos, 4) + Math.pow(yPos, 2)) * 5,
        skewY: Math.pow(xPos, 2) * -5,
        skewX: Math.pow(yPos, 2) * -20,
        ease: Power1.easeOut
      });
    });
  });
};

export default () => (
  <header className="header--container">
    <p className="author">
      <a
        className="doPopup mail"
        rel="item__portrait"
        href="mailto:daan@devign.it"
      >
        <span className="name">Daan van der Zwaag</span>
        <span className="jobtitle">Design technologist</span>
      </a>
    </p>
    <h1 className="quote">Shaping the digital world is what I like and do</h1>
    <div className="scroll-indicator__down" />
  </header>
);
