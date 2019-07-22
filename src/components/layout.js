import React from "react";
import get from "lodash/get";
import PageContent from "./PageContent";
import Navigation from "./Navigation";
import Helmet from "react-helmet";
import { changeDocumentTitle } from "./SiteTitle";
import AnimatedQuote from "./AnimatedQuote";

export default class LayoutHome extends React.Component {
    componentDidMount() {
        changeDocumentTitle();
        // quoteAnimation();
    }

    render() {
        console.log(this.props);
        const siteTitle = get(this, "props.data.site.siteMetadata.title");
        const { children } = this.props;

        return (
            <div className="layoutHome">
                <Helmet title={siteTitle} />
                <AnimatedQuote>
                    Shaping the digital world is what I like and do
                </AnimatedQuote>
                <Navigation />
                <PageContent>{children}</PageContent>
            </div>
        );
    }
}
