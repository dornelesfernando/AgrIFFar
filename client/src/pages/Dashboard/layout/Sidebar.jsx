import styles from './Sidebar.module.css';
import Toggle from '../components/Toggle';
import SidebarDashboardData from '../../../data/SidebarDashboard.json';
import SidebarItem from '../service/SidebarItem';

function Sidebar({ userType }) {
    // Adiciona um fallback para um array vazio se userType não corresponder
    const sidebarData = SidebarDashboardData.common.concat(
        SidebarDashboardData[userType] || []
    );

    console.log('Dados do Sidebar:', sidebarData); // Verifique os dados do sidebar

    return (
        <>
            <Toggle />
            <div className={styles.sidebar}>
                {sidebarData.map((item, index) => (
                    <SidebarItem
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        lastChildElement={sidebarData.length - 1 === index}
                    />
                ))}
            </div>
        </>
    );
}

export default Sidebar;