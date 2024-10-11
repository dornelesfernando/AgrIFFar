import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import Watermark from '../Watermark/Watermark';

function Navbar() {
    const navigate = useNavigate();

    const handleButtonClick = (isLogin) => {
        navigate('/UserAccess', { state: { isLogin } });
    };

    return (
        <div className={styles.navbar}>
            <Watermark />

            <div className={styles.nav_buttons} id="navMenu">
                <button className={`${styles.info_btn} ${styles.nav_btn}`} onClick={() => handleButtonClick(true)}>CADASTRO</button>
                <button className={`${styles.info_btn} ${styles.nav_btn}`} onClick={() => handleButtonClick(false)}>LOGIN</button>
            </div>

            <button className={styles.toggler}>
                <i className='bx bx-menu'></i>
            </button>
        </div>
    );
}

export default Navbar;