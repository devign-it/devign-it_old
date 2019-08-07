// import React from "react";
// import NavigationItem from "../NavigationItem";
// import NavigationContainer from "./styling";
// import anime from "animejs";

// class Navigation extends React.Component {
//     constructor() {
//         super();
//         this.nav = React.createRef();
//         this.state = {
//             animIsFinished: true,
//             animOpenIsFinished: true,
//             animOpenIsPlaying: false,
//             animCloseIsFinished: true,
//             animCloseIsPlaying: false,
//             isStatic: true,
//             isSticky: true,
//             isHovered: true,
//             isOpen: true,
//             isClosed: false,
//         };
//     }

//     navOnScroll() {
//         if (window.pageYOffset >= this.nav.current && this.nav.current.classList.contains("isSticky") === false) {
//             this.nav.current.classList.remove("isStatic");
//             this.nav.current.classList.remove("isOpen");
//             this.nav.current.classList.add("isSticky");
//             this.nav.current.classList.add("isClosed");
//             closeNav();
//         }

//         if (window.pageYOffset <= this.nav.current && this.nav.current.classList.contains("isSticky") === true) {
//             this.nav.current.classList.remove("isSticky");
//             this.nav.current.classList.remove("isClosed");
//             this.nav.current.classList.add("isStatic");
//             this.nav.current.classList.add("isOpen");
//             openNav();
//         } else {
//             return;
//         }
//     }

//     navModule() {
//         this.nav.current.addEventListener("click", () => {
//             this.openNav();
//             this.nav.current.addEventListener("mouseover", () => this.openNav());
//             this.nav.current.addEventListener("mouseleave", () => this.closeNav());
//         });
//     }

//     openNav() {
//         if (this.nav.current.classList.contains("isSticky") === true) {
//             this.nav.current.classList.remove("isStatic");
//             this.nav.current.classList.remove("isClosed");
//             this.nav.current.classList.add("isOpen");
//         } else {
//             return;
//         }
//     }

//     closeNav() {
//         if (this.nav.current.classList.contains("isSticky") === true) {
//             this.nav.current.classList.remove("isOpen");
//             this.nav.current.classList.add("isClosed");
//         } else {
//             return;
//         }
//     }

//     componentDidMount() {
//         window.onscroll = () => this.navOnScroll();
//         window.addEventListener("resize", () => this.navModule());
//     }

//     render() {
//         return (
//             <>
//                 <button
//                     style={{
//                         width: "50px",
//                         height: "50px",
//                         background: "cyan",
//                         position: "fixed",
//                         bottom: "20px",
//                         left: "20px",
//                     }}
//                     onClick={() => this.closeNav()}
//                 ></button>
//                 <NavigationContainer role="navigation" ref={this.nav}>
//                     <NavigationItem text="Projects" to="/" className="isActive" />
//                     <NavigationItem text="About" to="/about/" />
//                     <NavigationItem text="Resume" to="/resume/" />
//                     <NavigationItem text="Blog" to="/blog/" />
//                 </NavigationContainer>
//             </>
//         );
//     }
// }

// export default Navigation;

import React from "react";
import NavigationItem from "../NavigationItem";
import NavigationContainer from "./styling";

let navigationTabs = () => {
    let parentContainer = document.getElementsByClassName("main-container")[0];
    let stickyEl = document.getElementsByClassName("main-navigation")[0];
    let stickyElTop = parentContainer.offsetTop;

    let navOnScroll = () => {
        if (window.pageYOffset >= stickyElTop && stickyEl.classList.contains("isSticky") === false) {
            stickyEl.classList.remove("isStatic");
            stickyEl.classList.remove("isOpen");
            stickyEl.classList.add("isSticky");
            stickyEl.classList.add("isClosed");
        }
        if (window.pageYOffset <= stickyElTop && stickyEl.classList.contains("isSticky") === true) {
            stickyEl.classList.remove("isSticky");
            stickyEl.classList.remove("isClosed");
            stickyEl.classList.add("isStatic");
            stickyEl.classList.add("isOpen");
        } else {
            return;
        }
    };

    let openNav = () => {
        if (stickyEl.classList.contains("isSticky") === true) {
            stickyEl.classList.remove("isStatic");
            stickyEl.classList.remove("isClosed");
            stickyEl.classList.add("isOpen");
        } else {
            return;
        }
    };

    let closeNav = () => {
        if (stickyEl.classList.contains("isSticky") === true) {
            stickyEl.classList.remove("isOpen");
            stickyEl.classList.add("isClosed");
        } else {
            return;
        }
    };

    let navModule = () => {
        stickyEl.addEventListener("click", () => (stickyEl.classList.contains("isOpen") === false ? openNav() : null));
        stickyEl.addEventListener("mouseleave", () => closeNav());
    };

    window.onscroll = () => navOnScroll();

    window.addEventListener("resize", () => navModule);

    // Fire up
    navModule();
};

class Navigation extends React.Component {
    componentDidMount() {
        navigationTabs();
    }

    render() {
        return (
            <NavigationContainer role="navigation" className="main-navigation isOpen">
                <NavigationItem text="Projects" to="/" className="isActive" />
                <NavigationItem text="About" to="/about/" />
                <NavigationItem text="Resume" to="/resume/" />
                <NavigationItem text="Blog" to="/blog/" />
            </NavigationContainer>
        );
    }
}

export default Navigation;
