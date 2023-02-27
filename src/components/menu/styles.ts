import styled from 'styled-components'
import theme from 'theme'

export const Menu = styled.nav`
  .menuList {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 0;
  }
  .menuItem {
    display: flex;
    align-items: center;
    gap: 16px;
    ${theme.typography.body}
  }

  .menuIcon {
    padding: 16px;
    border-radius: 16px;
    background-color: ${theme.buttons.outlined.background.normal};
  }

  .menuIcon--active {
    padding: 16px;
    border-radius: 16px;
    background-color: ${theme.buttons.filled.background.normal};
  }

  .menuLink {
    color: ${theme.colors.white};
  }

  .menuLink:has(.menuIcon) {
    color: ${theme.colors.white};
    opacity: 56%;
    &:hover {
      opacity: 100%;
      .menuIcon {
        background-color: ${theme.buttons.outlined.background.hover};
      }
    }
    &:active {
      opacity: 100%;
      .menuIcon {
        ${theme.buttons.outlined.border.pressed}
      }
    }
    &:focus {
      opacity: 100%;
      .menuIcon {
        ${theme.buttons.outlined.border.pressed}
      }
    }
  }

  ${theme.breakpoint.mobile} {
    .menuLabel {
      display: none;
    }
    grid-column-start: 3;
    grid-column-end: 4;
    background-color: #2d415b;
    padding: 24px;
    position: absolute;
    width: 254px;
    top: 93px;
    right: -16px;
    z-index: 99;
    height: 100%;
    display: none;

    .menuList {
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-bottom: 1px solid #ffffff;
    }
  }

  ${theme.breakpoint.desktop} {
    .menuLabel {
      display: block;
      ${theme.typography.sidebarTitle}
      margin: 0;
      margin-bottom: 16px;
    }
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: 16px;
    background-color: transparent;
    border: none;
    padding: 0px;
    position: static;
    display: block;
    .menuList {
      border: none;
    }
  }
`
