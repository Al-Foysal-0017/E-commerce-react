import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// Font
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'sa'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

  const loadingMarkup = (
    <div style={{display:"flex",  justifyContent:"center", alignItems:"center", width:"100vr", height:"100vh", }}>
      <h1 >Loading...</h1>
    </div>
  )

  ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
    ,
    document.getElementById('root')
  )
   
reportWebVitals()
