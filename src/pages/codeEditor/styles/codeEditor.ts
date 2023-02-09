import styled from 'styled-components'
import theme from 'theme'

export const CodeEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 24px;

  .postWrapper {
    padding: 32px;
    border-radius: 8px;
  }

  .post {
    resize: none;
    border-style: none;
    border-end-start-radius: 8px;
    border-end-end-radius: 8px;
    background-color: ${theme.colors.darkGray};
    width: calc(100% - 32px);
    padding: 16px;
    color: ${theme.colors.white};
    ${theme.typography.code}
  }

  .postButtons {
    width: calc(100% - 32px);
    background-color: ${theme.colors.darkGray};
    padding: 16px;
    border-start-start-radius: 8px;
    border-start-end-radius: 8px;
  }

  .highlightButton {
    border-style: none;
    border-radius: 8px;
    padding: 16px;
    color: ${theme.colors.white};
    ${theme.typography.body}
    background-color: ${theme.buttons.outlined.background.normal};
    &:hover {
      background-color: ${theme.buttons.outlined.background.hover};
    }
    &:active {
      ${theme.buttons.outlined.border.pressed}
    }
    &:focus {
      ${theme.buttons.outlined.background.focus}
    }
  }

  ${theme.breakpoint.mobile} {
    grid-column-start: 1;
    grid-column-end: 4;
    .post {
      height: 360px;
    }
  }

  ${theme.breakpoint.tablet} {
    .post {
      height: 230px;
    }
  }

  ${theme.breakpoint.notebook} {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  ${theme.breakpoint.desktop} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`
