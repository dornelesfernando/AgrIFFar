import React from 'react';
import styles from './CardEquipe.module.css'; // Certifique-se de importar o CSS

function CardEquipe({ imgSrc, name, position, curse }) {
    const defaultImg = "/img/default.jpg";

    return (
        <li className={styles.card}>
            <div className={styles.img}>
                <img src={imgSrc || defaultImg} alt="img" draggable="false" />
            </div>
            <h2>{name || 'Usuário'}</h2>
            <span>{`${position || 'Voluntário'} - ${curse || 'Curso'}`}</span>
        </li>
    );
}

export default CardEquipe;