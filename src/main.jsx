import { createRoot } from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
