{
  /*  */
}

import React from 'react';
import withIcon, { Props } from './withIcon';

function IconEllipsis(props: Props) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <circle
        vectorEffect="non-scaling-stroke"
        cx="11"
        cy="11"
        r="2.5"
      ></circle>
      <circle
        vectorEffect="non-scaling-stroke"
        cx="19"
        cy="11"
        r="2.5"
      ></circle>
      <circle vectorEffect="non-scaling-stroke" cx="3" cy="11" r="2.5"></circle>
    </svg>
  );
}
IconEllipsis.strokeOnly = true;

export default withIcon('IconText')(IconEllipsis);
