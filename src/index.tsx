import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStylesProvider from './providers/GlobalStylesProvider';
import ThemeClientProvider from './providers/ThemeProvider';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStylesProvider />
    <Provider store={store}>
      <ThemeClientProvider>
        <App />
      </ThemeClientProvider>
    </Provider>
  </React.StrictMode>
);