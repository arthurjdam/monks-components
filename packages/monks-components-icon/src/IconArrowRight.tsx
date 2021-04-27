import React from 'react';
import withIcon, { Props } from './withIcon';

function IconArrowRight(props: Props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M11.1,3l7.9,7.9l-7.9,7.9" />
      <line vectorEffect="non-scaling-stroke" x1="19" y1="11.07" x2="2" y2="11.07" />
    </svg>
  );
}
IconArrowRight.strokeOnly = true;

export default withIcon('IconArrowRight')(IconArrowRight);
