import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  .hide {
    display: none;
  }

  ${theme.breakpoint.mobile} {
    padding: 27px 16px;
  }

  ${theme.breakpoint.notebook} {
    padding: 32px;
  }
`
