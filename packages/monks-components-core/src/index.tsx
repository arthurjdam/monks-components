import React, { ReactElement } from 'react';
import { Global as _Global, css } from '@emotion/react';
import '@arthurjdam/monks-components-font';

const Global = (): ReactElement => (
  <_Global
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
        fontFamily:
          'Monkvetica, Helvetica, Arial, sans-serif, "Apple Color Emoji"',
        textRendering: 'optimizeLegibility',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    }}
  />
);

export default Global;
