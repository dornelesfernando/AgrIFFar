import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import UserAccess from "./pages/UserAccess/index.jsx";
import Dashboard from './pages/Dashboard/index.jsx';
import NotFound from './pages/NotFound/index.jsx';

import AboutUs from './pages/Home/pages/AboutUs.jsx';
import OurServices from './pages/Home/Pages/ourServices.jsx';
import PrivacyPolicy from './pages/Home/Pages/privacyPolicy.jsx';
import Institution from './pages/Home/Pages/institution.jsx';
import FAQ from './pages/Home/Pages/FAQ.jsx';

import Settings from './pages/Dashboard/components/Settings.jsx';
import Profile from './pages/Dashboard/components/Profile.jsx';

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userAccess" element={<UserAccess />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notFound" element={<NotFound />} />

            {/* Home page */}
            <Route path="/home/aboutUs" element={<AboutUs />} />
            <Route path="/home/ourServices" element={<OurServices />} />
            <Route path="/home/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/home/institution" element={<Institution />} />
            <Route path="/home/FAQ" element={<FAQ />} />

            {/* Dashboard commom pages */}
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
    );
}

export default MainRoutes;
