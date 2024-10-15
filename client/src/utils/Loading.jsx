import styles from './Loading.module.css'

function Loading(){
    return(
        <div className={styles.container}>
            <div className={styles.dots}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <h1>Aguarde só um pouquinho...</h1>
        </div>
    )
}

export default Loading;