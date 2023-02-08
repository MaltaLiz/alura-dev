import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.7fr 1fr;
  grid-column-gap: 40px;

  .show {
    display: block;
  }

  ${theme.breakpoint.mobile} {
    padding: 27px 16px;
    position: relative;
  }

  ${theme.breakpoint.notebook} {
    padding: 32px;
  }
`
