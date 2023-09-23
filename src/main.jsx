import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SuccessContext from './context/SuccessContext.jsx'
import { ScrollProvider } from './context/ScrollContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <SuccessContext>
        <App />
      </SuccessContext>
    </ScrollProvider>
  </React.StrictMode>,
)
