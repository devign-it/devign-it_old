import React from 'react'

export default () => (
  <header className="header--container">
    <p className="author">
      <a
        className="doPopup mail"
        rel="item__portrait"
        href="mailto:daan@devign.it"
      >
        <span className="name">Daan van der Zwaag</span>
        <span className="jobtitle">Design technologist</span>
      </a>
    </p>
    <h1 className="quote">Shaping the digital world is what I like and do</h1>
    <div className="scroll-indicator__down" />
  </header>
)
