import styled from 'styled-components'
import theme from 'theme'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;

  ${theme.breakpoint.mobile} {
    .userName {
      display: none;
    }
    .menuButton {
      background-color: transparent;
      border-style: none;
      border-radius: 16px;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${theme.buttons.iconButton.background.hover};
      }

      &:active {
        background-color: ${theme.buttons.iconButton.background.pressed};
      }
    }
  }

  ${theme.breakpoint.desktop} {
    .userName {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0;
      ${theme.typography.body}
    }
    .menuButton {
      display: none;
    }
  }
`
