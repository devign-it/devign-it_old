import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Hero, { quoteAnimation } from "../components/Hero";
import LayoutHome from "../components/layout";

import { ProjectsFeed, initializeSwiper } from "../components/ProjectsFeed";
import Navigation from "../components/Navigation";
import "../styles/styles.scss";
import { changeDocumentTitle } from "../components/SiteTitle";

class RootIndex extends React.Component {
  componentDidMount() {
    changeDocumentTitle();
    quoteAnimation();
    initializeSwiper();
    // $(() => {
    //   $('[data-toggle="popover"]').popover();
    // });
  }

  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const projects = get(this, "props.data.allContentfulProjects.edges");

    return (
      <>
        <Helmet title={siteTitle} />
        <Hero />
        <Navigation />

        <LayoutHome location={this.props.location}>
          <ProjectsFeed feedSource={projects} />
        </LayoutHome>
      </>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProjects(limit: 10) {
      edges {
        node {
          title
          slug
          client
          colour
          featuredImage {
            fluid {
              src
            }
            description
          
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
