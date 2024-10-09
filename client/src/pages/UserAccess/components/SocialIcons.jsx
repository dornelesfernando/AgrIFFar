import styles from './SocialIcons.module.css'

function SocialIcons(){
    return(
        <>
            <div className={styles.socialIcons}>
                <a href="#" className={styles.icon} aria-label="Google Plus">
                    <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className={styles.icon} aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className={styles.icon} aria-label="Github">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className={styles.icon} aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </>
    )
}

export default SocialIcons;