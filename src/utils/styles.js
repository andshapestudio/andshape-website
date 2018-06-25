import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import typography from './typography'

const baseStyles = () => injectGlobal`
  ${reset}
  ${typography.toString()}

  html {
    background: #0026E1;
  }
`

export default baseStyles
