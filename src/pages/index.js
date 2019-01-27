import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import LayoutHome from '../components/layout'

import { ProjectsFeed, initializeSwiper } from '../components/ProjectsFeed'
import Navigation from '../components/Navigation'
import '../styles/styles.scss'
import Swiper from 'swiper'

class RootIndex extends React.Component {
  componentDidMount() {
    initializeSwiper()
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    const projects = get(this, 'props.data.allContentfulProjects.edges')
    return (
      <>
        <Helmet title={siteTitle} />
        <Hero />
        <Navigation />

        <LayoutHome location={this.props.location}>
          <ProjectsFeed feedSource={projects} />
        </LayoutHome>
      </>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulProjects(limit: 1000) {
      edges {
        node {
          title
          slug
          colour
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
