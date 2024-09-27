import styles from './TopContainer.module.css'

function TopContainer(){
    return(
        <>
            <div className={styles.topContainer}>
                <div className={styles.info_box}>
                    <p className={styles.header}>
                        Bem vindo ao AgrIFFar!
                    </p>
                    <p className={styles.info_text}>

                        Bem-vindo à nossa plataforma web, desenvolvida para oferecer suporte integral aos agricultores familiares. Nosso foco está na eficiente administração de terras, plantações e na gestão econômica das propriedades. Buscamos aprimorar seu desempenho rural através da implementação da Agricultura de Precisão, garantindo uma administração otimizada e resultados mais sólidos para o seu negócio agrícola.	
                    </p>
                    <div className={styles.info_buttons}>
                        <a href="../../SignUp/"> <button className={`${styles.info_btn} ${styles.nav_btn}`}>Cadastro</button></a>
                        <a href="../../LogIn/"> <button className={`${styles.info_btn} ${styles.nav_btn}`}>Login</button></a>
                    </div>
                </div>
                <div className={styles.nft_box}>
                    <img src="aaa" className={styles.nft_pic}/>
                </div>
            </div>
        </>
    )
}

export default TopContainer