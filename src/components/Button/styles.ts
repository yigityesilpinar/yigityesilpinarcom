import styled, { css } from 'styled-components'

import LoadingIcon from './LoadingIcon'
import { ButtonProps } from './Button'

export const StyledButton = styled.button<Omit<ButtonProps, 'iconSrc' | 'text'>>`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 3em;
  min-height: 3em;
  padding: 0 1.5em;
  cursor: pointer;
  img {
    height: 2em;
    margin-right: 0.5em;
  }
  :hover {
    opacity: 0.7;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.8;
      :hover {
        opacity: 0.8;
      }
      img,
      span {
        opacity: 0;
      }
    `}
`

export const StyledLoadingIcon = styled(LoadingIcon)`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
`
