import gsap from "gsap";
import type { FadeFromToOptions, FadeToOptions } from "./fade.types";
import { defaultFadeFromToOptions, defaultFadeToOptions } from "./fade.config";

export function fadeFromTo(
  element: Element | HTMLElement | Array<HTMLElement>,
  options: FadeFromToOptions = {}
): gsap.core.Tween {
  const {
    autoAlpha,
    from,
    to,
    duration,
    clearProps,
    stagger,
    immediateRender,
  } = {
    ...defaultFadeFromToOptions,
    ...options,
  };

  return gsap.fromTo(
    element,
    { [autoAlpha ? "autoAlpha" : "opacity"]: from },
    {
      duration,
      stagger,
      immediateRender,
      [autoAlpha ? "autoAlpha" : "opacity"]: to,
      ease: "none",
      clearProps: clearProps || "",
    }
  );
}

export function fadeTo(
  element: Element | HTMLElement | Array<HTMLElement>,
  options: FadeToOptions = {}
): gsap.core.Tween {
  const { autoAlpha, to, duration, clearProps, stagger, onStart } = {
    ...defaultFadeToOptions,
    ...options,
  };

  return gsap.to(element, {
    stagger,
    duration,
    [autoAlpha ? "autoAlpha" : "opacity"]: to,
    ease: "none",
    clearProps: clearProps || "",
    onStart,
  });
}
