import React from 'react';
import withIcon, { Props } from './withIcon';

function IconArrowUpRight(props: Props) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M5.44,4.56H16.6v11.17" />
      <line vectorEffect="non-scaling-stroke" x1="16.73" y1="4.69" x2="4.71" y2="16.71" />
    </svg>
  );
}
IconArrowUpRight.strokeOnly = true;

export default withIcon('IconArrowUpRight')(IconArrowUpRight);
