import React from 'react';
import withIcon, { Props } from './withIcon';

function IconAudio(props: Props) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <line x1="9.5" y1="15.77" x2="9.5" y2="6.23" />
      <line x1="12.5" y1="18.5" x2="12.5" y2="3.5" />
      <path d="M15.5,13.04V8.95" />
      <path d="M6.5,13.04V8.95" />
    </svg>
  );
}

export default withIcon('IconAudio')(IconAudio);
