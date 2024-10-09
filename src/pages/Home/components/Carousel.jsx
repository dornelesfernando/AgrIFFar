import styles from './Carousel.module.css';
import CardEquipe from './CardEquipe';
import { useCarousel } from '../../../hooks/UseCarousel';
import equipeData from '../../../data/equipe.json';

function Carousel() {
    const { wrapperRef, carouselRef } = useCarousel();

    const equipe = equipeData; 

    return (
        <div ref={wrapperRef} className={styles.wrapper}>
            <i id="left" className={`fa-solid fa-angle-left`}></i>
            <ul ref={carouselRef} className={styles.carousel}>
                {equipe.map((membro, index) => (
                    <CardEquipe 
                        key={index}
                        imgSrc={membro.imgSrc}
                        name={membro.name}
                        position={membro.position}
                        curse={membro.curse}
                    />
                ))}
            </ul>
            <i id="right" className={`fa-solid fa-angle-right`}></i>
        </div>
    );
}

export default Carousel;