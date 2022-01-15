import styled from 'styled-components'
import { textAreaSpacings } from 'src/components/SmartTextArea/TextArea/styles'

export const Container = styled.div``

// https://github.com/microsoft/vscode/blob/master/extensions/theme-defaults/themes/dark_vs.json
export const JSXFormatter = styled.div`
  background: #1e1e1e;
  ${textAreaSpacings}
  word-break: break-word;
  pointer-events: none;
  /* !important, border mismatch causes text overlap */
  border: 1px solid transparent;
  font-family: Menlo, Monaco, 'Courier New', monospace;
  font-weight: normal;
  font-size: 12px;
  font-feature-settings: 'liga' 0, 'calt' 0;
  line-height: 18px;
  letter-spacing: 0px;
  span {
    white-space: pre-wrap;
  }
  .JSXElement {
    color: #4ec9b0;
    position: relative;
  }
  .text {
    color: #d4d4d4;
  }
  .string {
    color: #ce9178;
  }
  .JSXExpression {
    color: #9cdcfe;
  }
  .bracket {
    color: orchid;
  }
  /* #569cd6;  html tags */
`
