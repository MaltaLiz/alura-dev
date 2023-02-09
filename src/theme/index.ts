import 'styled-components'

export const theme = {
  colors: {
    darkGray: '#141414',
    white: '#FFFFFF',
    green: '#27C93F',
    red: '#FF5F56',
    yellow: '#FFBD2E',
    blue100: '#96B9FD',
    blue200: '#7BA4FC',
    blue300: '#5081FB',
    darkBlue: '#051D3B',
    input: 'rgba(255, 255, 255, 0.16)',
    inputHover: 'rgba(255, 255, 255, 0.24)',
  },
  shadow: {
    backgroud: '#C4C4C4',
    box: '0px 16px 24px rgba(0, 0, 0, 0.24)',
  },
  typography: {
    title:
      'font-style: normal;  font-weight: 700; font-size: 21px; line-height: 32; font-family: Inter, sans-serif;',
    sidebarTitle:
      'font-style: normal; font-weight: 400; font-size: 12px; line-height: 28px; font-family: Inter, sans-serif;letter-spacing: 0.4em;text-transform: uppercase;',
    body: 'font-style: normal; font-weight: 400; font-size: 16px; line-height: 24px; font-family: Inter, sans-serif;',
    code: `font-style: normal;  font-weight: 400; font-size: 14px; line-height: 18px; font-family: 'Roboto Mono', sans-serif;`,
  },
  breakpoint: {
    mobile: '@media (min-width: 0px)',
    tablet: '@media (min-width: 481px)',
    notebook: '@media (min-width: 769px)',
    desktop: '@media (min-width: 1200px)',
  },
  buttons: {
    outlined: {
      background: {
        normal: 'rgba(80, 129, 251, 0.08)',
        hover: 'rgba(80, 129, 251, 0.16)',
        focus: 'rgba(80, 129, 251, 0.24)',
      },
      border: {
        pressed: 'border: 4px solid rgba(80, 129, 251, 0.24);',
      },
    },
    iconButton: {
      background: {
        hover: 'rgba(80, 129, 251, 0.08)',
        pressed: 'rgba(80, 129, 251, 0.16)',
      },
    },
    filled: {
      background: {
        normal: '#5081FB',
        hover: '#7BA4FC',
        focus: '#96B9FD',
      },
      border: {
        pressed: 'border: 4px solid rgba(80, 129, 251, 0.72);',
      },
    },
  },
}

type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

export default theme
