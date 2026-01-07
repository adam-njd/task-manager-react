import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AllTasksProvider } from './context/Alltasks.jsx'
createRoot(document.getElementById('root')).render(
  
 <StrictMode>
     <AllTasksProvider >
    <App/>
   </AllTasksProvider>
  </StrictMode>
   
)
