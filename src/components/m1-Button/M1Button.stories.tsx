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

export const MediumOutlineWithIcon: Story<typeof M1Button> = () => (
  <M1Button label="Click me!" icon="close" outlined={true} />
);

export const MediumWithIconMeta: Story<typeof M1Button> = () => (
  <M1Button label="Label" metadata="10:00" icon="arrow-right" />
);

export const MediumWithIconNumber: Story<typeof M1Button> = () => (
  <M1Button label="Label" numberCount={10} icon="arrow-right" />
);

export const Small: Story<typeof M1Button> = () => (
  <M1Button size="small" label="Label" />
);

export const SmallIcon: Story<typeof M1Button> = () => (
  <M1Button size="small" icon="close" />
);

export const SmallOutlineIcon: Story<typeof M1Button> = () => (
  <M1Button size="small" outlined={true} icon="close" />
);

export const SmallLabelIcon: Story<typeof M1Button> = () => (
  <M1Button size="small" label="Label" icon="close" />
);

export const SmallOutlineLabelIcon: Story<typeof M1Button> = () => (
  <M1Button size="small" outlined={true} label="Label" icon="close" />
);

export const SmallWithIconNumber: Story<typeof M1Button> = () => (
  <M1Button size="small" label="Label" numberCount={10} icon="arrow-right" />
);

export const SmallLabelIconTransparent: Story<typeof M1Button> = () => (
  <M1Button size="small" transparent={true} label="Label" icon="close" />
);