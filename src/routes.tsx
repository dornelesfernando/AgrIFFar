import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import UserAccess from "./pages/userAccess";
import TopContainer from './TopContainer';

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useraccess" element={<UserAccess />} />
        </Routes>
    )
}

export default MainRoutes;