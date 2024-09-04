import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navigation } from './components/navigation.jsx';
// import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* <BrowserRouter>
   
    <Navigation/>

    </BrowserRouter> */}
    
  </StrictMode>,
)
