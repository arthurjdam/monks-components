import React from 'react';
import withIcon, { Props } from './withIcon';

function IconCross(props: Props) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path d="M16.66,16.66L5.34,5.34" />
      <path d="M5.34,16.66L16.66,5.34" />
    </svg>
  );
}
IconCross.strokeOnly = true;

export default withIcon('IconClock')(IconCross);
