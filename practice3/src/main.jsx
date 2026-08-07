
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import AppRoutes from './router/AppRoutes.jsx'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
)
