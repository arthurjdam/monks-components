import React, { Fragment } from 'react';
import Global from '../src';

export const decorators = [
  // Add global style
  (Story) => (
    <Fragment>
      <Global theme="default" />
      <Story />
    </Fragment>
  ),
  // Add padding around everything
  (Story) => (
    <div
      style={{
        padding: 24,
      }}
    >
      <Story />
    </div>
  ),
];
