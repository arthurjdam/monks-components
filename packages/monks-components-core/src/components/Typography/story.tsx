import React from 'react';
import Typography from '.';

export default {
  title: 'Core/Typography',
  parameters: {
    inspectComponents: [Typography],
  },
};

export function headerStyles(): React.ReactElement {
  return (
    <React.Fragment>
      <h1>h1. Monk Typography</h1>
      <h2>h2. Monk Typography</h2>
      <h3>h3. Monk Typography</h3>
      <h4>h4. Monk Typography</h4>
      <h5>h5. Monk Typography</h5>
      <h6>h6. Monk Typography</h6>
    </React.Fragment>
  );
}

headerStyles.story = {
  name: 'Typography',
};
