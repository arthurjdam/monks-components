import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module).add('red', () => {
  return <Button>asdf</Button>;
});
