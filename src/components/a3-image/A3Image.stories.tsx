import { Story, Meta } from "@storybook/react";
import A3Image from "./A3Image";

export default {
  title: "a3-image",
  component: A3Image,
} as Meta;

function getPlaceholderImage(
  width: number,
  height: number = width
): { src: string; width: number; height: number } {
  let src = `//dummyimage.com/${width}x${height}`;
  if (process.env.NODE_ENV === "production") {
    src = `//picsum.photos/${width}/${height}`;
  }
  return {
    src,
    width,
    height,
  };
}
// const Template = (args: A2IconProps) => <A2Icon {...args} />;
export const Primary: Story<typeof A3Image> = () => (
  <A3Image
    src={getPlaceholderImage(1280, 720).src}
    enableTransitionIn={true}
    enableFadeIn={true}
    alt="image"
    sources={[
      {
        srcset: getPlaceholderImage(1280, 720).src,
        media: "(min-width:768px)",
      },
    ]}
  />
);
