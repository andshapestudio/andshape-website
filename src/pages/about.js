import React from 'react'
import App from '../components/app'
import Menu from '../components/menu'
import Container from '../components/container'

export default () => (
  <App>
    <Container>
      <Menu />
      <h1>About</h1>
      <p>This is the about page</p>
    </Container>
  </App>
)
