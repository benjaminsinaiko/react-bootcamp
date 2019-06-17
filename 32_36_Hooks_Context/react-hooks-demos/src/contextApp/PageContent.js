import React, { Component } from 'react';

class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: 'white',
      height: '100vh',
      width: '100vw',
    };
    const { children } = this.props;

    return <div style={styles}>{children}</div>;
  }
}

export default PageContent;
