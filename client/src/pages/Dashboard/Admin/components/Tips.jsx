/* O administrador poderá dar dicas para o agricultor

O componente deve: 
    Excluir dicas, 
    Confirmar exclusão,
    Registrar Dicas

Arrumar css
*/

import RedirectIfEmpty from '../../../../service/RedirectIfEmpty';
import styles from './Tips.module.css'

function Tips(){
    return(
        <>
            <RedirectIfEmpty />
        </>
    )
}

export default Tips;