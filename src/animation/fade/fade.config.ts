import type { FadeFromToOptions, FadeToOptions } from "./fade.types";

const defaultOptions = {
  duration: 0.5,
  autoAlpha: false,
  stagger: 0,
};

export const defaultFadeToOptions: FadeToOptions = {
  ...defaultOptions,
  to: 0,
};

export const defaultFadeFromToOptions: FadeFromToOptions = {
  ...defaultOptions,
  from: 0,
  to: 1,
  immediateRender: true,
  clearProps: "opacity,visibility",
};
