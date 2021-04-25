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
  icon?: React.ReactNode;
  size?: 'small' | 'large';
  loading?: boolean | { delay?: number };
  className?: string;
  // ghost?: boolean;
  // danger?: boolean;
  block?: boolean;
};

// export type AnchorButtonProps = {
//   href: string;
//   target?: string;
//   onClick?: React.MouseEventHandler<HTMLElement>;
// } & BaseButtonProps &
//   Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

// export type NativeButtonProps = {
//   htmlType?: ButtonHTMLType;
//   onClick?: React.MouseEventHandler<HTMLElement>;
// } & BaseButtonProps &
//   Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

// export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

function Button({
  block,
  borderless,
  children,
  //   disabled,
  invalid,
  inverted,
  size = 'small',
  //   loading,
  styleSheet,
  ...restProps
}: React.PropsWithChildren<ButtonProps>): ReactElement {
  // const [styles, cx] = useStyles(styleSheet ?? buttonStyleSheet);

  return (
    <div
      {...restProps}
      //   aria-busy={loading}
      //   disabled={disabled}
      //   loading={loading}
      css={
        style.button
        // large && styles.button_large,
        // small && styles.button_small,
        // !large && !small && styles.button_regular,
        // block && styles.button_block,
        // (disabled || loading) && styles.button_disabled,
        // (borderless || inverted) && styles.button_inverted,
        // invalid && styles.button_invalid,
        // borderless && styles.button_borderless,
        // loading && styles.button_loading,
      }
    >
      {/* {loading ? <Loader inline inverted={!inverted} /> : children} */}
      <div css={[style.icon, style.iconBefore]}>a</div>
      <div css={style.label}>asdf{children}</div>
      <div css={[style.icon, style.iconAfter]}>a</div>
    </div>
  );
}

// Button.propTypes = {
//   large: sizingProp,
//   small: sizingProp,
// };

export default Button;
