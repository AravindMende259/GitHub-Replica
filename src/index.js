import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GitHubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import REACT_APP_DOMAIN_ID from '../src/'
const domainId=`${process.env.REACT_APP_DOMAIN_ID}`
const clientIdfromenv=`${process.env.REACT_APP_CLIENT_ID}`

console.log(domainId,clientIdfromenv,"Checking getting env value..............")
ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
    domain={`${process.env.REACT_APP_DOMAIN_ID}`}
    clientId={`${process.env.REACT_APP_CLIENT_ID}`}
    redirectUri={window.location.origin}
  >
    <GitHubProvider>
    <App />
    </GitHubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
