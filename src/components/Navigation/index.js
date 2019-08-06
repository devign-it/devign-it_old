import React from "react";
import NavigationItem from "../NavigationItem";
import NavigationContainer from "./styling";
import anime from "animejs";

class Navigation extends React.Component {
    constructor() {
        super();
        this.nav = React.createRef();
        this.state = {
            animIsFinished: true,
            animOpenIsFinished: true,
            animOpenIsPlaying: false,
            animCloseIsFinished: true,
            animCloseIsPlaying: false,
            isStatic: true,
            isSticky: true,
            isHovered: true,
            isOpen: true,
            isClosed: false,
        };
    }

    navOnScroll() {
        if (window.pageYOffset >= this.nav) this.closeNav();

        if (window.pageYOffset <= this.nav) {
            this.openNav();
        } else {
            return;
        }
    }

    navModule() {
        stickyEl.addEventListener("click", () => {
            this.openNav();
            stickyEl.addEventListener("mouseover", () => this.openNav());
            stickyEl.addEventListener("mouseleave", () => this.closeNav());
        });
    }

    openNav() {
        // Check if all animations finished
        console.log("o");
        if (
            this.state.isClosed === true &&
            this.state.animOpenIsPlaying === false &&
            this.state.animCloseIsPlaying === false
        ) {
            // If true then set anim to false due to new anim starting
            let tl = anime.timeline({
                targets: this.nav.current,
                duration: 500,
                easing: "easeOutExpo",
            });

            tl.add({
                borderRadius: 0,
                height: "100%",
                width: "100%",
                begin: () => {
                    this.setState({ animOpenIsPlaying: true });
                },
            }).add({
                targets: this.nav.current.childNodes,
                opacity: 1,
                begin: () => {
                    anime({
                        targets: this.nav.current.childNodes,
                        display: "inline-block",
                    });
                },
                complete: () => {
                    this.setState({ isOpen: true });
                    this.setState({ isClosed: false });
                    this.setState({ animOpenIsPlaying: false });
                    this.setState({ animOpenIsFinished: true });
                },
            });
        }
    }

    closeNav() {
        console.log("c");
        if (
            this.state.isOpen === true &&
            this.state.animCloseIsPlaying === false &&
            this.state.animOpenIsPlaying === false
        ) {
            let tl = anime.timeline();
            tl.add({
                targets: this.nav.current.childNodes,
                opacity: 0,
                complete: () => {
                    anime({
                        targets: this.nav.current.childNodes,
                        display: "none",
                    });
                },
            })
                .add({
                    targets: this.nav.current,
                    width: "50px",
                    height: "50px",
                    duration: 500,
                    borderRadius: 100,
                    easing: "easeInOutExpo",
                    begin: () => {
                        this.setState({ animCloseIsPlaying: true });
                    },
                })
                .add(
                    {
                        targets: this.nav.current,
                        borderRadius: 100,
                        duration: 500,
                        easing: "easeInOutExpo",
                        complete: () => {
                            this.setState({ isOpen: false });
                            this.setState({ isClosed: true });
                            this.setState({ animCloseIsPlaying: false });
                            this.setState({ animCloseIsFinished: true });
                        },
                    },
                    "-=400",
                );
        }
    }

    componentDidMount() {
        window.onscroll = () => this.navOnScroll();
        window.addEventListener("resize", () => this.navModule());
    }

    render() {
        return (
            <>
                <button
                    style={{
                        width: "50px",
                        height: "50px",
                        background: "cyan",
                        position: "fixed",
                        bottom: "20px",
                        left: "20px",
                    }}
                    onClick={() => {
                        this.state.isOpen === true ? this.closeNav() : this.openNav();
                    }}
                ></button>
                <NavigationContainer role="navigation" ref={this.nav} className="main-navigation isOpen">
                    <NavigationItem text="Projects" to="/" className="isActive" />
                    <NavigationItem text="About" to="/about/" />
                    <NavigationItem text="Resume" to="/resume/" />
                    <NavigationItem text="Blog" to="/blog/" />
                </NavigationContainer>
            </>
        );
    }
}

export default Navigation;
