import styles from './RightSection.module.css'
import { useState, useEffect } from 'react';
import defaultUserPhoto from '../assets/img/defaultUserPhoto.jpg'
import { useNavigate } from 'react-router-dom';

function RightSection(){
    const [userType, setUserType] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        // Recupera o tipo de usuário do localStorage
        const storedUserType = localStorage.getItem('userType');
        setUserType(storedUserType[0].toUpperCase() + storedUserType.substring(1));

        const storedUserName = localStorage.getItem('name');
        setUserName(storedUserName);
    }, []);

    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate('/notfound');
    };

    return(
        <>
            <div className={styles.rightSection}>
                <div className={styles.nav}>
                    <button id="menu-btn">
                        <span className="material-icons-sharp">
                            menu
                        </span>
                    </button>
                    <div className={styles.darkMode}>
                        <span className="material-icons-sharp active">
                            light_mode
                        </span>
                        <span className="material-icons-sharp">
                            dark_mode
                        </span>
                    </div>

                    <div className={styles.profile}>
                        <div className={styles.info}>
                            <p>Olá, <b>{userName}</b></p>
                            <small className="text-muted">{userType}</small>
                        </div>
                        <div className={styles.profilePhoto}>
                            <img src={defaultUserPhoto} />
                        </div>
                    </div>

                </div>

                <div className={styles.userProfile}>
                    <div className={styles.logo}>
                        <img src='' />
                        <h2>Agriffar</h2>
                        <p>Auxiliando a sua produção!</p>
                    </div>
                </div>

                <div className={styles.reminders}>
                    <div className={styles.header}>
                        <h2>Reminders</h2>
                        <span className="material-icons-sharp">
                            notifications_none
                        </span>
                    </div>

                    {/*<div className={styles.notification}>
                        <div className={styles.icon}>
                            <span className="material-icons-sharp">
                                volume_up
                            </span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.info}>
                                <h3>Workshop</h3>
                                <small className="text_muted">
                                    08:00 AM - 12:00 PM
                                </small>
                            </div>
                            <span className="material-icons-sharp">
                                more_vert
                            </span>
                        </div>
                    </div>

                    <div className={`${styles.notification} ${styles.deactive}`}>
                        <div className={styles.icon}>
                            <span className="material-icons-sharp">
                                edit
                            </span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.info}>
                                <h3>Workshop</h3>
                                <small className="text_muted">
                                    08:00 AM - 12:00 PM
                                </small>
                            </div>
                            <span className="material-icons-sharp">
                                more_vert
                            </span>
                        </div>
                    </div>*/}

                    <div className={`${styles.notification} ${styles.addReminder}`}>
                        <a onClick={() => handleButtonClick()}>
                            <div>
                                <span className="material-icons-sharp">
                                    add
                                </span>
                                <h3>Add Reminder</h3>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default RightSection;