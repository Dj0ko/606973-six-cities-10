import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks';
import { store } from './store';

const PLACES_COUNT = '312';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={PLACES_COUNT}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>,
);
