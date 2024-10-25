import styles from './Sidebar.module.css';
import Toggle from '../components/Toggle';
import SidebarDashboardData from '../../../data/sidebarDashboard.json';
import SidebarItem from '../service/SidebarItem';

function Sidebar({ userType }) {
    // Adiciona um fallback para um array vazio se userType não corresponder
    const sidebarData = SidebarDashboardData.common.concat(
        SidebarDashboardData[userType] || []
    );

    return (
        <>
            <Toggle />
            <div className={styles.sidebar}>
                <div className={styles.sidebarItens}>
                    {sidebarData.map((item, index) => (
                        <SidebarItem
                            key={index}
                            href={item.href}
                            icon={item.icon}
                            label={item.label}
                        />
                    ))}
                </div>
                <div className={styles.logoutWrapper}>
                    <a href={'/logout'} className={styles.logout}>
                        <span className="material-icons-sharp">exit_to_app</span>
                        <h3>Sair</h3>
                    </a>
                </div>
            </div>
            
        </>
    );
}

export default Sidebar;
