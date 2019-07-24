import React from "react";

import NavigationItem from "../NavigationItem";

import NavigationContainer from "./styling";

const Navigation = () => (
    <NavigationContainer role="navigation">
        <NavigationItem text="Projects" to={""} />
        <NavigationItem text="About" to={"about"} />
        <NavigationItem text="Resume" to={"resume"} />
        <NavigationItem text="Blog" to={"blog"} />
    </NavigationContainer>
);

export default Navigation;
