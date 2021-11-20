import { css } from '@emotion/react';
import { colors, transitions } from '../../styles';

const easeHoverIn = `400ms ${transitions.easeOutQuint}`;
const easeHoverOut = `600ms ${transitions.easeOutQuint}`;

const sizeLarge = 60;
const sizeSmall = 30;
const size = sizeSmall;

export const buttonLabel = '.label';
export const buttonIconAfter = '.iconAfter';
export const buttonIconBefore = '.iconBefore';

export const icon = css({
  backgroundColor: colors.tinted.tan,
  color: colors.white,
  width: size,
  height: size,
  borderRadius: '10rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  transition: easeHoverOut,
});
export const iconBefore = css({
  top: 0,
  left: 0,
  position: 'absolute',
  transformOrigin: '0% 50%',
  transform: 'scale(0, 0)',
  '& span:first-of-type': {
    transition: `600ms ${transitions.easeOutQuint}`,
    transform: 'translate(50px, 0)',
  },
});
export const iconAfter = css({
  transformOrigin: '100% 50%',
  '& span:first-of-type': {
    transition: `600ms ${transitions.easeOutQuint} 40ms`,
    transform: 'translate(0, 0)',
  },
});

export const label = css({
  backgroundColor: colors.tinted.tan,
  color: colors.white,
  height: size,
  borderRadius: '10rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1.2rem',
  position: 'relative',
  transition: easeHoverOut,

  fontSize: '0.875rem',
  fontWeight: 700,
});

export const button = css({
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  position: 'relative',
  '&.withIcon:hover:not(:disabled) >': {
    [buttonIconBefore]: {
      transition: easeHoverIn,
      transform: 'scale(1, 1)',
      '& span:first-of-type': {
        transform: 'translate(0, 0)',
        transition: `600ms ${transitions.easeOutQuint}`,
      },
    },
    [buttonLabel]: {
      transition: easeHoverIn,
      transform: `translate(${size}px, 0)`,
    },
    [buttonIconAfter]: {
      transition: easeHoverIn,
      transform: 'scale(0, 0)',
      '& span:first-of-type': {
        transform: `translate(-50px, 0)`,
        transition: `200ms ${transitions.easeOutQuint}`,
      },
    },
  },
});

export const button_block = css({
  display: 'flex',
  [`> ${buttonLabel}`]: {
    flexGrow: 1,
  },
});
export const button_primary = css({
  [`> ${buttonLabel}`]: {
    backgroundColor: colors.vibrant.purple,
  },
  [`> ${buttonIconBefore}, > ${buttonIconAfter}`]: {
    backgroundColor: colors.vibrant.purple,
  },
});

export const button_inverted = css({
  color: colors.tinted.tan,
  [`> ${buttonLabel}`]: {
    color: colors.tinted.tan,
    backgroundColor: 'transparent',
    border: '1.2px solid currentColor',
  },
  [`> ${buttonIconBefore}, > ${buttonIconAfter}`]: {
    color: colors.tinted.tan,
    backgroundColor: 'transparent',
    border: '1.2px solid currentColor',
  },
});
