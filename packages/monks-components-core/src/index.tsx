import React from 'react';
import { Global, css } from '@emotion/react';
// import { typeStyle } from './styles/typeStyle';
// import '@arthurjdam/monks-components-font';

const _Global = (): React.ReactElement => (
  <Global
    styles={{
      html: {
        fontSize: '62.5%',
        // fontFamily: $baseFont,
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        overscrollBehavior: 'none',
        // backgroundColor: var(--themed-background, $colorTanTinted),
        // color: var(--themed-foreground, $colorTanVibrant),
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

      // '*': {
      //   boxSizing: 'border-box',
      // },
      // 'html, body': {
      //   height: '100%',
      //   margin: 0,
      //   padding: 0,
      // },
      // body: {
      //   fontSize: 16,
      //   fontFamily:
      //     '"Monkvetica", Helvetica, Arial, sans-serif, "Apple Color Emoji"',
      //   textRendering: 'optimizeLegibility',
      //   msTextSizeAdjust: '100%',
      //   WebkitTextSizeAdjust: '100%',
      //   WebkitFontSmoothing: 'antialiased',
      //   MozOsxFontSmoothing: 'grayscale',
      // },
      // ...typeStyle,
      // h1: {
      //   fontWeight: 800,
      //   fontStretch: 'expanded',
      // },
      // h2: {
      //   fontWeight: 800,
      //   fontStretch: 'expanded',
      // },
    }}
  />
);

export { default as Button } from './components/Button';

export default _Global;
