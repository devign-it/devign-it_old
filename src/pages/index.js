import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";

import { ProjectsFeed, initializeSwiper } from "../components/ProjectsFeed";
import "../styles/styles.scss";

class RootIndex extends React.Component {
    componentDidMount() {
        initializeSwiper();
    }

    render() {
        const projects = get(this, "props.data.allContentfulProjects.edges");
        return (
            <Layout location={this.props.location}>
                <ProjectsFeed feedSource={projects} />
            </Layout>
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
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_noBase64
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
