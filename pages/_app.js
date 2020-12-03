import React from 'react';
import { Provider } from 'react-redux'
import store from '../src/redux/store';
import '../styles/global.css';

export default function Index({Component, pageProps}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
