import React from 'react';
import Button from '.';
import { IconArrowRight, IconClock } from '@arthurjdam/monks-components-icon';

export default {
  title: 'Core/Button',
  component: Button,
  parameters: {
    inspectComponents: [Button],
  },
};

export function standardButtonWithAnInvertedVariant() {
  return (
    <React.Fragment>
      <Button icon={<IconArrowRight />}>Button</Button>
      <Button type="primary" icon={<IconArrowRight />}>
        Button
      </Button>
    </React.Fragment>
  );
}
standardButtonWithAnInvertedVariant.story = {
  name: 'Standard button',
};
standardButtonWithAnInvertedVariant.parameters = {
  docs: {
    storyDescription: 'asdf asdf asdf',
  },
};

export function ghostButton() {
  return (
    <React.Fragment>
      <Button type="ghost" icon={<IconArrowRight />}>
        Button
      </Button>
    </React.Fragment>
  );
}
ghostButton.story = {
  name: 'Ghost button',
};

export function invertedButton() {
  return (
    <React.Fragment>
      <Button inverted>Button</Button>
      <Button type="primary">Button</Button>
      <Button type="primary" icon={<IconClock />}>
        Button
      </Button>
      <Button inverted icon={<IconArrowRight />}>
        Button
      </Button>
    </React.Fragment>
  );
}
invertedButton.story = {
  name: 'Inverted button',
};

export function fullWidthButton() {
  return (
    <React.Fragment>
      <Button block={true} icon={<IconArrowRight />}>
        Button
      </Button>
    </React.Fragment>
  );
}
fullWidthButton.story = {
  name: 'Full width button',
};
