import styled, { css } from 'styled-components'
import { Props } from './Typography'

const getElemtypeForVariant = (variant: Props['variant'] = 'body') => {
  if (['h1', 'h2', 'h3', 'h4'].includes(variant)) {
    return variant
  }
  return 'h5'
}

export const TypographyContainer = styled.h4.attrs((props: Props) => ({
  ...props,
  as: getElemtypeForVariant(props.variant)
}))<Props>`
  color: ${({ theme, contrast }) => (contrast ? theme.palette.primary.contrastText : theme.palette.text.primary)};
  margin: 0;
  padding: 0;
  line-height: 1.4;
  ${(props) =>
    props.variant === 'h1' &&
    css`
      font-size: 5em;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 0.3em;
    `};
  ${(props) =>
    props.variant === 'h2' &&
    css`
      font-size: 4em;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 0.3em;
    `};
  ${(props) =>
    props.variant === 'h3' &&
    css`
      font-size: 2em;
      font-weight: 700;
      margin-bottom: 0.3em;
    `};

  ${(props) =>
    props.variant === 'body' &&
    css`
      font-weight: 400;
      line-height: 2em;
    `};
`
