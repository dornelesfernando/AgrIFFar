import Watermark from '../../../layout/Watermark/Watermark';
import styles from './Toggle.module.css'

function Toggle(){
    return(
        <>
            <div className={styles.toggle}>
                <Watermark />
                <div className={styles.close} id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>
        </>
    )
}

export default Toggle;

