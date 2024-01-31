import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

i18n.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // Default language
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
