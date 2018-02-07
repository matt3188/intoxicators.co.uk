import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store';

import AppWrapper from './containers/AppWrapper/AppWrapper';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWrapper />
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
