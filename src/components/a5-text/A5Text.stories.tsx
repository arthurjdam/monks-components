// import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Story, Meta } from "@storybook/react";
import A5Text from "./A5Text";

export default {
  title: "a5-text",
  component: A5Text,
  // } as ComponentMeta<typeof A5Text>;
} as Meta;

// export const Primary: ComponentStory<typeof A5Text> = () => (
export const Primary: Story<typeof A5Text> = () => <A5Text copy="asdf w00t" />;
