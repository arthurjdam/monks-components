import { css } from '@emotion/react';

export const icon = css({
  backgroundColor: '#2d2d2d',
  width: 30,
  height: 30,
  borderRadius: '10rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  transition: '100ms ease-out',
});
export const iconBefore = css({
  top: 0,
  left: 0,
  position: 'absolute',
  transformOrigin: '0% 50%',
  transform: 'scale(0, 0)',
});
export const iconAfter = css({
  transformOrigin: '100% 50%',
});
export const label = css({
  backgroundColor: '#2d2d2d',
  height: 30,
  borderRadius: '10rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'rgb(234, 232, 228)',
  padding: '0 1.2rem',
  position: 'relative',
  transition: '100ms ease-out',
});

export const button = css({
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  position: 'relative',
  ':hover >': {
    ':nth-child(1)': {
      transform: 'scale(1, 1)',
    },
    ':nth-child(2)': {
      transform: 'translate(30px, 0)',
    },
    ':nth-child(3)': {
      transform: 'scale(0, 0)',
    },
  },
});
