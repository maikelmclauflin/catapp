import React from 'react';
import ReactDOM from 'react-dom';
// , { browserHistory }
import store from 'store';
import { Provider } from 'react-redux';
import PageContainer from 'components/PageContainer'
// import { ConnectedRouter } from 'react-router-redux';
import './global-styles.js';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
const MOUNT_NODE = document.getElementById('root')
  // <ConnectedRouter history={browserHistory}>
ReactDOM.render(
<Provider store={store}>
  <PageContainer>
    <App />
  </PageContainer>
</Provider>, MOUNT_NODE);
registerServiceWorker();
  // </ConnectedRouter>

