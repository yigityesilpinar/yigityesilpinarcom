import { parseSmartText, parseJSX } from './utils'
import { ParseSmartTextOptions, Parsed } from './types'
import { showCaseMaxLength } from './showcase'

// test utilities
const makeParsedText: (text: string) => Parsed = (text) => ({
  type: 'text',
  text,
})
const makeParsedError: (text: string) => Parsed = (text) => ({
  type: 'error',
  text,
})

describe('parseSmartText utility tests', () => {
  test('No Errors, should parse 1 element with type text', () => {
    const text = 'Some text without error'
    const options: ParseSmartTextOptions = {
      text,
    }
    const result = parseSmartText(options)
    expect(result).toStrictEqual([makeParsedText(text)])
  })

  test('When text is too long, should parse an error', () => {
    const { validPart, errorPart, text } = showCaseMaxLength

    const options: ParseSmartTextOptions = {
      text,
      maxLength: validPart.length,
    }
    const result = parseSmartText(options)
    expect(result).toStrictEqual([
      makeParsedText(validPart),
      makeParsedError(errorPart),
    ])
  })
})

describe('parseJSX utility tests', () => {
  test('Should parse single line with Text only', () => {
    const text = 'some text with spaces'

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text,
        type: 'text',
      },
    ])
  })
  test('Should parse single line with Text node JSXElement with no attrs', () => {
    const text = '<TextElem>some text</TextElem>'

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text: '<TextElem>',
        type: 'JSXElement',
      },
      {
        text: 'some text',
        type: 'text',
      },
      {
        text: '</TextElem>',
        type: 'JSXElement',
      },
    ])
  })
  test('Should parse single line self closing JSXElement with no attrs', () => {
    const text = '<SelfClosingReactComponent />'

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text,
        type: 'JSXElement',
      },
    ])
  })
  test('Should parse single line with Text node JSXElement with no attrs', () => {
    const text = '<TextElem>some text</TextElem>'

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text: '<TextElem>',
        type: 'JSXElement',
      },
      {
        text: 'some text',
        type: 'text',
      },
      {
        text: '</TextElem>',
        type: 'JSXElement',
      },
    ])
  })

  test('Should parse single line with Text node JSXElement with Attrs', () => {
    const text = '<TextElem color={"blue"}>some text</TextElem>'

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text: '<TextElem color={"blue"}>',
        type: 'JSXElement',
      },
      {
        text: 'some text',
        type: 'text',
      },
      {
        text: '</TextElem>',
        type: 'JSXElement',
      },
    ])
  })

  test('Should parse single line with Text node JSXElement with Attrs', () => {
    const text = '<TextElem color={"blue"}>some text</TextElem>'

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text: '<TextElem color={"blue"}>',
        type: 'JSXElement',
      },
      {
        text: 'some text',
        type: 'text',
      },
      {
        text: '</TextElem>',
        type: 'JSXElement',
      },
    ])
  })

  test('Should parse multiline', () => {
    const text = `<TextElem color={"blue"}>
      some text
    </TextElem>`

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text: '<TextElem color={"blue"}>',
        type: 'JSXElement',
      },
      {
        text: `
      some text
    `,
        type: 'text',
      },
      {
        text: '</TextElem>',
        type: 'JSXElement',
      },
    ])
  })

  test('Should parse multiline multiple elements', () => {
    const text = `<TextElem color={"blue"}>
      <SomeOtherElem color={"pink"}> Some other text </SomeOtherElem>
      some text
    </TextElem>`

    const options: ParseSmartTextOptions = {
      text,
      type: 'jsx',
    }
    const result = parseJSX(options)
    expect(result).toStrictEqual([
      {
        text: '<TextElem color={"blue"}>',
        type: 'JSXElement',
      },
      {
        text: `
      `,
        type: 'text',
      },
      {
        text: '<SomeOtherElem color={"pink"}>',
        type: 'JSXElement',
      },
      {
        text: ' Some other text ',
        type: 'text',
      },
      {
        text: '</SomeOtherElem>',
        type: 'JSXElement',
      },
      {
        text: `
      some text
    `,
        type: 'text',
      },
      {
        text: '</TextElem>',
        type: 'JSXElement',
      },
    ])
  })
})
