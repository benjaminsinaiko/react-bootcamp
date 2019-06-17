import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: true,
    };
  }

  toggleTheme = () => {
    const { isDarkMode } = this.state;
    this.setState({ isDarkMode: !isDarkMode });
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}
