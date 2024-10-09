import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import UserAccess from "./pages/UserAccess/index.jsx";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useraccess" element={<UserAccess />} />
        </Routes>
    );
}

export default MainRoutes;
