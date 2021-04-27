import { css } from '@emotion/react';
import { colors, transitions } from '../../styles';

const easeHoverIn = `200ms ${transitions.easeOutQuint}`;
const easeHoverOut = `600ms ${transitions.easeOutQuint}`;

const sizeLarge = 60;
const sizeSmall = 30;
const size = sizeSmall;

export const icon = css({
  backgroundColor: colors.warm['900'],
  color: colors.warm['100'],
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
    transition: `800ms ${transitions.easeOutQuint}`,
    transform: 'translate(50px, 0)',
  },
});
export const iconAfter = css({
  transformOrigin: '100% 50%',
  '& span:first-of-type': {
    transition: `800ms ${transitions.easeOutQuint}`,
    transform: 'translate(0, 0)',
  },
});

export const label = css({
  backgroundColor: colors.warm['900'],
  color: colors.warm['100'],
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
// console.log(label);
export const button = css({
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  position: 'relative',
  '&.withIcon:hover:not(:disabled) >': {
    '.iconBefore': {
      transition: easeHoverIn,
      transform: 'scale(1, 1)',
      '& span:first-of-type': {
        transform: 'translate(0, 0)',
      },
    },
    '.label': {
      transition: easeHoverIn,
      transform: `translate(${size}px, 0)`,
    },
    '.iconAfter': {
      transition: easeHoverIn,
      transform: 'scale(0, 0)',
      '& span:first-of-type': {
        transform: `translate(-50px, 0)`,
      },
    },
  },
});

export const button_block = css({
  display: 'flex',
  '> .label': {
    flexGrow: 1,
  },
});
export const button_primary = css({
  '> .label': {
    backgroundColor: colors.ultramarine['500'],
  },
  '> .iconBefore, > .iconAfter': {
    backgroundColor: colors.ultramarine['500'],
  },
});

export const button_inverted = css({
  color: colors.ultramarine['500'],
  '> .label': {
    color: colors.ultramarine['500'],
    backgroundColor: 'transparent',
    border: '1.2px solid currentColor',
  },
  '> .iconBefore, > .iconAfter': {
    color: colors.ultramarine['500'],
    backgroundColor: 'transparent',
    border: '1.2px solid currentColor',
  },
});
