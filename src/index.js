import React from 'react';
import ReactDOM from 'react-dom';

import AppWrapper from './containers/AppWrapper/AppWrapper';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(React.createElement(AppWrapper), document.getElementById('root'));
registerServiceWorker();
