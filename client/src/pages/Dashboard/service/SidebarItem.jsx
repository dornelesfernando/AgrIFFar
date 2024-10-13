import React from 'react';

const SidebarItem = ({ href, icon, label }) => {
    return (
        <a href={href}>
            <span className="material-icons-sharp">{icon}</span>
            <h3>{label}</h3>
        </a>
    );
};

export default SidebarItem;