import styles from './LogIn.module.css'

function LogIn(){
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block">
                                        <img src="img/foto_pg_login.png" alt="Plantação"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Bem-vindo!</h1>
                                            </div>
                                            <form className="user" method="POST" action="login.php">
                                                <div className="form-group" >
                                                    <input name="email" type="email" className="form-control form-control-user" aria-describedby="emailHelp" placeholder="E-mail..." required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name="senha" className="form-control form-control-user" placeholder="Senha" required/>
                                                </div>
                                                <input type="submit" value="Login" className="btn btn-success btn-user btn-block" />
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <a className="small" href="agricultor/formularioagricultor.php">Criar uma conta!</a> &nbsp;&nbsp; <a className="small" href="paginainicial/index.php">Página inicial</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn