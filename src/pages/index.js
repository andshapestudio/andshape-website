import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default () => (
  <Container>
    <div>Hello Andshape!</div>
  </Container>
)
