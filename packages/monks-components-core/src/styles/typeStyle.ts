import { CSSObject } from '@emotion/react';
import { fluidType } from './fluidType';
import { MediaQuery } from './mediaQuery';
import { respondTo } from './respondTo';
// import { theme } from './theme';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';
export type ParagraphSize =
  | 'large'
  | 'medium'
  | 'small'
  | 'xSmall'
  | 'data'
  | 'helper';
export type FontWeightType = '400' | '500' | '700' | '800';

const fontFamily =
  '"Monkvetica", Helvetica, Arial, sans-serif, "Apple Color Emoji"';

export const typeStyle: Record<
  HeadingType | ParagraphSize | 'label',
  CSSObject
> = {
  h1: {
    ...fluidType(45, 100),
    fontFamily: fontFamily,
    lineHeight: 1.15,
  },
  h2: {
    ...fluidType(30, 45),
    fontFamily: fontFamily,
    lineHeight: 1.15,
  },
  h3: {
    ...fluidType(24, 30),
    fontFamily: fontFamily,
    lineHeight: 1.3,
    fontStretch: 'expanded',
  },
  h4: {
    ...fluidType(20, 24),
    fontFamily: fontFamily,
    lineHeight: 1.3,
    fontStretch: 'expanded',
    [`@media ${respondTo(MediaQuery.minWidth1024)}`]: {
      fontSize: 18,
    },
  },
  large: {
    ...fluidType(18, 24),
    fontFamily: fontFamily,
    lineHeight: 1.5,
  },
  medium: {
    ...fluidType(16, 20),
    fontFamily: fontFamily,
    lineHeight: 1.3,
  },
  small: {
    fontSize: 14,
    fontFamily: fontFamily,
    lineHeight: 1.3,
  },
  xSmall: {
    fontSize: 12,
    fontFamily: fontFamily,
    lineHeight: 1.3,
  },
  label: {
    fontSize: 16,
    fontFamily: fontFamily,
    lineHeight: 1.3,
  },
  data: {
    fontSize: 14,
    fontFamily: fontFamily,
    lineHeight: 1.3,
  },
  helper: {
    fontSize: 10,
    fontFamily: fontFamily,
    lineHeight: '16px',
  },
};
