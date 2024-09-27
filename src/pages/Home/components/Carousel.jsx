import CardEquipe from './CardEquipe'
import styles from './Carousel.module.css'

function Carousel(){
    return(
        <>
            <div className={styles.wrapper}>
                <i id="left" className={`fa-solid fa-angle-left`}></i>
                <ul className={styles.carousel}>
                    <CardEquipe imgSrc='' name='' position='' curse='' />
                </ul>
                <i id="right" className={`fa-solid fa-angle-right`}></i>
            </div>
        </>
    )
}

export default Carousel