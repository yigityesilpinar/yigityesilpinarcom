import React from 'react'
import _TextareaAutosize from 'react-textarea-autosize'

import { Container, TextareaAutosize } from './styles'

interface Props extends React.ComponentProps<typeof _TextareaAutosize> {
  hasError?: boolean
}

const TextArea: React.FC<Props> = ({ children, className, hasError, ...textAreaProps }) => (
  <Container className={className}>
    <TextareaAutosize {...textAreaProps} $hasError={hasError} />
    {children}
  </Container>
)

export default TextArea
