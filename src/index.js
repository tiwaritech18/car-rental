import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Auth0Provider 
        domain="dev-bnyq3hjndvotpatm.us.auth0.com"
        clientId="B3poOscBJBtygfzOOLRRRYLxPYWUjMvY"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
    </Auth0Provider>
    
</BrowserRouter>
);


