import React, { useContext } from 'react';

import { ThemeContext } from './contexts/ThemeContext';

const PageContent = (props) => {
  const styles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    height: '100vh',
    width: '100vw',
  };
  const { isDarkMode } = useContext(ThemeContext);
  const { children } = props;

  return <div style={styles}>{children}</div>;
};

export default PageContent;
