import AppContext from "../context/AppContext";
import { useEffect, useState } from 'react';
import '../styles/globals.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider
      value={{
        lang: 'en-US'
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
