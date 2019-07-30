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
                <NavigationItem text="Projects" to={""} className="isActive" />
                <NavigationItem text="About" to={"about"} />
                <NavigationItem text="Resume" to={"resume"} />
                <NavigationItem text="Blog" to={"blog"} />
            </NavigationContainer>
        );
    }
}

export default Navigation;
