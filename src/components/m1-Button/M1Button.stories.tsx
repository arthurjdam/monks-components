import { Story, Meta } from "@storybook/react";
import M1Button from "./M1Button";

export default {
  title: "m1-button",
  component: M1Button,
} as Meta;

export const Medium: Story<typeof M1Button> = () => (
  <M1Button label="Click me!" />
);

export const MediumIcon: Story<typeof M1Button> = () => (
  <M1Button icon="cross" />
);

export const MediumWithIcon: Story<typeof M1Button> = () => (
  <M1Button label="Click me!" icon="close" />
);

export const MediumWithIconMeta: Story<typeof M1Button> = () => (
  <M1Button label="Label" metadata="10:00" icon="arrow-right" />
);

export const MediumWithIconNumber: Story<typeof M1Button> = () => (
  <M1Button label="Label" numberCount={10} icon="arrow-right" />
);
