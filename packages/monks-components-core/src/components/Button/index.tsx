/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import React, { ReactElement } from 'react';
import { tuple } from '../../utils/types';
// import { mutuallyExclusiveTrueProps } from 'airbnb-prop-types';
// import useStyles, { StyleSheet } from '../../hooks/useStyles';
// import ButtonOrLink, { ButtonOrLinkProps } from '../private/ButtonOrLink';
// import Loader from '../Loader';
// import { buttonStyleSheet } from './style';
import * as style from './style';

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text',
);
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type BaseButtonProps = {
  type?: ButtonType;
  /**
   * Displays an icon at the end of the button
   */
  icon?: React.ReactNode;
  /**
   * The size of the component
   */
  size?: 'small' | 'large';
  loading?: boolean | { delay?: number };
  className?: string;
  // ghost?: boolean;
  // danger?: boolean;
  block?: boolean;
};

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<unknown>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<unknown>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
// export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

function Button({
  type,
  icon,
  disabled,
  size = 'small',
  loading,
  className,
  block = false,
  children,
  ...restProps
}: React.PropsWithChildren<ButtonProps>): ReactElement {
  // const [styles, cx] = useStyles(styleSheet ?? buttonStyleSheet);

  return (
    <div
      {...restProps}
      //   aria-busy={loading}
      //   disabled={disabled}
      //   loading={loading}
      css={[
        style.button,
        // large && styles.button_large,
        // small && styles.button_small,
        // !large && !small && styles.button_regular,
        block && style.button_block,
        type === 'primary' && style.button_primary,
        // (disabled || loading) && styles.button_disabled,
        // (borderless || inverted) && styles.button_inverted,
        // invalid && styles.button_invalid,
        // borderless && styles.button_borderless,
        // loading && styles.button_loading,
      ]}
      className={!!icon && 'withIcon'}
    >
      {/* {loading ? <Loader inline inverted={!inverted} /> : children} */}
      {icon && (
        <div css={[style.icon, style.iconBefore]} className="iconBefore">
          <span>{icon}</span>
        </div>
      )}
      <div css={style.label} className="label">
        {children}
      </div>
      {icon && (
        <div css={[style.icon, style.iconAfter]} className="iconAfter">
          <span>{icon}</span>
        </div>
      )}
    </div>
  );
}

// Button.propTypes = {
//   large: sizingProp,
//   small: sizingProp,
// };

export default Button;
