import React from "react";
import get from "lodash/get";
import PageContent from "../PageContent";
import Navigation from "../Navigation";
import Helmet from "react-helmet";
import { changeDocumentTitle } from "../SiteTitle";
import AnimatedQuote from "../AnimatedQuote";

const Layout = ({ children }) => {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    changeDocumentTitle();

    return (
        <>
            <Helmet title={siteTitle} />
            <AnimatedQuote>Shaping the digital world is what I like and do</AnimatedQuote>
            <PageContent>
                <Navigation />
                {children}
            </PageContent>
        </>
    );
};

export default Layout;
