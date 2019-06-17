import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'english',
    };
  }

  changeLanguage = (e) => {
    this.setState({ language: e.target.value });
  };

  render() {
    const { children } = this.props;
    return (
      <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }
}
