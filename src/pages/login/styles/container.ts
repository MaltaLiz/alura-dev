import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  a {
    color: ${theme.colors.white};
    margin-top: 16px;

    &:hover {
      color: ${theme.buttons.filled.background.hover};
    }
  }
`
