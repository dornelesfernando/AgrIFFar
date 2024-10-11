import styles from './Watermark.module.css'
import React, { useState } from 'react';

function Watermark(){
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
    
    return(
        <>
            <div className="container">
                <a 
                    href="./" 
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
            </div>
        </>
    )
}

export default Watermark;