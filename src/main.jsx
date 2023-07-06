import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import Mailto from 'reactv16-mailto';
import './App.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter scrollRestoration="auto">
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>

  </React.StrictMode>,
)
