import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter } from 'react-router-dom'
import Context from './Components/Context/Context.jsx'
import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
 <BrowserRouter><Context>
 <App />
 </Context></BrowserRouter> ,
)
