import React from "react";
import { Power1 } from "gsap";
import TimelineLite from "gsap/TimelineLite";

class AnimatedQuote extends React.Component {
    constructor(props) {
        super(props);
        this.quoteContainer = React.createRef();
        this.animatedQuote = React.createRef();
    }

    componentDidMount() {
        const header = this.quoteContainer.current;
        const quote = this.animatedQuote.current;

        header.addEventListener("mousemove", (event) => {
            let xPos = event.clientX / window.innerWidth + 0.05 / 2;
            let yPos = event.clientY / window.innerHeight + 0.05 / 2;

            new TimelineLite().to(quote, 2, {
                rotationY: yPos * 10,
                rotationX: xPos * 20,
                rotation: Math.sqrt(Math.pow(xPos, 4) + Math.pow(yPos, 2)) * 5,
                skewY: Math.pow(xPos, 2) * -5,
                skewX: Math.pow(yPos, 2) * -20,
                ease: Power1.easeOut,
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
                    {this.props.children}
                </h1>
            </header>
        );
    }
}

export default AnimatedQuote;
