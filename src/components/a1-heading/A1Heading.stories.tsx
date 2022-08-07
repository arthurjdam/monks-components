import { Story, Meta } from "@storybook/react";
import A1Heading from "./A1Heading";

export default {
  title: "a1-heading",
  component: A1Heading,
} as Meta;

const copy = (
  <>
    The quick brown fox jumps over the <em>lazy dog</em>.
  </>
);

export const Primary: Story<typeof A1Heading> = () => <A1Heading copy={copy} />;
