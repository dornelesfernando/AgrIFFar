/* Criar lista de usuários que estão cadastrados na plataforma

Deve-se conseguir excluir e
confirmar exclusão do usuário

adicionar css*/

import styles from './Users.module.css'

function Users(){
    return(
        <>
            <div className={styles.newUsers}>
                <h2>New Users</h2>
                <div className={styles.userList}>
                    <div className={styles.user}>
                        <img src="" />
                        <h2>Jack</h2>
                        <p>54 Min Ago</p>
                    </div>
                    <div className={styles.user}>
                        <img src="images/profile-3.jpg" />
                        <h2>Amir</h2>
                        <p>3 Hours Ago</p>
                    </div>
                    <div className={styles.user}>
                        <img src="images/profile-4.jpg" />
                        <h2>Ember</h2>
                        <p>6 Hours Ago</p>
                    </div>
                    <div className={styles.user}>
                        <img src="images/plus.png" />
                        <h2>More</h2>
                        <p>New User</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;