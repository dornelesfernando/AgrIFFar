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

import AdmUsers from './pages/Dashboard/Admin/components/Users.jsx';
import AdmOverview from './pages/Dashboard/Admin/components/Overview.jsx';
import AdmTeam from './pages/Dashboard/Admin/components/Team.jsx';
import AdmReports from './pages/Dashboard/Admin/components/Reports.jsx';
import AdmCrops from './pages/Dashboard/Admin/components/Crops.jsx';
import AdmFields from './pages/Dashboard/Admin/components/Fields.jsx';
import AdmTips from './pages/Dashboard/Admin/components/Tips.jsx';
import AdmRecentOrders from './pages/Dashboard/Admin/components/RecentOrders.jsx';

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

            {/* Dashboard admin pages */}
            <Route path="/dashboard/admin/users" element={<AdmUsers />} />
            <Route path="/dashboard/admin/overview" element={<AdmOverview />} />
            <Route path="/dashboard/admin/team" element={<AdmTeam />} />
            <Route path="/dashboard/admin/reports" element={<AdmReports />} />
            <Route path="/dashboard/admin/crops" element={<AdmCrops />} />
            <Route path="/dashboard/admin/fields" element={<AdmFields />} />
            <Route path="/dashboard/admin/tips" element={<AdmTips />} />
            <Route path="/dashboard/admin/recentOrders" element={<AdmRecentOrders />} />
        </Routes>
    );
}

export default MainRoutes;
