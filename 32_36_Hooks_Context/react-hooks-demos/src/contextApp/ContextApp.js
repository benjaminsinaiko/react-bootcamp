import React, { Component } from 'react';

import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PageContent from './PageContent';
// import Navbar from './Navbar';
// import Form from './Form';

import NavbarHooks from './NavbarHooks';
import FormHooks from './FormHooks';

class ContextApp extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            {/* <Navbar /> */}
            <NavbarHooks />
            {/* <Form /> */}
            <FormHooks />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default ContextApp;
