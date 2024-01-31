import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-0 right-0 mt-4 mr-4">
      <button onClick={() => changeLanguage('en')}
        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
      >English</button>
      <button onClick={() => changeLanguage('fr')}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >Français</button>
    </div>
  );
};

export default LanguageSwitcher;
