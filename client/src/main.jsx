import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoContextProvider from './context/TodoContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> {/* </StrictMode>, */}
   <TodoContextProvider>
   <App />
   </TodoContextProvider>
   
   
    
  
)
