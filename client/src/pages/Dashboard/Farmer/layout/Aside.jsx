import styles from './Aside.module.css';

function Aside() {
    return (
        <>
            <aside className={styles.leftSection}>
                <div className={styles.logo}>
                    <button className={styles.menuBtn} id="menu-close">
                        <i className='bx bx-log-out-circle'></i>
                    </button>
                    <img src="assets/logo.png"/>
                    <a href="#">AsmrProg</a>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.item} id="active">
                        <i className='bx bx-home-alt-2'></i>
                        <a href="#">Overview</a>
                    </div>
                    <div className={styles.item}>
                        <i className='bx bx-grid-alt'></i>
                        <a href="#">Course</a>
                    </div>
                    <div className={styles.item}>
                        <i className='bx bx-folder'></i>
                        <a href="#">Resources</a>
                    </div>
                    <div className={styles.item}>
                        <i className='bx bx-message-square-dots'></i>
                        <a href="#">Message</a>
                    </div>
                    <div className={styles.item}>
                        <i className='bx bx-cog'></i>
                        <a href="#">Setting</a>
                    </div>
                </div>

                <div className={styles.pic}>
                    <img src="assets/pro.png"/>
                </div>

                <div className={styles.upgrade}>
                    <h5>Upgrade Your Plan</h5>
                    <div className={styles.link}>
                        <a href="#">Go to <b>PRO</b></a>
                        <i className='bx bxs-chevron-right'></i>
                    </div>
                </div>

            </aside>
        </>
    );
}

export default Aside;