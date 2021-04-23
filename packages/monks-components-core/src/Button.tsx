import React, { PropsWithChildren, ReactElement } from 'react';
import useButtonStyles from './Button.styles';

type ButtonProps = {
  color?: string;
  bgColor?: 'primary' | 'secondary' | 'transparent';
  radius?: string;
  size?: string;
};
function Button({
  color = '',
  bgColor = 'primary',
  radius = '0px',
  size = '14px',
  children,
}: PropsWithChildren<ButtonProps>): ReactElement {
  const useStyles = useButtonStyles();
  return <button className={useStyles.button}>{children}</button>;
}
export default Button;
