import React, { Component } from 'react';

import { ThemeContext } from './contexts/ThemeContext';

class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? 'black' : 'white',
      height: '100vh',
      width: '100vw',
    };
    const { children } = this.props;

    return <div style={styles}>{children}</div>;
  }
}

export default PageContent;
