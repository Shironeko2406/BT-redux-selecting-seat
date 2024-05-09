import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Seat from './Component/Seat.jsx'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ToastContainer/>
    <Seat />
  </Provider>
)
