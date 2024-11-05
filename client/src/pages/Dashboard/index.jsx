import React, { useEffect, useState } from 'react';
import DashboardAdmin from './Admin';
import DashboardFarmer from './Farmer';
import Sidebar from './layout/Sidebar';
import styles from './Dashboard.module.css';
import Loading from '../../utils/Loading';
import RightSection from './layout/RightSection';

const Dashboard = () => {
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        // Recupera o tipo de usuário do localStorage
        const storedUserType = localStorage.getItem('userType');
        setUserType(storedUserType);
    }, []);

    if (!userType) return < Loading />;
    
    return (
        <div className={styles.container}>
            <aside>
                <Sidebar userType={userType} />
            </aside>
            {userType === 'admin' ? <DashboardAdmin /> : <DashboardFarmer />}
            <RightSection />
        </div>
    );
};

export default Dashboard;