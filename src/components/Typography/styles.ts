import styled, { css } from 'styled-components'
import { Props } from './Typography'

const getElemtypeForVariant = (variant: Props['variant'] = 'body') => {
  if (['h1', 'h2', 'h3', 'h4'].includes(variant)) {
    return variant
  }
  return 'h5'
}

export const Container = styled.h4.attrs((props: Props) => ({
  ...props,
  as: getElemtypeForVariant(props.variant),
}))<Props>`
  color: ${(props) => props.theme.palette.secondary.main};
  margin: 0;
  ${(props) =>
    props.variant === 'h1' &&
    css`
      font-size: 36px;
      line-height: 30px;
      font-weight: 900;
    `};
  ${(props) =>
    props.variant === 'h2' &&
    css`
      font-size: 24px;
      line-height: 24px;
      font-weight: 300;
    `};

  ${(props) =>
    props.variant === 'body' &&
    css`
      font-size: 15px;
      line-height: 15px;
      font-weight: 300;
      color: ${props.theme.palette.secondary.light};
    `};
`
