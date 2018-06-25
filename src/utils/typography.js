import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

noriegaTheme.headerColor = 'hsla(0,0%,100%,1)'
noriegaTheme.bodyColor = 'hsla(0,0%,100%,0.85)'
noriegaTheme.headerWeight = '600'
noriegaTheme.bodyWeight = '200'
noriegaTheme.boldWeight = '600'
noriegaTheme.headerFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif'
]
noriegaTheme.bodyFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif'
]

const typography = new Typography(noriegaTheme)

export default typography
