import styled, { css } from 'styled-components';
import { IPropsTypographyStyle } from './types'

export const Container = styled.span<IPropsTypographyStyle>`
${({ color, margin, fontSize, weight, padding ,lineHeight}) => css<IPropsTypographyStyle>`
  font-size: ${ typeof fontSize === 'string'?fontSize : `${fontSize}+px`|| "16px"};
  color:${color || "black"}  ;
  font-weight: ${weight|| `500`};
  margin: ${typeof margin === 'string'? margin: `${margin}px` || `0px`};
  padding: ${typeof padding === 'string'?padding: `${padding}px`|| `0px`};
  line-height: ${typeof lineHeight === 'string'?lineHeight:`${lineHeight}px`|| `normal`} ;
  `}`