import React from 'react'
import { default as GLink } from 'gatsby-link'
import styled from 'styled-components'

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GLink to={to} {...other} activeStyle={{ color: '#FFF0B7' }}>
        {children}
      </GLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (!!props.isActive ? '#FFDA33' : 'white')};
  background-image: url(./assets/wave.svg);
  background-position: 0 bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 0.5rem;
  border-radius: 2px;

  &:hover {
    background: #ff4246;
  }
`

export default StyledLink
