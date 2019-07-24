import React from "react";
import { Link } from "gatsby";

import { Container } from "./styling";

const Navigation = () => (
    <Container role="navigation">
        <div className="main-navigation--item">
            <h2>
                <Link activeClassName={"isActive"} to="/">
                    Projects
                </Link>
            </h2>
        </div>
        <div className="main-navigation--item">
            <h2>
                <Link to="/about/">About</Link>
            </h2>
        </div>
        <div className="main-navigation--item">
            <h2>
                <Link to="/resume/">Resume</Link>
            </h2>
        </div>
        <div className="main-navigation--item">
            <h2>
                <Link to="/blog/">Blog</Link>
            </h2>
        </div>
    </Container>
);

export default Navigation;
