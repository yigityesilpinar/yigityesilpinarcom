import { parseExpression } from '@babel/parser'
import { JSXElement } from '@babel/types'

import { ParseSmartTextOptions, Parsed, ParseTextOptions, ParseJSXOptions } from './types'

export const parseText: (options: ParseTextOptions) => Parsed[] = (options) => {
  const { text, maxLength } = options
  if (maxLength && maxLength < text.length) {
    return [
      {
        text: text.substring(0, maxLength),
        type: 'text'
      },
      {
        text: text.substring(maxLength),
        type: 'error'
      }
    ]
  }

  return [
    {
      text,
      type: 'text'
    }
  ]
}

export const parseJSXElement: (expression: JSXElement, rawText: string) => Parsed[] = (expression, rawText) => {
  const { children, openingElement, closingElement } = expression

  const { start: openingStart, end: openingEnd, selfClosing } = openingElement
  if (selfClosing) {
    return [
      {
        type: 'JSXElement',
        text: rawText.substring(openingStart || 0, openingEnd || 0)
      }
    ]
  } else if (closingElement) {
    const { start: closingStart, end: closingEnd } = closingElement
    return [
      {
        type: 'JSXElement',
        text: rawText.substring(openingStart || 0, openingEnd || 0)
      },
      ...(children.length
        ? (children
            .map<Parsed | Parsed[]>((child) => {
              if (child.type === 'JSXText') {
                return {
                  type: 'text',
                  text: child.value
                }
              } else if (child.type === 'JSXElement') {
                return parseJSXElement(child, rawText)
              } else if (child.type === 'JSXExpressionContainer') {
                return {
                  type: 'JSXExpression',
                  text: rawText.substring(child.start || 0, child.end || 0)
                }
              } else {
                console.error('NOT COVERED CASE', { type: child.type })
                return undefined as unknown as Parsed
              }
            })
            .filter((c) => c)
            .flat() as Parsed[])
        : []),
      {
        type: 'JSXElement',
        text: rawText.substring(closingStart || 0, closingEnd || 0)
      }
    ]
  } else {
    return []
  }
}

export const parseJSX: (options: Omit<ParseJSXOptions, 'type'>) => Parsed[] = (options) => {
  const { text } = options

  try {
    const expression = parseExpression(text, {
      sourceType: 'unambiguous',
      plugins: ['jsx', 'typescript']
    })
    if (expression.type === 'JSXElement') {
      return parseJSXElement(expression, text)
    }
    // eslint-disable-next-line no-empty
  } catch (err) {}
  return [
    {
      type: 'text',
      text
    }
  ]
}

export const parseSmartText: (options: ParseSmartTextOptions) => Parsed[] = (options) => {
  switch (options.type) {
    case 'jsx':
      return parseJSX(options)
    case 'text':
    default:
      return parseText(options)
  }
}
