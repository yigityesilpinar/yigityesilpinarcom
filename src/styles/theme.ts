import { lighten, darken } from 'polished'

const basePrimary = '#03D684'
const baseSecondary = '#5f6368'
const baseError = 'red' // TODO:
const baseText = '#231f20'

const defaultTheme = {
  palette: {
    primary: {
      dark: darken(0.2)(basePrimary),
      main: basePrimary,
      light: lighten(0.2)(basePrimary),
      contrastText: '#ffffff'
    },
    secondary: {
      dark: darken(0.3)(baseSecondary),
      main: baseSecondary,
      light: lighten(0.3)(baseSecondary),
      contrastText: '#ffffff'
    },
    error: {
      dark: darken(0.2)(baseError),
      main: baseError,
      light: lighten(0.2)(baseError),
      contrastText: '#ffffff'
    },
    text: {
      primary: baseText,
      disabled: lighten(0.3)(baseSecondary),
      hint: lighten(0.3)(baseText),
      secondary: lighten(0.2)(baseSecondary)
    }
  },
  mobileBreakPoint: '1000px',
  boxShadow: '0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15)'
}

export type DefaultTheme = typeof defaultTheme

export default defaultTheme
