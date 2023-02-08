import styled from 'styled-components'
import theme from 'theme'

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;

  .formLabel {
    ${theme.typography.sidebarTitle}
    margin: 0;
    margin-bottom: 16px;
  }

  .formInput {
    width: calc(100% - 28px);
    padding: 16px 14px;
    border-radius: 8px;
    background-color: ${theme.colors.input};
    border-style: none;
    color: ${theme.colors.white};
    ${theme.typography.body}

    &:hover {
      background-color: ${theme.colors.inputHover};
    }
  }

  .formInput:nth-child(3) {
    resize: none;
    display: flex;
    margin-top: 16px;
    height: 80px;
    margin-bottom: 32px;
  }

  .codeLanguageSelect {
    position: relative;
    width: 100%;
    padding: 16px 14px;
    border-radius: 8px;
    background-color: ${theme.colors.input};
    border-style: none;
    color: ${theme.colors.white};
    ${theme.typography.body}
  }

  .codeLanguageOption {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkBlue};
    opacity: 20%;

    &:active {
      background-color: ${theme.colors.darkBlue};
    }
  }

  .colorInput {
    width: 100%;
    margin-top: 16px;
    height: 56px;
    border-radius: 8px;
    background: rgba(196, 196, 196, 0.01);
    border: 1px solid #ffffff;
    padding: 8px;
  }

  .saveProjectButton {
    width: 100%;
    margin-top: 32px;
    padding: 16px;
    border-style: none;
    border-radius: 8px;
    background-color: ${theme.buttons.filled.background.normal};
    color: ${theme.colors.darkGray};

    &:hover {
      background-color: ${theme.buttons.filled.background.hover};
    }
    &:active {
      ${theme.buttons.filled.border.pressed}
    }
    &:focus {
      ${theme.buttons.filled.background.focus}
    }

    ${theme.typography.body}
  }

  ${theme.breakpoint.mobile} {
    grid-column-start: 1;
    grid-column-end: 4;
    margin-top: 32px;
    .post {
      height: 360px;
    }
  }

  ${theme.breakpoint.tablet} {
    margin-top: 16px;
    .post {
      height: 230px;
    }
  }

  ${theme.breakpoint.notebook} {
    grid-column-start: 3;
    grid-column-end: 4;
  }
`
