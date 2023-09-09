import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from "./redux/store"
import { Auth0Provider } from "@auth0/auth0-react"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
  domain="dev-vq0ub1u165mc13mt.us.auth0.com" 
  clientId="0u4Dxpjn9ean6QNwRZdz8KQ7FOzB1Nk9"
  authorizationParams={{
    redirect_uri: "http://localhost:3000/"
  }}
  audience= "http://localhost:5000/"
  scope= "openid profile email "
  >
    <Provider store={store}>
      <App />
    </Provider> 
  </Auth0Provider>
       
);


