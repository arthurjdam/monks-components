import type { AbstractAnimationTypes } from "../AbstractAnimation.types";

export type FadeToOptions = AbstractAnimationTypes & {
  autoAlpha?: boolean;
  to?: number;
  onStart?: () => void;
  onComplete?: () => void;
};

export type FadeFromToOptions = {
  from?: number;
  immediateRender?: boolean;
} & FadeToOptions;
