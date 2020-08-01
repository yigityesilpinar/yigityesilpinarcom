import React, { useState } from 'react'

import Techs from 'src/components/Techs'

// new Sth
import SmartTextArea, {
  parseSmartText,
  parseJSX,
  showCaseMaxLength,
} from 'src/components/SmartTextArea'

import { Container, JSXFormatter } from './styles'

const Home: React.FC<unknown> = () => {
  const [showcaseValue, setShowcaseValue] = useState(showCaseMaxLength.text)
  const maxLength = showCaseMaxLength.validPart.length
  const parsedItems = parseSmartText({
    text: showcaseValue,
    maxLength,
  })
  const parsedJSXItems = parseJSX({
    text: `<Container className={className}>
    <TextareaAutosize {...textAreaProps} $hasError={hasError} />
    {children}
    <Techs />
      <SmartTextArea
        name="showCaseMaxLength"
        parsedItems={parsedItems}
        value={showcaseValue}
        maxLength={maxLength}
        placeholder="Some placeholder"
        errorMessage={
          hasError ? \`The text is too long, maxLength is ${maxLength}\` : ''
        }
        handleChange={(val) => setShowcaseValue(val)}
      />
  </Container>`,
  })
  const hasError = parsedItems.some((item) => item.type === 'error')
  return (
    <Container>
      <Techs />
      <SmartTextArea
        name="showCaseMaxLength"
        parsedItems={parsedItems}
        value={showcaseValue}
        maxLength={maxLength}
        placeholder="Some placeholder"
        errorMessage={
          hasError ? `The text is too long, maxLength is ${maxLength}` : ''
        }
        handleChange={(val) => setShowcaseValue(val)}
      />
      <JSXFormatter>
        {parsedJSXItems.map((item, itemIndex) => {
          const renderExpressionWithBrackets = (expression: string) => {
            const splitParts = expression
              .split('{')
              .map((str) => str.split('}'))
              .flat()
              .slice(0, -1)

            return (
              <>
                {splitParts.map((part, partIndex) => (
                  <span key={`JSXExpression${itemIndex}_part_${partIndex}`}>
                    <span className="JSXExpression">{part}</span>
                    {partIndex % 2 === 0 ? (
                      <span className="bracket">{'{'}</span>
                    ) : (
                      <span className="bracket">{'}'}</span>
                    )}
                  </span>
                ))}
              </>
            )
          }
          if (item.type === 'JSXElement') {
            const isSelfClosing = item.text.endsWith('/>')
            const isClosing = item.text.startsWith('</')

            // <Component propsAndStuff> or <Component propsAndStuff />
            if (!isClosing) {
              // <Component part
              const matches = /<\w+/.exec(item.text)
              // TODO: fix ts opchain
              if (matches && matches.length) {
                // we expect single match
                const componentPart = matches[0]
                const restPart = item.text.substring(componentPart.length)
                // >  or />
                const closing = isSelfClosing ? '/>' : '>'
                const propsPart = restPart.substring(
                  0,
                  restPart.length - closing.length
                )
                return (
                  <span key={`${item.type}_${itemIndex}`}>
                    <span className={item.type}>{componentPart}</span>
                    {renderExpressionWithBrackets(propsPart)}
                    <span
                      className={item.type}
                      key={`${item.type}_${itemIndex}_closing`}
                    >
                      {closing}
                    </span>
                  </span>
                )
              }
            }
          } else if (item.type === 'JSXExpression') {
            return (
              <span key={`${item.type}_${itemIndex}`}>
                {renderExpressionWithBrackets(item.text)}
              </span>
            )
          }
          return (
            <span className={item.type} key={`${item.type}_${itemIndex}`}>
              {item.text}
            </span>
          )
        })}
      </JSXFormatter>
    </Container>
  )
}

export default Home
