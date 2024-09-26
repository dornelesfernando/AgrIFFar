import CardEquipe from './CardEquipe'
import styles from './Carousel.module.css'
import imgFer from '../img/fernando.jpg'

function Carousel(){
    return(
        <>
            <div className={styles.wrapper}>
                <i id="left" className={`fa-solid fa-angle-left`}></i>
                <ul className={styles.carousel}>
                    
                </ul>
                <i id="right" className={`fa-solid fa-angle-right`}></i>
            </div>
        </>
    )
}

export default Carousel