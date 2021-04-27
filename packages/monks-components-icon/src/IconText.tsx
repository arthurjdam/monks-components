import React from 'react';
import withIcon, { Props } from './withIcon';

function IconText(props: Props) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <line vectorEffect="non-scaling-stroke" x1="17" y1="5.5" x2="9" y2="5.5" />
      <line vectorEffect="non-scaling-stroke" x1="7" y1="5.5" x2="0" y2="5.5" />
      <line vectorEffect="non-scaling-stroke" x1="11" y1="0.5" x2="0" y2="0.5" />
      <line vectorEffect="non-scaling-stroke" x1="17" y1="0.5" x2="13" y2="0.5" />
      <line vectorEffect="non-scaling-stroke" x1="17" y1="10.5" x2="5" y2="10.5" />
      <line vectorEffect="non-scaling-stroke" x1="3" y1="10.5" x2="0" y2="10.5" />
    </svg>
  );
}
IconText.strokeOnly = true;

export default withIcon('IconText')(IconText);
