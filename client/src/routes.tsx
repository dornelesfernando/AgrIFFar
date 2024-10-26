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

import CashFlow from './pages/Dashboard/Farmer/components/CashFlow.jsx';
import Cost from './pages/Dashboard/Farmer/components/Cost.jsx';
import Depreciation from './pages/Dashboard/Farmer/components/Depreciation.jsx';
import Harvest from './pages/Dashboard/Farmer/components/Harvest.jsx';
import Inputs from './pages/Dashboard/Farmer/components/Inputs.jsx';
import Investment from './pages/Dashboard/Farmer/components/Investment.jsx';
import Machinery from './pages/Dashboard/Farmer/components/Machinery.jsx';
import Maintenance from './pages/Dashboard/Farmer/components/Maintenance.jsx';
import Planting from './pages/Dashboard/Farmer/components/Planting.jsx';
import Preparation from './pages/Dashboard/Farmer/components/Preparation.jsx';
import Stock from './pages/Dashboard/Farmer/components/Stock.jsx';
import Tips from './pages/Dashboard/Admin/components/Tips.jsx';
import Transport from './pages/Dashboard/Farmer/components/Transport.jsx';
import Crops from './pages/Dashboard/Admin/components/Crops.jsx';
import Reports from './pages/Dashboard/Admin/components/Reports.jsx';
import FieldCrops from './pages/Dashboard/Farmer/components/FieldCrops.jsx';
import Fields from './pages/Dashboard/Admin/components/Fields.jsx';
import FieldCropHarvests from './pages/Dashboard/Farmer/components/FieldCropHarvests.jsx';
import FieldCropTreatments from './pages/Dashboard/Farmer/components/FieldCropTreatments.jsx';

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

            {/* Dashboard farmer pages */}
            <Route path="/dashboard/crops" element={<Crops />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/fields" element={<Fields />} />
            <Route path="/dashboard/fieldCrops" element={<FieldCrops />} />
            <Route path="/dashboard/fieldCropHarvests" element={<FieldCropHarvests />} />
            <Route path="/dashboard/fieldCropTreatments" element={<FieldCropTreatments />} />
            <Route path="/dashboard/cashFlow" element={<CashFlow />} />
            <Route path="/dashboard/cost" element={<Cost />} />
            <Route path="/dashboard/depreciation" element={<Depreciation />} />
            <Route path="/dashboard/harvest" element={<Harvest />} />
            <Route path="/dashboard/inputs" element={<Inputs />} />
            <Route path="/dashboard/investment" element={<Investment />} />
            <Route path="/dashboard/machinery" element={<Machinery />} />
            <Route path="/dashboard/maintenance" element={<Maintenance />} />
            <Route path="/dashboard/planting" element={<Planting />} />
            <Route path="/dashboard/preparation" element={<Preparation />} />
            <Route path="/dashboard/stock" element={<Stock />} />
            <Route path="/dashboard/tips" element={<Tips />} />
            <Route path="/dashboard/transport" element={<Transport />} />
        </Routes>
    );
}

export default MainRoutes;
