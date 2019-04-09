import React from "react";
import { graphql } from "gatsby";
import LayoutHome from "../components/layout";
import get from "lodash/get";

import "../styles/styles.scss";
import "../styles/layouts/about.scss";

import AboutImage from "../components/AboutImage";

class RootIndex extends React.Component {
  render() {
    const aboutPage = get(this, "props.data.contentfulAbout");

    return (
      <LayoutHome location={this.props.location}>
        <section className="text-container--about">
          <div className="container--col">
            <AboutImage
              imageSource={aboutPage.image.file.url}
              textSource={aboutPage.introduction}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: aboutPage.description.childContentfulRichText.html
              }}
            />

            <h3>Keep in touch</h3>
            <ul className="text-container__links">
              <li>
                <a className="link external mail" href="mailto:daan@devign.it">
                  Email
                </a>
              </li>
              <li>
                <a className="link external" href="tel:+972586895605">
                  Phone
                </a>
              </li>
              <li>
                <a
                  className="link external"
                  target="_blank"
                  href="https://www.linkedin.com/in/daanvanderzwaag/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="link external"
                  target="_blank"
                  href="https://codepen.io/danoszz/"
                >
                  Codepen
                </a>
              </li>
              <li>
                <a
                  className="link external"
                  target="_blank"
                  href="https://github.com/danoszz"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="link external"
                  target="_blank"
                  href="https://www.behance.net/daanvanderzwaag"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </section>
      </LayoutHome>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAbout {
      image {
        file {
          url
          fileName
          contentType
        }
      }
      introduction
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
