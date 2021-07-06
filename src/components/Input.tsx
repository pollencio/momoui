import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

export const INPUT_MODIFIERS = {
  icon: () => ``,
  label: () => ``,
  
  // States
  warning: () => ``,
  error: () => ``,
  success: () => ``,
};

export const INPUT_TYPES = {
  text: () => ``,
  select: () => ``,
  checkbox: () => ``,
  radio: () => ``,
  textarea: () => ``,
};

export type InputProps = {
  modifiers?: keyof typeof INPUT_MODIFIERS | keyof typeof INPUT_MODIFIERS[],
  type?: keyof typeof INPUT_TYPES,
  label?: string,
  icon?: string,
};

const Input = styled.input<InputProps>`
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.paragraph};
  background-color: ${defaultTheme.inputColor};
  color: ${defaultTheme.textColor};
  padding: 12px 20px;
  border-radius: 100px;
  border: 2px solid ${defaultTheme.inputBorderColor};
  box-sizing: border-box;
  transition: background-color 0.2s linear, color 0.2s linear,
    box-shadow 0.2s linear;
  ::placeholder {
    color: ${defaultTheme.inputPlaceholderColor};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${defaultTheme.inputBorderColorDisabled};
    background-color: ${defaultTheme.inputColorDisabled};
    border-color: ${defaultTheme.inputBorderColorDisabled};
  }
  &:focus {
    outline: none;
    box-shadow: 2px 2px 15px ${defaultTheme.inputShadowColorFocus};
    border-color: ${defaultTheme.inputBorderColorFocus};
  }

  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export default Input;
