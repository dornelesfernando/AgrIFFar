import styles from './Overview.module.css'

function Overview(){
    return(
        <>
            <div className={styles.analyse}>
                <div className={styles.sales}>
                    <div className={styles.status}>
                        <div className={styles.info}>
                            <h3>Total Sales</h3>
                            <h1>$65,024</h1>
                        </div>
                        <div className={styles.progresss}>
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className={styles.percentage}>
                                <p>+81%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.visits}>
                    <div className={styles.status}>
                        <div className={styles.info}>
                            <h3>Site Visit</h3>
                            <h1>24,981</h1>
                        </div>
                        <div className={styles.progresss}>
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className={styles.percentage}>
                                <p>-48%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.searches}>
                    <div className={styles.status}>
                        <div className={styles.info}>
                            <h3>Searches</h3>
                            <h1>14,147</h1>
                        </div>
                        <div className={styles.progresss}>
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className={styles.percentage}>
                                <p>+21%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview;