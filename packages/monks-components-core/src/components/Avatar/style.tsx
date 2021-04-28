import { css } from '@emotion/react';
import { colors, transitions } from '../../styles';

const sizeLarge = 72;
const sizeMedium = 46;

export const avatar = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  //   width: sizeMedium,
  //   height: sizeMedium,
  //   fontFamily: theme.typography.fontFamily,
  fontWeight: 900,
  fontStretch: 'expanded',
  fontSize: '100%',
  //   fontSize: `${20 / 16}rem`,
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',

  backgroundColor: colors.ultramarine['500'],
  color: colors.pink['100'],
});

export const avatarMedium = css({
  width: sizeMedium,
  height: sizeMedium,
  fontSize: '100%',
});

export const avatarLarge = css({
  width: sizeLarge,
  height: sizeLarge,
  boxShadow: `0 0 0 3px #fff, 0 0 0 4.4px ${colors.ultramarine['500']}`,
  fontSize: '150%',
});

export const img = css({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image. The property isn't supported by IE 11.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000,
});

export const icon = css({
  width: '75%',
  height: '75%',
});
