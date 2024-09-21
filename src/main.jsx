import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <div><Toaster/></div>
    <App />
  </BrowserRouter>
)