import React from 'react';

import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PageContent from './PageContent';
import NavbarHooks from './NavbarHooks';
import FormHooks from './FormHooks';

export default function ContextApp() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <NavbarHooks />
          <FormHooks />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}
