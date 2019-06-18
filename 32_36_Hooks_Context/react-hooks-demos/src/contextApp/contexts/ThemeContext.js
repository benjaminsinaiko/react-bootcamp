import React, { createContext } from 'react';

import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  const { children } = props;
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
