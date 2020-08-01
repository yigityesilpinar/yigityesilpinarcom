import styled from 'styled-components'

import _TextArea from './TextArea'
import { textAreaSpacings } from './TextArea/styles'

export const Container = styled.div``

export const TextLengthCount = styled.span`
  span {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Formatter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${textAreaSpacings}
  word-break: break-word;
  pointer-events: none;
  /* !important, border mismatch causes text overlap */
  border: 1px solid transparent;
  span {
    white-space: pre-wrap;
  }
  .error {
    color: ${({ theme }) => theme.palette.error.main};
    position: relative;
    border-bottom: 2px dotted ${({ theme }) => theme.palette.error.main};
  }
`

export const TextArea = styled(_TextArea)<{ $smart?: boolean }>`
  textarea {
    color: green;
    -webkit-text-fill-color: transparent;
    ::-webkit-input-placeholder {
      text-shadow: none;
      -webkit-text-fill-color: initial;
    }
  }
`

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.palette.error.main};
`
