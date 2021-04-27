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

const ButtonTypes = tuple('default', 'primary', 'ghost', 'link', 'text');
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type BaseButtonProps = {
  className?: string;
  /**
   * The display type of the button
   */
  type?: ButtonType;
  /**
   * Show an icon at the end of the button
   */
  icon?: React.ReactNode;
  /**
   * The size of the component (note there is currently no "medium" size)
   */
  size?: 'small' | 'large';
  /**
   * Set to true if the button should display a loading spinner
   */
  loading?: boolean | { delay?: number };
  /**
   * Make the buton span the entire width of its parent
   */
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

function Button({
  type = 'default',
  icon,
  disabled,
  size = 'small',
  loading,
  className,
  block = false,
  children,
  ...restProps
}: React.PropsWithChildren<ButtonProps>): ReactElement {
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
        type === 'ghost' && style.button_inverted,
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

export default Button;
