import React from 'react';
import { Global, css } from '@emotion/react';
import { baseFont } from './styles/typeStyle';
import { colors } from './styles';
import '@arthurjdam/monks-components-font';

const _Global = (): React.ReactElement => (
  <Global
    styles={{
      html: {
        fontSize: '62.5%',
        fontFamily: baseFont,
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        overscrollBehavior: 'none',
        backgroundColor: colors.tinted.tan,
        color: colors.vibrant.tan,
      },
      body: {
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        margin: 0,
        overscrollBehavior: 'none',
        overflowX: 'hidden',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      'ul, ol': {
        margin: 0,
        listStyle: 'none',
        padding: 0,
      },
      blockquote: {
        margin: 0,
      },
      fieldset: {
        border: 0,
        padding: 0,
        margin: 0,
      },
    }}
  />
);

export default _Global;

export { default as Button } from './components/Button';
export { default as Avatar } from './components/Avatar';
