/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import React, { ReactElement } from 'react';
// import { mutuallyExclusiveTrueProps } from 'airbnb-prop-types';
// import useStyles, { StyleSheet } from '../../hooks/useStyles';
// import ButtonOrLink, { ButtonOrLinkProps } from '../private/ButtonOrLink';
// import Loader from '../Loader';
// import { buttonStyleSheet } from './style';
import * as style from './style';

export type ButtonProps = {
  /** Render as a block with full width. */
  block?: boolean;
  /** Render as borderless. */
  borderless?: boolean;
  /** @ignore Hidden prop used in forms. */
  invalid?: boolean;
  /** Invert text colors. */
  inverted?: boolean;
  /** Increase font size and padding to large. */
  size?: 'small' | 'large';
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
};

function Button({
  block,
  borderless,
  children,
  //   disabled,
  invalid,
  inverted,
  size,
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
      {/* <div className={cx(styles.icon, styles.iconBefore)}>a</div> */}
      <div css={style.label}>asdf{children}</div>
      {/* <div className={cx(styles.icon, styles.iconAfter)}>a</div> */}
    </div>
  );
}

// Button.propTypes = {
//   large: sizingProp,
//   small: sizingProp,
// };

export default Button;
