import './bootstrap';
import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator((story) => (
  <div
    style={{
      padding: 24,
    }}
  >
    {story()}
  </div>
));
