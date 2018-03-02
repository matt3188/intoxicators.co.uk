import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './redux/store';

import AppWrapper from './containers/AppWrapper/AppWrapper';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootElement = document.getElementById('root');
const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWrapper />
    </ConnectedRouter>
  </Provider>,
  rootElement
);

registerServiceWorker();
