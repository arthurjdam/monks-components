import React from 'react';
import withIcon, { Props } from './withIcon';

function IconClock(props: Props) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <circle cx="11" cy="11" r="9.5" />
      <path d="M11,11.53V5.21" />
      <path d="M16.26,11H11" />
    </svg>
  );
}
IconClock.strokeOnly = true;

export default withIcon('IconCross')(IconClock);
