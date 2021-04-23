import React from 'react';
import { ThemeProvider as _ThemeProvider } from 'react-jss';

const theme = {
  colorPrimary: 'green',
};

function ThemeProvider(props) {
  const { children, theme: localTheme } = props;

  return <_ThemeProvider theme={theme}>{children}</_ThemeProvider>;
}

export default ThemeProvider;
