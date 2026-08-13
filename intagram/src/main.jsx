import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './app/store.js'
import AppRoutes from './router/AppRoutes.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <AppRoutes/>
  <ToastContainer />
</Provider>
)
