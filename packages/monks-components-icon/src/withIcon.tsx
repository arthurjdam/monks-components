import React, { SVGAttributes } from 'react';

export type WithIconWrapperProps = {
  /** Accessibility label. Required if `decorative` not defined. */
  accessibilityLabel?: string;
  /** Mark as decorative only and avoid accessibility. Required if `accessibilityLabel` not defined. */
  decorative?: boolean;
  /** Flip the icon on the horizontal axis. */
  flip?: boolean;
  /** Flip the icon on the vertical axis. */
  flipVertical?: boolean;
  /** Size of the icon. */
  size?: number | string;
  /** Color the icon using a CSS hexcode. */
  color?: string;
  /** Render as inline instead of block. */
  inline?: boolean;
};

export type Props = {
  focusable: SVGAttributes<unknown>['focusable'];
  role: string;
  style: React.CSSProperties;
  color: string;
};

export default function withIcon(
  name: string,
): (
  WrappedComponent: React.ComponentType<Props> & { strokeOnly?: boolean },
) => React.ComponentType<WithIconWrapperProps> {
  return (WrappedComponent) => {
    function Icon({
      accessibilityLabel,
      color = 'currentColor',
      decorative,
      flip,
      flipVertical,
      inline,
      size = '1em',
    }: WithIconWrapperProps) {
      const props: Props & {
        'aria-hidden'?: boolean;
        'aria-label'?: string;
      } = {
        focusable: 'false',
        role: decorative ? 'presentation' : 'img',
        color,
        style: {
          height: size,
          width: size,
          display: inline ? 'inline' : 'block',
          stroke: WrappedComponent.strokeOnly === true ? color : 'none',
          strokeWidth: WrappedComponent.strokeOnly === true ? '1.2px' : 0,
          fill: WrappedComponent.strokeOnly === true ? 'none' : color,
          transform:
            flip || flipVertical
              ? `scale(${flip ? -1 : 1}, ${flipVertical ? -1 : 1})`
              : 'scale(1)', // keep scale(1) for transition flipping
          transition: 'transform 300ms ease-out',
        },
      };

      if (decorative) {
        props['aria-hidden'] = true;
      }

      if (accessibilityLabel) {
        props['aria-label'] = accessibilityLabel;
      }

      return <WrappedComponent {...props} />;
    }

    Icon.displayName = name;
    Icon.WrappedComponent = WrappedComponent;

    return Icon;
  };
}
