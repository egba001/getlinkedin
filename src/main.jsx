import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SuccessContext from './context/SuccessContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SuccessContext>
      <App />
    </SuccessContext>
  </React.StrictMode>,
)
