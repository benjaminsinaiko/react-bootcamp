import React, { Component } from 'react';

import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PageContent from './PageContent';
import Navbar from './Navbar';
import Form from './Form';

import FormHooks from './FormHooks';

class ContextApp extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
            <hr style={{ borderColor: 'red', width: '50%', margin: '64px auto 0px' }} />
            <FormHooks />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default ContextApp;
