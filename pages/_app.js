import '../styles/globals.css'
import '../styles/custom.css'
import AppContext from "./AppContext";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState("en-US");
  console.log(languageSelected);
  return (
    <AppContext.Provider
      value={{
        setLanguageSelected: setLanguageSelected,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
