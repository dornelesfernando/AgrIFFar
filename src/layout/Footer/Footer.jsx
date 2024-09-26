import styles from './Footer.module.css'

function Footer (){
    return (
        <>
            <div className={styles.footer}>

                <div className={styles.copyright}>
                    <p>Copyright 2024, Agriffar LabIfMaker.</p>
                </div>		

                <div className={styles.footer_header}>
                    Muitos apenas passam pela história, outros a escrevem
                </div>
                
                <div className={styles.footer_links}>
                    <div className={styles.link}>
                        <h5>Contato</h5>
                        <a className={styles.link_href} href="https://github.com/OrganizationLabIfMakerSan" target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                        <a className={styles.link_href} href="https://instagram.com/#" target="_blank" rel="noopener noreferrer"><p>Instagram</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;