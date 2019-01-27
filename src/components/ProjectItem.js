import React from 'react'

export const appendSwiperControls = () => (
  <div className="swiper-controls">
    <div className="swiper-pagination" />
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
  </div>
)
export default ({ project }) => (
  <article
    className={`project-item project-item__${project.slug}`}
    style={{ backgroundColor: project.colour }}
  >
    <div className="project-item--info">
      <h4 className="item--name">{project.client}</h4>
      <h3 className="item--title">{project.title}</h3>
      <a href={project.link} target="_blank" className="project-item--button">
        Check website
      </a>
    </div>
    <div className="project-item--slider swiper-container black">
      <div className="slider--items swiper-wrapper">
        <div className="swiper-slide">
          <img
            className="project-item--image"
            src="assets/images/projects/madebyrens/madebyrens-website_rec_frame.gif"
            alt="Website introduction scrolling of madebyrens.com"
          />
          <p className="project-item--description">
            Little big details and animations where a important addition to the
            minimalism
          </p>
        </div>
        <div className="swiper-slide">
          <div
            className="project-item--description__text"
            dangerouslySetInnerHTML={{
              __html: project.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
      {appendSwiperControls()}
    </div>
  </article>
)
