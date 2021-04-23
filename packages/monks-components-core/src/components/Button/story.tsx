import React from 'react';
import Button from '.';

export default {
  title: 'Core/Button',
  parameters: {
    inspectComponents: [Button],
  },
};

export function standardButtonWithAnInvertedVariant() {
    return (
      <>
        <Button>Button</Button>
        <Button inverted>Button</Button>
      </>
    );
  }
  
  standardButtonWithAnInvertedVariant.story = {
    name: 'Standard button and an inverted variant.',
  };