import React, { Component } from 'react';

import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PageContent from './PageContent';
import Navbar from './Navbar';
import Form from './Form';

class ContextApp extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default ContextApp;
