import styled, { css } from 'styled-components'
import _TextareaAutosize from 'react-textarea-autosize'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const textAreaSpacings = css`
  line-height: 1.5;
  padding: 4px 11px;
`

export const TextareaAutosize = styled(_TextareaAutosize)<{
  $hasError?: boolean
}>`
  font-family: 'Open Sans', sans-serif;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 2px;
  ${textAreaSpacings}
  width: 100%;
  resize: none;
  ${({ disabled }) => disabled && 'cursor: not-allowed; background: #f5f5f5;'};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({ theme, disabled }) => !disabled && theme.palette.primary.main};
    border-right-width: 1px !important;
    outline: none;
  }
  ${({ $hasError }) =>
    $hasError &&
    css`
      &,
      &:hover,
      &:active,
      &:focus {
        border: 1px solid ${({ theme }) => theme.palette.error.main};
      }
    `}
`
