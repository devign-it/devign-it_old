import React from 'react'
import Container from './MainContainer'

export default class LayoutHome extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        {children}
      </Container>
    )
  }
}
