import styles from './Navbar.module.css'

function Navbar(){
    return(
        <>
            <div className={styles.navbar}>
                <a href="index.php" className={styles.logo}>Agriffar</a>
                    <img className={styles.root} src="assets/img/plant-and-root.png" alt="root"/>
                <div className={styles.nav_buttons} id="navMenu">
                    <a href="../agricultor/formularioagricultor.php"> <button className={styles.nav_btn}>CADASTRO</button>  </a>
                    <a href="../login.php"> <button className={styles.nav_btn}>LOGIN</button> </a>
                </div>

                <button className={styles.toggler}>
                    <i className='bx bx-menu'></i>
                </button>
            </div>
        </>
    )
}

export default Navbar