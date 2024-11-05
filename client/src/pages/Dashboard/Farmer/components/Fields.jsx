import styles from './Fields.module.css';

function Fields(){
    return(
        <>
            <div className={styles.fields}>
                <div className={styles.title}s>
                    <h1>Meus campos</h1>
                </div>
                <div className={styles.fieldsList}>
                    <div className={styles.field}>
                        <div className={styles.image}>
                            <img src='../../../../../public/img/fields/campo1.jpg' alt="" />
                        </div>
                            <h2>Campo 1</h2>
                        <div className={styles.dataField}>
                            <p>Humidade: </p>
                            <p>Temperatura: </p>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.image}>
                            <img src='../../../../../public/img/fields/campo2.jpeg' alt="" />
                        </div>
                            <h2>Campo 2</h2>
                        <div className={styles.dataField}>
                            <p>Humidade: </p>
                            <p>Temperatura: </p>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.image}>
                            <img src='../../../../../public/img/fields/campo3.jpg' alt="" />
                        </div>
                        <h2>Campo 3</h2>
                        <div className={styles.dataField}>
                            <p>Humidade: </p>
                            <p>Temperatura: </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fields;