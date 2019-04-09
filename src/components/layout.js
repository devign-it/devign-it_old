import React from "react";
import get from "lodash/get";
import PageContent from "./PageContent";
import Navigation from "./Navigation";
import Helmet from "react-helmet";
import Hero from "./Hero";
import { changeDocumentTitle } from "./SiteTitle";

export default class LayoutHome extends React.Component {
  componentDidMount() {
    changeDocumentTitle();
    // quoteAnimation();
  }

  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const { children } = this.props;

    return (
      <div className="layoutHome">
        <Helmet title={siteTitle} />
        <Hero />
        <Navigation />
        <PageContent>{children}</PageContent>
      </div>
    );
  }
}
