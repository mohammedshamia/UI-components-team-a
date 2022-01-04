import styled, { css } from 'styled-components';
import { IPropsTypographyStyle } from './types'

export const Container = styled.div<IPropsTypographyStyle>`
${({ color, margin, fontSize, weight, padding ,lineHeight}) => css<IPropsTypographyStyle>`
  font-size: ${ typeof fontSize === 'string'?`${fontSize}px`: fontSize|| "16px"};
  color:${color || "black"}  ;
  font-weight: ${weight|| `500`};
  margin: ${typeof margin === 'string'?`${margin}px`: margin || `0px`};
  padding: ${typeof padding === 'string'?`${padding}px`: padding|| `0px`};
  line-height: ${typeof lineHeight === 'string'?`${lineHeight}px`:lineHeight|| `normal`} ;
  `}`