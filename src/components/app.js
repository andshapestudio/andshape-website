import React from 'react'
import { Helmet } from 'react-helmet'
import baseStyles from '../utils/styles'

const App = ({ children }) => {
  baseStyles()
  return (
    <div>
      <Helmet>
        <title>Andshape</title>
        <meta name="description" content="Andshape studio" />
      </Helmet>
      {children}
    </div>
  )
}

export default App
