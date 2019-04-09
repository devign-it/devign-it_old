import React from "react";
import { graphql } from "gatsby";
import LayoutHome from "../components/layout";
import get from "lodash/get";

import "../styles/styles.scss";
import "../styles/layouts/about.scss";

import AboutImage from "../components/AboutImage";

export default class pageResume extends React.Component {
  render() {
    // const aboutPage = get(this, "props.data.contentfulAbout");

    return (
      <LayoutHome location={this.props.location}>
        <section className="text-container--resume">
            <div className="container--col">
              <h3>Resume</h3>
              <p>
                Call it a resume or milestone timeline. See what kept me busy
                the past years. Or directly
                <a href="../assets/files/daanvanderzwaag-resume_summer2018.pdf"
                  >download</a
                >
                my resume as a PDF.
              </p>

              <div className="resume--item">
                <span className="resume--item__year">2018</span>
                <p className="resume--item__text">
                  UX Engineer at
                  <a href="https://dav.network">DAV Foundation</a> in Tel Aviv
                  creating decentralized transportation applications.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2018</span>
                <p className="resume--item__text">
                  Digital project manager and creative developer at
                  <a
                    className="link external"
                    target="_blank"
                    href="https://www.vanlennep.eu/"
                    >Van Lennep</a
                  >.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2017</span>
                <p className="resume--item__text">
                  Put a
                  <span className="link doPopup" rel="item__nfc"
                    >NFC chip in my left hand</span
                  >. Can open electronic doors (of a Tesla if I've got one), get
                  free coffee at the university and scan my businesscard. Also
                  started a research with an innovative Dutch bank named<span
                    className="blurryboy"
                    >NDA's signed</span
                  >
                  to research the possibilities of 'paying by hand'.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2017</span>
                <p className="resume--item__text">
                  Member of the
                  <a
                    className="link external"
                    target="_blank"
                    href="https://thenextweb.com/conference/t500"
                    >T500</a
                  >. A shortlist with the most inspiring under 25’s across the
                  fields of digital hustlers from The Next Web.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2017</span>
                <p className="resume--item__text">
                  Moved to Denmark for being part of the Innovation and
                  Entrepreneurship pre-master at the Business Academy Aarhus,
                  Denmark.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2016</span>
                <p className="resume--item__text">
                  Rebranded my first company DVDZ Design to Devign.it.
                  Specializing in digital product development and brand and
                  experience design.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2016</span>
                <p className="resume--item__text">
                  Did an awesome internship as a Frontend Developer at
                  <a
                    className="link external"
                    target="_blank"
                    href="https://www.lucasenmallee.nl/"
                    >Lucas & Mallee</a
                  >, Amsterdam.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2016</span>
                <p className="resume--item__text">
                  Launched
                  <a
                    className="link external"
                    target="_blank"
                    href="http://madebyrens.com/"
                    >Made By Rens</a
                  >
                  with Studio& and won some awards.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2015</span>
                <p className="resume--item__text">
                  Co-founded a startup called Releasium in B.Amsterdam. We got
                  far, very far. But decided to study Communication and
                  Multimedia Design in Amsterdam instead and the startup-life
                  ended.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2015</span>
                <p className="resume--item__text">
                  <a
                    className="link external"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=WcaEJHYkhCg"
                    >Bierkini</a
                  >
                  one of the first Kickstarter project in the Netherlands. The
                  goal was 150 euros, I failed and drank the leftover beers.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2014</span>
                <p className="resume--item__text">
                  Started DVDZ.Design, my first company and the perfect job next
                  to my study. Offering website development and and almost
                  anything that was digital. First by myself and later,
                  depending on the projects, we grew flexible to 4 freelancers.
                </p>
              </div>
              <div className="resume--item">
                <span className="resume--item__year">2014</span>
                <p className="resume--item__text">
                  Received a golden dot award with Catmatch; Tinder for asylum
                  cats.
                </p>
              </div>
            </div>
          </section>
      </LayoutHome>
    );
  }
}


export const pageQuery = graphql`
  query resumeQuery {
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
