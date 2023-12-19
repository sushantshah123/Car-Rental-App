import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-ahm2u4bikmvds6zw.us.auth0.com"
    clientId="9fVJafSAkfznKYK4gn6Ovy8pTl9enCcJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <ToastContainer/>
    <App />
    </Provider>
    </Auth0Provider>
)
