import { CSSObject } from '@emotion/react';
import { colors } from '.';
import { fluidType } from './fluidType';
import { MediaQuery } from './mediaQuery';
import { respondTo } from './respondTo';
// import { theme } from './theme';

export const fontVariants = {
  extended: 'Helvetica Now Extended',
  sansSerifDisplay: 'Helvetica Now Display',
  sansSerif: 'Helvetica Now Text',
  serif: 'Morian Trial',
  caveat: 'Caveat',
};
export const baseFont = 'Arial, sans-serif';
export const baseFontSize = 10;

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';
export type ParagraphSize =
  // | 'large'
  // | 'medium'
  | 'small'
  // | 'xSmall'
  // | 'data'
  // | 'helper'
  | 'p'
  | 'code'
  | 'a';
export type FontWeightType = '400' | '500' | '700' | '800';

const fontFamily = `${fontVariants.sansSerif}, ${baseFont}`;

export const typeStyle: Record<
  HeadingType | ParagraphSize | 'label',
  CSSObject
> = {
  h1: {
    fontSize: 100,
    // ...fluidType(45, 100),
    fontFamily,
    lineHeight: 1.15,
    fontStretch: 'expanded',
  },
  h2: {
    // ...fluidType(30, 45),
    fontFamily,
    fontSize: 45,
    lineHeight: 1.15,
    fontStretch: 'expanded',
  },
  h3: {
    // ...fluidType(24, 30),
    fontSize: 18,
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
  // large: {
  //   fontSize: 18,
  //   lineHeight: 1.5,
  // },
  p: {
    //   fontSize: 16,
    lineHeight: 1.625,
  },
  small: {
    fontSize: 12,
    lineHeight: 1.3,
  },
  // xSmall: {
  //   fontSize: 12,
  //   fontFamily: fontFamily,
  //   lineHeight: 1.3,
  // },
  label: {
    fontSize: 16,
    fontFamily,
    lineHeight: 1.3,
  },
  // data: {
  //   fontSize: 14,
  //   fontFamily: fontFamily,
  //   lineHeight: 1.3,
  // },
  // helper: {
  //   fontSize: 10,
  //   fontFamily: fontFamily,
  //   lineHeight: '16px',
  // },
  code: {
    fontFamily: '"Source Code Pro", monospace',
    fontSize: '85%',
    backgroundColor: colors.grey['500'],
    padding: '0.2em 0.4em',
    margin: 0,
    borderRadius: 6,
  },
  a: {
    textDecoration: 'none',
    color: colors.ultramarine['500'],
    fontWeight: 700,
    '&:hover': {
      // borderBottom: `2px solid currentColor`,
      // background-size: 1px 1em;
      boxShadow: 'inset 0 -0.175em white, inset 0 -0.2em #000',
      display: 'inline',

      textShadow:
        '2px 2px white, 2px -2px white, -2px 2px white, -2px -2px white',
    },
  },
};
