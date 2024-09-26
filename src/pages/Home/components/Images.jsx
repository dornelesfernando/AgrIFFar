import styles from './Images.module.css'

function Images(){
    return(
        <>
            <div className={styles.images} id="images">
                <div className={styles.cool}>
                    <div className={styles.box_sub1}>
                        <img className={styles.sub1} src="/img/img2.jpg" alt=""/>
                    </div>
                    <div className={styles.box_sub2}>
                        <img className={styles.sub2} src="/img/img3.jpg" alt=""/>
                    </div>
                </div>
                <div className={styles.coolCenter}>
                    <img className={styles.imgCenter} src="/img/img1 (definitiva).jpg" alt=""/>
                    <p className={styles.title}>
                        Bem vindo ao AgrIFFar!
                    </p>
                </div>
                <div className={styles.cool}>
                    <div className={styles.box_sub3}>
                        <img className={styles.sub1} src="/img/img3.jpg" alt=""/>
                    </div>
                    <div className={styles.box_sub4}>
                        <img className={styles.sub2} src="/img/img2.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Images