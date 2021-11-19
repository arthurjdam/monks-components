import React from 'react';
import { Global, css } from '@emotion/react';
// import { typeStyle } from './styles/typeStyle';
// import '@arthurjdam/monks-components-font';

const _Global = (): React.ReactElement => (
  <Global
    styles={{
      '*': {
        boxSizing: 'border-box',
      },
      'html, body': {
        height: '100%',
        margin: 0,
        padding: 0,
      },
      body: {
        fontSize: 16,
        fontFamily:
          '"Monkvetica", Helvetica, Arial, sans-serif, "Apple Color Emoji"',
        textRendering: 'optimizeLegibility',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
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
