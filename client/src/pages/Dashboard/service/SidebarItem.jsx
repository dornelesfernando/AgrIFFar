import React from 'react';
import styles from '../layout/Sidebar.module.css';

const SidebarItem = ({ href, icon, label, lastChildElement }) => {
    
    return (
        <a href={href} className={`
            ${label.toLowerCase() === 'sair' ? `${styles.logout}` : ''} 
            ${lastChildElement ? `${styles.lastChildElement}` : ''}
        }`}>
            <span className="material-icons-sharp">{icon}</span>
            <h3>{label}</h3>
        </a>
    );
};

export default SidebarItem;