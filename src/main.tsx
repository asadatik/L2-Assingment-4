import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import AppRoute from './Route/AppRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider   store={store}>

        <RouterProvider router={AppRoute} />   
                <ToastContainer></ToastContainer>
    </Provider>
  </StrictMode>,
)
