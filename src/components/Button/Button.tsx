import React from 'react'

import { StyledButton, StyledLoadingIcon } from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc?: string
  text: string
  className?: string
  variant?: 'primary'
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, isLoading, onClick, iconSrc, variant = 'primary', ...props }) => (
  <StyledButton isLoading={isLoading} {...props} {...(isLoading ? {} : { onClick })}>
    {isLoading && <StyledLoadingIcon />}
    {iconSrc && <img src={iconSrc} />}
    <span> {text}</span>
  </StyledButton>
)

export default Button
