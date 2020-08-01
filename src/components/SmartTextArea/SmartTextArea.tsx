import React from 'react'

import {
  Container,
  TextLengthCount,
  Formatter,
  TextArea,
  ErrorMessage,
} from './styles'
import { Parsed } from './types'

interface Props {
  className?: string
  value: string
  errorMessage?: string
  handleChange(val: string): void
  maxLength?: number
  name: string
  parsedItems: Parsed[]
  placeholder?: string
}

const SmartTextArea: React.FC<Props> = ({
  className,
  errorMessage,
  handleChange,
  name,
  value,
  maxLength,
  parsedItems,
  placeholder,
}) => (
  <Container className={className}>
    <TextArea
      hasError={!!errorMessage}
      name={name}
      data-key={name}
      onChange={(e) => handleChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    >
      <Formatter>
        {parsedItems.map((item, itemIndex) => (
          <span className={item.type} key={`${item.type}_${itemIndex}`}>
            {item.text}
          </span>
        ))}
      </Formatter>
    </TextArea>
    {errorMessage ? (
      <ErrorMessage>{errorMessage}</ErrorMessage>
    ) : (
      <>
        {maxLength && (
          <TextLengthCount>
            <span>{maxLength - value.length}</span> chars remained
          </TextLengthCount>
        )}
      </>
    )}
  </Container>
)
export default SmartTextArea
