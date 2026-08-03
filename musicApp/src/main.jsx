import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter'
import { MyContextProvider } from './context/MyContext'


createRoot(document.getElementById('root')).render(

    <MyContextProvider>
        <AppRouter/>
    </MyContextProvider>

)
