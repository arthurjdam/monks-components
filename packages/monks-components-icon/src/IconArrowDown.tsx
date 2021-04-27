import React from 'react';
import withIcon, { Props } from './withIcon';

function IconArrowDown(props: Props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19,11.1,11.1,19,3.21,11.1" transform="translate(-2.85 -2)" />
      <line x1="8.08" y1="17" x2="8.08" />
    </svg>
  );
}
IconArrowDown.strokeOnly = true;

export default withIcon('IconArrowDown')(IconArrowDown);
