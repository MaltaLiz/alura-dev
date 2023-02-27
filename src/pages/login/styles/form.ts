import styled from 'styled-components'
import theme from 'theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;

  .input-container {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${theme.colors.input};
    border-radius: 8px;
    padding-left: 8px;
  }

  .form-input {
    background-color: transparent;
    border: none;
    border-radius: 8px;
    width: 300px;
    padding: 4px;
    color: ${theme.colors.white};
    ${theme.typography.body}
  }

  .form-button {
    background-color: ${theme.buttons.filled.background.normal};
    color: ${theme.colors.darkGray};
    margin-top: 16px;
    border: none;
    border-radius: 8px;
    width: 100%;
    padding: 4px;
    cursor: pointer;

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
`
