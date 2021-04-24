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
    <React.Fragment>
      <Button>Button</Button>
      <Button inverted>Button</Button>
    </React.Fragment>
  );
}

standardButtonWithAnInvertedVariant.story = {
  name: 'Standard button and an inverted variant.',
};
