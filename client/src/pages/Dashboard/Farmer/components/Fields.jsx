import styles from './Fields.module.css';
import Sidebar from '../../layout/Sidebar';
import RightSection from '../../layout/RightSection';

function Fields(){
    return(
        <>
            <div className={styles.container}>
                <aside>
                    <Sidebar userType='farmer' />
                </aside>
                <main>
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
                                    <p>Humidade: 84%</p>
                                    <p>Temperatura: 34°C</p>
                                </div>
                            </div>
                            <div className={styles.field}>
                                <div className={styles.image}>
                                    <img src='../../../../../public/img/fields/campo2.jpeg' alt="" />
                                </div>
                                    <h2>Campo 2</h2>
                                <div className={styles.dataField}>
                                    <p>Humidade: 72%</p>
                                    <p>Temperatura: 36°C</p>
                                </div>
                            </div>
                            <div className={styles.field}>
                                <div className={styles.image}>
                                    <img src='../../../../../public/img/fields/campo3.jpg' alt="" />
                                </div>
                                <h2>Campo 3</h2>
                                <div className={styles.dataField}>
                                    <p>Humidade: 87%</p>
                                    <p>Temperatura: 30°C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <RightSection />
            </div>
        </>
    )
}

export default Fields;