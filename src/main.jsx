import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopContextProvider from './Context/ShopContext.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
   <StrictMode>
   <BrowserRouter>
   <ShopContextProvider>
      <Toaster/>
        <App />
   </ShopContextProvider>
   </BrowserRouter>
   </StrictMode>
    
 
)
