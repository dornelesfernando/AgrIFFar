import React, { useEffect, useState } from 'react';
import DashboardAdmin from './Admin';
import DashboardFarmer from './Farmer';
import Sidebar from './layout/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        // Recupera o tipo de usuário do localStorage
        const storedUserType = localStorage.getItem('userType');
        setUserType(storedUserType);
    }, []);

    if (!userType) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.container}>
            <aside>
                <Sidebar userType={userType} /> 
            </aside>
            {userType === 'admin' ? <DashboardAdmin /> : <DashboardFarmer />}
        </div>
    );
};

export default Dashboard;