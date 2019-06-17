import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: true,
    };
  }

  render() {
    const { children } = this.props;
    return <ThemeContext.Provider value={{ ...this.state }}>{children}</ThemeContext.Provider>;
  }
}
