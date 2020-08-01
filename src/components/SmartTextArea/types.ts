export interface OptionsBase {
  text: string
  type?: 'text' | 'jsx' // 'text' is default
}

export interface ParseTextOptions extends OptionsBase {
  maxLength?: number
  type?: 'text'
}

export interface ParseJSXOptions extends OptionsBase {
  type: 'jsx'
}

export type ParseSmartTextOptions = ParseTextOptions | ParseJSXOptions

export interface Parsed {
  text: string
  type: 'error' | 'text' | 'JSXElement' | 'JSXExpression'
}
