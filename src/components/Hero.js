import React from "react";
import { Power1 } from "gsap";
import TimelineLite from "gsap/TimelineLite";
import $ from "jquery";

export default class AnimatedQuote extends React.Component {
  constructor(props) {
    super(props);
    this.quoteContainer = React.createRef();
    this.animatedQuote = React.createRef();
  }
  quoteAnimation() {
    const header = this.quoteContainer.current;
    const quote = this.animatedQuote.current;

    // document.getElementById("hero").onmousemove = function() {
    //   console.log("moved");
    //   document.getElementsByTagName("quote").forEach(function(index, element) {
    //     console.log(element);
    //   });
    // };

    $(header).mousemove(function(event) {
      $(quote).each(function(index, element) {
        let xPos = event.clientX / $(window).width() + 0.05 / 2,
          yPos = event.clientY / $(window).height() + 0.05 / 2,
          box = element;
        new TimelineLite().to(box, 2, {
          rotationY: yPos * 10,
          rotationX: xPos * 20,
          // rotation: Math.sqrt(Math.pow(xPos, 4) + Math.pow(yPos, 2)) * 5,
          skewY: Math.pow(xPos, 2) * -5,
          skewX: Math.pow(yPos, 2) * -20,
          ease: Power1.easeOut
        });
      });
    });
  }
  render() {
    return (
      <header ref={this.quoteContainer} className="header--container">
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
        <h1 ref={this.animatedQuote} className="quote">
          Shaping the digital world is what I like and do
        </h1>
        <div className="scroll-indicator__down" />
      </header>
    );
  }
}
