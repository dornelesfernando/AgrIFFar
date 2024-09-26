import styles from './GetStarted.module.css'

function GetStarted(){
    return(
        <>
            <div className={styles.get_started} id="get-started">
                <p className={styles.header}>Sobre o aplicativo</p>

                <div className={styles.boxes}>
                    <div className={styles.boxText}>
                        <p className={styles.info_text}>
                            O AgriFFar tem como objetivo auxiliar os produtores da Agricultura Familiar por meio da Agricultura de Precisão, a qual é realizada pelo AgrIFFar. Através de suas funções, o AgrIFFar ajuda o agricultor na administração de suas terras, incluindo plantio, colheita, cuidados específicos com cada tipo de plantação, manejo de pragas, escolha do solo ideal, irrigação em diferentes fases da planta, além de oferecer suporte na gestão financeira da propriedade, levando em consideração seu tamanho, quantidade de trabalhadores e especificidades.
                        </p>
                    </div>

                    <div className={`${styles.boxText} ${styles.right}`}>
                        <p className={styles.info_text}>
                            A Agricultura de Precisão no AgrIFFar utiliza o sensor: Soli Analysis, o qual é estrategicamente implementado nas terras do usuário para fornecer dados em tempo real sobre o solo utilizado para o plantio. Essas informações cruciais incluem o nível de pH do solo, proporções de areia, argila, sais minerais, tipo de solo (argiloso, arenoso ou humoso), permeabilidade e orientações para adubação anual e irrigação específica. Os dados podem ser comparados a uma tabela de referência, orientando o agricultor sobre as condições ideais do solo para cada plantação.
                        </p>
                    </div>

                    <div className={styles.boxText}>
                        <p className={styles.info_text}>
                            Além das informações sobre solo e irrigação, o AgrIFFar fornece dados sobre pragas específicas de cada plantio, juntamente com instruções de combate. Um sistema de fotos facilita a identificação das pragas, permitindo comparação com o estado atual da planta. O aplicativo também oferece informações sobre a relevância do plantio no mercado, sugestões de maquinários e agrotóxicos para otimização de custos. As consultas do usuário ao sistema são feitas por meio de formulários construídos com base na Agricultura de Precisão.	
                        </p>
                    </div>
                    <div className={`${styles.boxText} ${styles.right}`}>
                        <p className={styles.info_text}>
                            O aplicativo tem acesso a informações cruciais, como tipos de plantios, quantidade plantada, tamanho do hectare ocupado, tamanho total da propriedade (com e sem plantio, incluindo áreas indisponíveis para uso), quantidade de trabalhadores e seu parentesco com o proprietário, maquinários e agrotóxicos utilizados na plantação. Essas informações, fornecidas pelo agricultor, são utilizadas para cálculos relacionados aos custos e lucros dos plantios, da propriedade e dos trabalhadores, com base nos formulários apresentados.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetStarted