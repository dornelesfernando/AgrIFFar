import React from 'react';
import styles from './CardEquipe.module.css'; // Certifique-se de importar o CSS

function CardEquipe({ imgSrc, name, position, curse }) {
    return (
        <li className={styles.card}>
            <div className={styles.img}>
                <img src={imgSrc} alt="img" draggable="false" />
            </div>
            <h2>{name || 'Usuário'}</h2>
            <span>{`${position || 'Voluntário'} - ${curse || 'Curso'}`}</span>
        </li>
    );
}

export default CardEquipe;