import styles from './EquipeInfo.module.css'

function EquipeInfo(){
    return(
        <>
            <div className={styles.equipe_info}>
                <p className={styles.title}>
                    Equipe
                </p>
                <p className={styles.info_text}>
                    Somos a equipe desenvolvedora do AgrIFFar!
                </p>

                <div className={styles.wrapper}>
                    <i id="left" className={`fa-solid fa-angle-left`}></i>
                    <ul className={styles.carousel}>
                        <li className={styles.card}>
                            <div className={styles.img}><img src='' alt="img" draggable="false"/></div>
                            <h2>Karlise Soares Nascimento</h2>
                            <span>Coordenadora</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/fernando.jpg" alt="img" draggable="false"/></div>
                            <h2>Fernando Dorneles da Silva</h2>
                            <span>Bolsista - Téc. Informática</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/Luis.jpg" alt="img" draggable="false"/></div>
                            <h2>Luis Eduardo Baumgartner de Quadra</h2>
                            <span>Bolsista - Téc. Informática</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src='' alt="img" draggable="false"/></div>
                            <h2>Ana Laura Hepp Galarça</h2>
                            <span>Bolsista - Téc. Manutenção e Suporte em Informática</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/Mauricio.jpg" alt="img" draggable="false"/></div>
                            <h2>Mauricio Bilharva Melo</h2>
                            <span>Bank Manager</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/Tiarla.jpeg" alt="img" draggable="false"/></div>
                            <h2>Tiarla Regina Borgartz Schreiber</h2>
                            <span>Bank Manager</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/Marcio.jpg" alt="img" draggable="false"/></div>
                            <h2>Marcio Cristiano Augusto Brune</h2>
                            <span>App Designer</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/Manoela.jpg" alt="img" draggable="false"/></div>
                            <h2>Manoela Moraes dos Santos</h2>
                            <span>App Designer</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/thiago.jpg" alt="img" draggable="false"/></div>
                            <h2>Thiago Mikael Copetti dos Santos</h2>
                            <span>App Designer</span>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.img}><img src="/img/GLENIO.jpg" alt="img" draggable="false"/></div>
                            <h2>Glenio Venes Flôres</h2>
                            <span>App Designer</span>
                        </li>
                    </ul>
                    <i id="right" className={`fa-solid fa-angle-right`}></i>
                </div>
            </div>
        </>
    )
}

export default EquipeInfo