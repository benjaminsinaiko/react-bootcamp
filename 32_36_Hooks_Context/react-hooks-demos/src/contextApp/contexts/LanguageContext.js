import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('english');

  const changeLanguage = e => setLanguage(e.target.value);
  const { children } = props;
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
