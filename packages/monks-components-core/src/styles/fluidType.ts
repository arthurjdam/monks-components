import { CSSObject } from '@emotion/react';

export const fluidType = (
  minFontSize: number,
  maxFontSize: number,
  minViewport = 480,
  maxViewport = 1920,
): CSSObject => ({
  fontSize: minFontSize,
  [`@media screen and (min-width: ${minViewport}px)`]: {
    fontSize: `calc(${minFontSize}px + ${
      maxFontSize - minFontSize
    } * (100vw - ${minViewport}px) / ${maxViewport - minViewport})`,
  },
  [`@media screen and (min-width: ${maxViewport}px)`]: {
    fontSize: maxFontSize,
  },
});
