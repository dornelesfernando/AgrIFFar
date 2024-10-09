import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [showImage, setShowImage] = useState(false); // Estado para controlar a visibilidade da imagem
    const [exitAnimation, setExitAnimation] = useState(false); // Estado para a animação de saída

    const handleMouseEnter = () => {
        setExitAnimation(false); // Remove a animação de saída ao entrar
        setShowImage(true); // Mostra a imagem
    };

    const handleMouseLeave = () => {
        setExitAnimation(true); // Ativa a animação de saída
        // Esconde a imagem após a animação de saída
        setTimeout(() => {
            setShowImage(false);
        }, 400); // O tempo deve ser o mesmo que o da animação de saída
    };

    const navigate = useNavigate();

    const handleButtonClick = (isLogin) => {
        navigate('/UserAccess', { state: { isLogin } });
    };

    return (
        <div className={styles.navbar}>
            <a 
                href="index.php" 
                className={styles.logo} 
                onMouseEnter={handleMouseEnter} // Mostra a imagem ao passar o mouse
                onMouseLeave={handleMouseLeave} // Oculta a imagem ao tirar o mouse
            >
                Agriffar
            </a>

            {/* A imagem só será renderizada se showImage for true */}
            {showImage && (
                <img 
                    className={`${styles.root} ${exitAnimation ? styles.exit : ''}`} 
                    src="/img/plantaLogo.png" 
                    alt="Planta Logo" 
                />
            )}

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