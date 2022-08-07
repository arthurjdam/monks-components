import { Story, Meta } from "@storybook/react";
import A2Icon, { Props as A2IconProps } from "./A2Icon";

export default {
  title: "a2-icon",
  component: A2Icon,
} as Meta;

// const Template = (args: A2IconProps) => <A2Icon {...args} />;
export const Primary: Story<typeof A2Icon> = () => <A2Icon name="close" />;

export const All: Story<typeof A2Icon> = () => (
  <>
    <A2Icon name="arrow-down" />
    <A2Icon name="arrow-left" />
    <A2Icon name="arrow-right" />
    <A2Icon name="arrow-top-right" />
    <A2Icon name="arrow-top" />

    <A2Icon name="loader" />
    <A2Icon name="chevron-down" />
    <A2Icon name="close" />
    <A2Icon name="collapse" />
    <A2Icon name="confirm" />
    <A2Icon name="copy-link" />
    <A2Icon name="cross" />

    <A2Icon name="download" />
    <A2Icon name="filter" />
    <A2Icon name="full-screen-close" />
    <A2Icon name="full-screen" />
    <A2Icon name="location" />
    <A2Icon name="lock" />
    <A2Icon name="pause" />
    <A2Icon name="plus" />
    <A2Icon name="podcast" />
    <A2Icon name="progress" />
    <A2Icon name="read-more" />
    <A2Icon name="replace" />
    <A2Icon name="search" />
    <A2Icon name="sound-off" />
    <A2Icon name="sound-on" />
    <A2Icon name="submit" />
    <A2Icon name="time" />
    <A2Icon name="transcript" />
    {/* <A2Icon name="loading-circle" /> */}
  </>
);
