import Carousel from './Carousel'
import styles from './EquipeInfo.module.css'

function EquipeInfo(){
    return(
        <>
            <div className={styles.equipe_info}>
                <p className={styles.title}>
                    Equipe
                </p>
                <p className={styles.info_text}>
                    Somos a equipe desenvolvedora do AgrIFFar!
                </p>

                <Carousel />
            </div>
        </>
    )
}

export default EquipeInfo