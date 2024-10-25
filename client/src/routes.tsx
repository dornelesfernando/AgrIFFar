import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import UserAccess from "./pages/UserAccess/index.jsx";
import Dashboard from './pages/Dashboard/index.jsx';
import NotFound from './pages/NotFound/index.jsx';

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useraccess" element={<UserAccess />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notfound" element={<NotFound />} />
        </Routes>
    );
}

export default MainRoutes;
