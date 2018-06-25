import React from 'react'
import styled from 'styled-components'
import Link from './link'

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 1rem;
`

export default () => (
  <Menu>
    <Item>
      <Link to={'/'}>Home</Link>
    </Item>
    <Item>
      <Link to={'/about'}>About</Link>
    </Item>
  </Menu>
)
